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
        };
        this.updateEnquiryList = this.updateEnquiryList.bind(this);
        this.nextPageEvent = this.nextPageEvent.bind(this);
    }

    async componentDidMount(){
        await this.getSsmStates();
        this.removeDuplicate();
        this.surveyModel = new Survey.ReactSurveyModel(SurveyJson.ADMISSION_STATE_FORM);
        this.setState({ survey: SurveyJson.ADMISSION_STATE_FORM});
    }

    nextPageEvent(){
        console.log(this.surveyModel);
    }
    prevPageEvent(){
        alert("prev page");
    }

    getModel(json: any){
        var model = new Survey.ReactSurveyModel(json);
        return (<Survey.Survey model={model} onComplete={this.onComplete} nextPage={this.nextPageEvent} prevPage={this.prevPageEvent} />);
        // return (<Survey.Survey model={model} onComplete={this.onComplete}  />);
    }

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
    
    async fetchCurState(enqId: any) {
        const machineId = Utils.getSSMachineId(config.SSM_ID, enqId);
        console.log('EnquiryGrid - machineId ::--> ', machineId);
        const data = {
			machineId: machineId
		}
	    await Utils.postReq(config.SSM_CUR_STATE + "?machineId=" + machineId, data)
			.then((res: any) => {
				console.log('EnquiryGrid - Current State: ', res.data);
				this.updateStateData(res.data);
			})
			.catch((err: any) => {
				console.error('EnquiryGrid: Failed to fetch ', err);
			});
    }

    removeDuplicate(){
        const arr = this.state.ssmStatesData;
        let nm= "", target="Lost";
        let obj:any = [];
        arr.map( (item: any) => {
            if (item.target !== target) {
                console.log("Unique items ::::: ",item);
                nm = item.name;
                obj.push(item);
            }
        });
        this.setState({
            uniqueStateData: obj,
            ssmStatesData: obj,
            isLoading: true,
        });
    }

    updateStateData(curState: any) {
        console.log("Current Status :::::: ",curState);
        const arr = this.state.uniqueStateData; // sort states according to target
        // this.removeDuplicate();
		// const ind = Utils.arrayItemHasKeyValue(arr, 'name', curState);
		// if (ind >= 0) {
			arr.map((item: any, index: any) => {
				if (item.name === curState) {
                    console.log("Current Item :::::: ",item);
                    item.active = true;
                    item.status = 'Y';
                } 
                // else if (index < ind) {
				// 	item.status = 'Y';
				// }
				return item;
			});
		// }
		this.setState({
            ssmStatesData: arr,
            uniqueStateData: arr,
            currentState: curState
		});
    }
    
    showDetail(e: any, bShow: boolean, enquiryObj: any) {
        this.fetchCurState(enquiryObj.id);
        e && e.preventDefault();
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
                                            <Survey.Survey model={this.surveyModel} onComplete={this.onComplete} onCurrentPageChanging ={this.nextPageEvent} prevPage={this.prevPageEvent} />
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