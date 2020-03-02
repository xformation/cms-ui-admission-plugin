import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdmissionEnquiryPage from './EnquiryPage';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Slider from './Slider';
import {config} from '../../../config';
import {Utils} from '../_utilites/Utils';
import StudentPersonalInfo from '../SsmFlow/StudentPersonalInfo';
import  "../../../css/custom.css";
import {SurveyJson} from './SurveryJson';

import * as Survey from "survey-react";
import "survey-react/survey.css";
import "survey-react/modern.css";

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    totalRecords?: number | string;
    type?: string;
    source?: string;
    sourceOfApplication?: string;
    user?: any;
    
}

export class EnquiryGrid<T = {[data: string]: any}> extends React.Component<AdmissionEnquiryProps, any> {
    surveyModel:any = null;
    SSM_SORT_ORDER : any = {
        "EnquiryReceived": 0,
        "PersonalInfo": 1,
        "AcademicInfo": 2,
        "Documents": 3,
        "AdmissionGranted": 4,
    };
    constructor(props: AdmissionEnquiryProps) {
        super(props);
        this.state = {
            list: this.props.data,
            totalRecords: this.props.totalRecords,
            type: this.props.type,
            isModalOpen: false,
            enquiryObj: {},
            source: this.props.source,
            sourceOfApplication: this.props.sourceOfApplication,
            user: this.props.user,
            ssmStatesData: [],
            isLoading: false,
            uniqueStateData: [],
            currentState: null,
            survey: null,
            currentPageNo: null,
        };
        this.createRows = this.createRows.bind(this);
        this.updateEnquiryList = this.updateEnquiryList.bind(this);
        this.nextPageEvent = this.nextPageEvent.bind(this);
        this.prevPageEvent = this.prevPageEvent.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.getSsmStates = this.getSsmStates.bind(this);
        this.fetchCurState = this.fetchCurState.bind(this);
        this.removeDuplicateAndSort = this.removeDuplicateAndSort.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.updateSliderStates = this.updateSliderStates.bind(this);
    }

    async componentDidMount(){
        await this.getSsmStates();
        this.removeDuplicateAndSort();
        this.surveyModel = new Survey.ReactSurveyModel(SurveyJson.ADMISSION_STATE_FORM);
        this.setState({ survey: SurveyJson.ADMISSION_STATE_FORM});
    }

    async nextPageEvent(){
        // console.log("Next EVENT ::::::: ",this.surveyModel.currentPageValue.name);
        // if(this.surveyModel.currentPageValue){
        //     const curSt = await Utils.sendSsmEvent("Submit"+this.surveyModel.currentPageValue.name, this.state.enquiryObj.id);
        //     console.log("Current State Next Event :::::::: ",curSt);
        //     this.updateStateData(curSt);
        //     // .then((res: any) => {
        //         //     console.log('Current State set from Next Event : ', res.data);
        //         // });
        // }
    }

    /**
     * prevPageEvent is called on onCurrentPageChanged survey event. it should do the state changes
     * in workflow.
     */
    async prevPageEvent(){
        
        console.log("1. prevPageEvent : Page name --------- ",this.surveyModel.currentPageValue);
        if(this.surveyModel.currentPageValue){
            
            let eventType = this.surveyModel.currentPageValue.name;
            if(this.state.currentPageNo !== null && this.surveyModel.currentPageValue.visibleIndex < this.state.currentPageNo){
                eventType = "BackTo"+this.surveyModel.currentPageValue.name;
            }
            console.log("2. prevPageEvent : event type --------- ",eventType);
            await Utils.sendSsmEvent(eventType, this.state.enquiryObj.id)
            // this.updateStateData(curSt);
                // .then((curSt: any) => {
                //     console.log('Current State set from Previous Event : ', curSt);
                // });
            await this.updateSliderStates(this.surveyModel.currentPageValue.name);
            this.setState({
                currentPageNo: this.surveyModel.currentPageValue.visibleIndex,
            });
            
        }
    }

    // getModel(json: any){
    //     var model = new Survey.ReactSurveyModel(json);
    //     return (<Survey.Survey model={model} onComplete={this.onComplete} nextPage={this.nextPageEvent} prevPage={this.prevPageEvent} />);
    //     // return (<Survey.Survey model={model} onComplete={this.onComplete}  />);
    // }

    onComplete(survey: any, options: any) {
        console.log("Survey results: " + JSON.stringify(survey.data));
    }

    async getSsmStates() {
        console.log("Calling ssm state for admission enquiry :::: ");
        const URL = config.SSM_LIST_STATES + '?ssmId=' + config.SSM_ID;
        await Utils.getReq(URL)
            .then((res: any) => {
                console.log('EnquiryGrid states : ', res);
                if (res && Array.isArray(res.data)) {
                    const arr = Utils.getStatesSet(res.data);
                    this.setState({
                        ssmStatesData: arr,
                    });
                    
                } else {
                    console.warn('EnquiryGrid: Invalid response for list states ' + config.SSM_LIST_STATES);
                }
                // this.fetchCurState(enqId);
            }).catch((err: any) => {
                console.error('EnquiryGrid: Failed to fetch states list ', err);
            });
        
    }
    
    /**
     * currentState rest API creates a state in workflow if it does not exits. If exist, retrieves it.
     */
    async fetchCurState(enqId: any) {
        const machineId = await Utils.getSSMachineId(config.SSM_ID, enqId);
        console.log('1. fetchCurState - machineId ::--> ', machineId);
        const data = {
			machineId: machineId
		}
	    await Utils.postReq(config.SSM_CUR_STATE + "?machineId=" + machineId, data)
			.then((res: any) => {
				console.log('2. fetchCurState - Current State: ', res.data);
                // this.updateStateData(res.data);
                this.setState({
                    currentState: res.data,
                });
			})
			.catch((err: any) => {
				console.error('3. fetchCurState: Failed to fetch ', err);
			});
    }

    removeDuplicateAndSort(){
        const arr = this.state.ssmStatesData;
        let obj:any = [];
        let objName: any = {};
        arr.map( (item: any) => {
            if(!objName[item.name] ){
                console.log("removeDuplicateAndSort - Unique items ::::: ",item);
                objName[item.name] = item;
                if(item.name !== "Lost"){
                    let index = this.SSM_SORT_ORDER[item.name];
                    obj[index] = item;
                }
            }
        });
        this.setState({
            uniqueStateData: obj,
            ssmStatesData: obj,
            isLoading: true,
        });
    }

    async updateSliderStates(curState: any) {
        console.log("1. updateSliderStates - Current state ---- ",curState);
        const arr = this.state.ssmStatesData; 
        const currentIndex = this.SSM_SORT_ORDER[curState];
        const obj: any = [];
        await arr.map((item: any, index: any) => {
            console.log("2. updateSliderStates - Current Item ---- ",item);
            let i = this.SSM_SORT_ORDER[item.name];
            // if (item.name === this.state.currentState) {
            //     item.active = true;
            //     item.status = 'Y';
            //     obj[i] = item;
            // }else 
            if(index <= currentIndex){
                item.status = 'Y';
            }else{
                item.status = 'N';
            } 
            obj[i] = item;
            // if (index < i) {
            //     item.status = 'Y';
            //     obj[i] = item;
            // }
            // return item;
        });
		// }
		this.setState({
            uniqueStateData: obj,
            // ssmStatesData: obj,
            // isLoading: true,
        });
    }
    
    async showSelectedPage(curSt: any) {
        await console.log("1. showSelectedPage :::: ");
        for (var i = 0; i < this.surveyModel.visiblePages.length; i++) {
            let pm = this.surveyModel.visiblePages[i];
            console.log("2. showSelectedPage. Current Page :: ",pm);
            if(pm.name === curSt){
                this.surveyModel.currentPageNo = pm.visibleIndex;
                console.log("3. showSelectedPage ::::: Page name : ",this.surveyModel.currentPageValue);
                break;
            }
        }
        await console.log("4. showSelectedPage :::::: ");
    }

    async showDetail(e: any, bShow: boolean, enquiryObj: any) {
        e && e.preventDefault();
        if(bShow){
            await this.fetchCurState(enquiryObj.id);
            if(this.state.currentState === "EnquiryReceived"){
                await Utils.sendSsmEvent("PersonalInfo", enquiryObj.id);
            }
            await this.updateSliderStates(this.state.currentState);
            await this.showSelectedPage(this.state.currentState);
        }

        this.setState(() => ({
            isModalOpen: bShow,
            enquiryObj: enquiryObj,
            source: this.props.source,
            sourceOfApplication: this.props.sourceOfApplication,
            isLoading: bShow,
        }));
    }

    createRows(objAry: any) {
        const { source } = this.state;
        console.log("createRows() - Enquiry list on Grid page:  ", objAry);
        if(objAry === undefined || objAry === null) {
            return;
        }
        const mutateResLength = objAry.length;
        const retVal = [];
          for (let i = 0; i < mutateResLength; i++) {
            const admissionEnquiry = objAry[i];
            retVal.push(
              <tr >
                <td>{admissionEnquiry.id}</td>
                <td>{admissionEnquiry.studentName}&nbsp;{admissionEnquiry.studentMiddleName}&nbsp;{admissionEnquiry.studentLastName} </td>
                <td>{admissionEnquiry.cellPhoneNo}</td>
                <td>{admissionEnquiry.landLinePhoneNo}</td>
                <td>{admissionEnquiry.emailId}</td>
                <td>{admissionEnquiry.enquiryStatus}</td>
                <td>{admissionEnquiry.strCreatedOn}</td>
                <td>
                    {
                        admissionEnquiry.enquiryStatus !== "CONVERTED_TO_ADMISSION" && admissionEnquiry.enquiryStatus !== "DECLINED" && (
                            <button className="btn btn-primary" onClick={e => this.showDetail(e, true, admissionEnquiry)}>{source !== "ADMISSION_PAGE" ? 'Edit' : 'Convert To Admission'}</button>
                        )
                    }
                </td>
              </tr>
            );
          }
        return retVal;
    }

    async updateEnquiryList(updatedEnquiryList: any){
        this.setState({
            list: updatedEnquiryList,
        });
    }

    render() {
        const {data} = this.props
        const {list, totalRecords, type, isModalOpen, enquiryObj, source, sourceOfApplication, user, currentState} = this.state;
        return (
            <main>
                <Modal isOpen={isModalOpen} className="model">
                    <ModalHeader>{source !== 'ADMISSION_PAGE' ? 'Edit Admission Enquiry' : 'Grant Admission'} </ModalHeader>
                    <ModalBody className="modal-content">
                        {
                            source === 'ADMISSION_PAGE' ?
                                <div>
                                    <div className="text-center  m-b-1" >
                                        <Slider data={this.state.uniqueStateData} />
                                    </div>
                                    <div className="xform-container" style={{height:'300px', overflowY:'auto'}}>
                                        {/* {this.state.survey ? this.getModel(this.state.survey) : null} */}
                                        {
                                            this.surveyModel && 
                                            <Survey.Survey model={this.surveyModel} onComplete={this.onComplete} onCurrentPageChanging ={this.nextPageEvent} onCurrentPageChanged ={this.prevPageEvent} />
                                        }
                                    </div>
                                    {/* <div className="xform-container" style={{height:'300px', overflowY:'auto'}}>
                                        <StudentPersonalInfo className="xform-container"></StudentPersonalInfo>
                                    </div> */}
                                    <div className="text-center" >
                                        <button className="btn btn-danger border-bottom" onClick={(e) => this.showDetail(e, false, {})}>Cancel</button>
                                    </div>        
                                </div>  
                            : <AdmissionEnquiryPage onSaveUpdate={this.updateEnquiryList} user={user} operationType={"EDIT"} enquiryObject={enquiryObj} origin={source} sourceOfApplication={sourceOfApplication}></AdmissionEnquiryPage>
                        }
                        {
                            source !== 'ADMISSION_PAGE' ?
                            <div className="text-center" style={{marginLeft:'222px', marginTop:'-34px'}}>
                                <button className="btn btn-danger border-bottom" onClick={(e) => this.showDetail(e, false, {})}>Cancel</button>
                            </div>
                            : null
                        }
                        
                    </ModalBody>
                </Modal>
                <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
                    {
                        source !== 'ADMISSION_PAGE' && (
                            <span style={{ fontSize: "13px", color: "Blue"}}>{type} : {totalRecords}</span>
                        )
                    }
                </div>
                <div style={{width:'100%', height:'250px', overflow:'auto'}}>
                    <table id="admissionEnquiryTable" className="striped-table fwidth bg-white p-2">
                        <thead>
                            <tr>
                                <th>Enquiry Id</th>
                                <th>Student Name</th>
                                <th>Cell Phone No</th>
                                <th>Land Line Phone No</th>
                                <th>Email Id</th>
                                <th>Status</th>
                                <th>Enquiry Date</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.createRows(list) }
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default EnquiryGrid;