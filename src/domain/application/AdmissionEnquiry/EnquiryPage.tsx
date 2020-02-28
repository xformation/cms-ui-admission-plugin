import * as React from 'react';
import { withApollo } from 'react-apollo';
import {MessageBox} from '../Message/MessageBox'
import { SAVE_ADMISSION_ENQUIRY } from '../_queries';
import {commonFunctions} from '../_utilites/common.functions';
import  "../../../css/custom.css";
import * as moment from 'moment';
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';
import axios from 'axios';
import {config} from '../../../config';
import {Utils} from '../_utilites/Utils';

type AdmissionEnquiryState = {
    operationType: any,
    enquiryObject: any,
    admissionEnquiryData: any,
    academicYearId: any,
    branchId: any,
    dob: any,
    origin: any,
    sourceOfApplication: any
    departmentId: any;
    user: any;
    stateData: any;
    isStateExists: any;
};

const ERROR_MESSAGE_MANDATORY_FIELD_MISSING = "Mandatory fields missing";
const ERROR_MESSAGE_INVALID_EMAIL_ID = "Invalid email id";
const ERROR_MESSAGE_SERVER_SIDE_ERROR = "Due to some error in admission service, admission enquiry could not be saved. Please check admission service logs";
const SUCCESS_MESSAGE_ADMISSION_ENQUIRY_ADDED = "New admission enquiry saved successfully";
const SUCCESS_MESSAGE_ADMISSION_ENQUIRY_UPDATED = "Admission enquiry updated successfully";
const SUCCESS_MESSAGE_ADMISSION_GRANTED = "Admission granted";
const ERROR_MESSAGE_ACADEMIC_YEAR_MISSING = "Please select academic year from preferences";
const ERROR_MESSAGE_BRANCH_MISSING = "Please select branch from preferences";
const ERROR_MESSAGE_DEPARTMENT_MISSING = "Please select department from preferences";

export interface NewAdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    sourceOfApplication?: any,
    origin?: any,
    enquiryObject?: any;
    [operationType: string] : any;
    branchId?: any;
    academicYearId?: any;
    departmentId?: any;
    user?: any;
    onSaveUpdate?: any;
}

class AdmissionEnquiryPage extends React.Component<NewAdmissionEnquiryProps, AdmissionEnquiryState>{
    
    constructor(props: NewAdmissionEnquiryProps) {
        super(props);
        this.state = {
            sourceOfApplication: this.props.sourceOfApplication,
            origin: this.props.origin,
            enquiryObject: this.props.enquiryObject,
            operationType: this.props.operationType,
            user: this.props.user,
            dob: "",
            branchId: null,
            academicYearId: null,
            departmentId: null,
            admissionEnquiryData: {
                errorMessage:"",
                successMessage:"",
                studentName: "",
                studentMiddleName: "",
                studentLastName: "",
                cellPhoneNo: "",
                landLinePhoneNo: "",
                emailId: "",
                gender: "",
                modeOfEnquiry: "",
                highestQualification: "",
                comments: "",
                
            },
            stateData: [],
            isStateExists: false,
        };
        this.changeTextBoxBorderToError = this.changeTextBoxBorderToError.bind(this);
        this.restoreTextBoxBorderToNormal = this.restoreTextBoxBorderToNormal.bind(this);
        this.addAdmissionEnquiry = this.addAdmissionEnquiry.bind(this);
    }
    
    async componentDidMount(){
        await this.registerSocket();
        await this.ssmStatesExists();
        if(this.state.isStateExists === false){
            console.log("Admission enquiry states not exists. Creating states");
            await this.initStateMachineStates();
        }
    }

    registerSocket() {
        const socket = wsCmsBackendServiceSingletonClient.getInstance();

        socket.onmessage = (response: any) => {
            let message = JSON.parse(response.data);
            console.log("2. message received from server ::: ", message);
            this.setState({
                branchId: message.selectedBranchId,
                academicYearId: message.selectedAcademicYearId,
                departmentId: message.selectedDepartmentId,
            });
            console.log("2. branchId: ",this.state.branchId);
            console.log("2. ayId: ",this.state.academicYearId);  
        }
    
        socket.onopen = () => {
            console.log("2. Opening websocekt connection on Admission EnquiryPage.tsx. User : ",this.state.user.login);
            socket.send(this.state.user.login);
        }
    
        window.onbeforeunload = () => {
            console.log("2. Closing websocket connection with cms backend service");
        }
    }

    changeTextBoxBorderToError(textBoxValue: any, objName: any){
        if(textBoxValue.trim() === ""){
            const obj: any = document.querySelector("#"+objName);
            obj.className = "gf-form-input max-width-18 input-textbox-error";
        }
        if(objName === "emailId"){
            const obj: any = document.querySelector("#"+objName);
            obj.className = "gf-form-input max-width-18 input-textbox-error";
        }
    }
    
    restoreTextBoxBorderToNormal(objName: any){
        const obj: any = document.querySelector("#"+objName);
        obj.className = "gf-form-input max-width-18";
    }

    onChange = (e: any) => {
        e.preventDefault();
        const { name, value } = e.nativeEvent.target;
        const { admissionEnquiryData, enquiryObject, operationType, dob } = this.state;
        admissionEnquiryData.errorMessage = "";
        admissionEnquiryData.successMessage = "";
        if(operationType === "ADD"){
            this.setState({
                admissionEnquiryData: {
                    ...admissionEnquiryData,
                    [name]: value
                }
            });
        }else{
            this.setState({
                enquiryObject: {
                    ...enquiryObject,
                    [name]: value
                }
            });
            if(name === "dateOfBirth"){
                console.log("dob for update : ",value);
                let dob = moment(value, "YYYY-MM-DD").format("YYYY-MM-DD");
                this.setState({
                    dob: dob
                }); 
            }
        }
        
        this.restoreTextBoxBorderToNormal(name);
    }

    saveEnquiry = (e: any) => {
        const { admissionEnquiryData, enquiryObject, operationType, sourceOfApplication, academicYearId, branchId, departmentId } = this.state;
        admissionEnquiryData.errorMessage = "";
        this.setState({
            admissionEnquiryData: admissionEnquiryData
        });
        
        console.log("Operation type : ",this.state.operationType);
        
        if(academicYearId === undefined || academicYearId === null || academicYearId === ""){
            admissionEnquiryData.errorMessage = ERROR_MESSAGE_ACADEMIC_YEAR_MISSING;
            return;
        }
        if(branchId === undefined || branchId === null || branchId === ""){
            admissionEnquiryData.errorMessage = ERROR_MESSAGE_BRANCH_MISSING;
            return;
        }
        if(departmentId === undefined || departmentId === null || departmentId === ""){
            admissionEnquiryData.errorMessage = ERROR_MESSAGE_DEPARTMENT_MISSING;
            return;
        }
        if(operationType === "ADD"){
            if(admissionEnquiryData.studentName.trim() === "" 
                || admissionEnquiryData.studentLastName.trim() === ""
                || admissionEnquiryData.comments.trim() === ""){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
                    this.changeTextBoxBorderToError(admissionEnquiryData.studentName, "studentName");
                    this.changeTextBoxBorderToError(admissionEnquiryData.studentLastName, "studentLastName");
                    this.changeTextBoxBorderToError(admissionEnquiryData.comments, "comments");
                    return;
            }
            if(admissionEnquiryData.emailId !== ""){
                if(!commonFunctions.validateEmail(admissionEnquiryData.emailId)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_EMAIL_ID;
                    this.changeTextBoxBorderToError(admissionEnquiryData.emailId, "emailId");
                    return;
                } 
            }
            this.setState({
                admissionEnquiryData: admissionEnquiryData
            });
            let dob = null;
            if(admissionEnquiryData.dateOfBirth !== undefined && admissionEnquiryData.dateOfBirth !== null 
                && admissionEnquiryData.dateOfBirth.trim() !== "" ){
                    dob = moment(admissionEnquiryData.dateOfBirth, "YYYY-MM-DD").format("DD-MM-YYYY");
            }
            this.addAdmissionEnquiry(dob);
        }else {
            if(enquiryObject.studentName.trim() === "" 
                || enquiryObject.studentLastName.trim() === ""
                || enquiryObject.comments.trim() === ""){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
                    this.changeTextBoxBorderToError(enquiryObject.studentName, "studentName");
                    this.changeTextBoxBorderToError(enquiryObject.studentLastName, "studentLastName");
                    this.changeTextBoxBorderToError(enquiryObject.comments, "comments");
                    return;
            }
            if(enquiryObject.emailId !== "" && enquiryObject.emailId !== null && enquiryObject.emailId !== undefined){
                if(!commonFunctions.validateEmail(enquiryObject.emailId)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_EMAIL_ID;
                    this.changeTextBoxBorderToError(enquiryObject.emailId, "emailId");
                    return;
                } 
            }
            if(enquiryObject.enquiryStatus !== null && enquiryObject.enquiryStatus.trim() === ""){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
                    this.changeTextBoxBorderToError(enquiryObject.enquiryStatus, "enquiryStatus");
                    return;
            }
            this.setState({
                admissionEnquiryData: admissionEnquiryData,
                enquiryObject: enquiryObject
            });
            let dob = null;
            if(enquiryObject.dateOfBirth !== undefined && enquiryObject.dateOfBirth !== null 
                && enquiryObject.dateOfBirth.trim() !== "" ){
                    dob = moment(enquiryObject.dateOfBirth, "YYYY-MM-DD").format("DD-MM-YYYY");
            }
            this.updateAdmissionEnquiry();
        }
        
    }

    async addAdmissionEnquiry(dob: any){
        const { admissionEnquiryData, academicYearId, branchId, departmentId } = this.state;
        let admissionEnquiryInput = {
            studentName: admissionEnquiryData.studentName,
            studentMiddleName: admissionEnquiryData.studentMiddleName,
            studentLastName: admissionEnquiryData.studentLastName,
            cellPhoneNo: admissionEnquiryData.cellPhoneNo,
            landLinePhoneNo: admissionEnquiryData.landLinePhoneNo,
            emailId: admissionEnquiryData.emailId,
            strDateOfBirth: dob,
            gender: admissionEnquiryData.gender,
            highestQualification: admissionEnquiryData.highestQualification,
            modeOfEnquiry: admissionEnquiryData.modeOfEnquiry,
            comments: admissionEnquiryData.comments,
            academicYearId: academicYearId,
            branchId: branchId,
            departmentId: departmentId
        };

        let btn = document.querySelector("#btnSave");
        btn && btn.setAttribute("disabled", "true");
        let exitCode = 0;
        
        await this.props.client.mutate({
            mutation: SAVE_ADMISSION_ENQUIRY,
            variables: { 
                input: admissionEnquiryInput
             },
             fetchPolicy: 'no-cache'
        }).then((resp: any) => {
            console.log("Success in saveAdmissionEnquiryMutation. Exit code : ",resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode);
            exitCode = resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode;
            if(exitCode === 0 ){
                // call workflow rest API to create a new state of newly created admission enquiry
                this.fetchCurState(resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.id);
            }else {
                admissionEnquiryData.errorMessage = ERROR_MESSAGE_SERVER_SIDE_ERROR;
            }
        }).catch((error: any) => {
            exitCode = 1;
            console.log('Error in saveAdmissionEnquiryMutation : ', error);
        });
        btn && btn.removeAttribute("disabled");
        if(exitCode === 0 ){
            admissionEnquiryData.successMessage = SUCCESS_MESSAGE_ADMISSION_ENQUIRY_ADDED;
        }else {
            admissionEnquiryData.errorMessage = ERROR_MESSAGE_SERVER_SIDE_ERROR;
        }
        this.setState({
            admissionEnquiryData: admissionEnquiryData
        });
    }

    
    
    /**
     * fetchCurState method get the current state. if it does not exist it creats a new one 
     * with the givne machine id and return the initial state
     * @param enqId 
     */
    fetchCurState(enqId: any) {
        const machineId = Utils.getSSMachineId(config.SSM_ID, enqId);
        const data = {
			machineId: machineId
		}
	    Utils.postReq(config.SSM_CUR_STATE + "?machineId=" + machineId, data)
			.then((res: any) => {
				console.log('Current State: ', res.data);
				// this.updateStateData(res.data);
			})
			.catch((err: any) => {
				console.error('Failed to fetch ', err);
			});
    }
    
    sendSsmEvent(ssmEventId: any, enqId: any){
        const machineId = Utils.getSSMachineId(config.SSM_ID, enqId);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var formdata = new FormData();
        formdata.append("machineId", machineId);
        formdata.append("event", ssmEventId);
        
	    Utils.postReq(config.SSM_SEND_EVENT, formdata)
			.then((res: any) => {
				console.log('Send Event - current State: ', res.data);
				// this.updateStateData(res.data);
			})
			.catch((err: any) => {
				console.error('Send Event - Failed to fetch ', err);
			});
    }

    async ssmStatesExists() {
        const URL = config.SSM_LIST_STATES + '?ssmId=' + config.SSM_ID;
        await Utils.getReq(URL)
            .then((res: any) => {
                console.log('AdmissionEnquiry states : ', res);
                if (res && Array.isArray(res.data)) {
                    const arr = Utils.getStatesSet(res.data);
                    this.setState({
                        stateData: arr,
                    });
                    if(arr.length > 0){
                        console.log("Admission enquiry states already exists");
                        this.setState({
                            stateData: arr,
                            isStateExists: true,
                        });
                    }
                } else {
                    console.warn('Invalid response for ' + config.SSM_LIST_STATES);
                }
                // this.fetchCurState(this.state.assign.id, Utils.studentData.id);
            }).catch((err: any) => {
                console.error('Failed to fetch states list ', err);
            });
        
    }

    async initStateMachineStates(){
        console.log("Initilizing states in workflowservice :::: ",config.ADMISSION_ENQUIRY_SSM_JSON);
        
        fetch(config.SSM_CREATE_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: config.ADMISSION_ENQUIRY_SSM_JSON
        }).then(response => {
            console.log("SSM Response ::: ",response)
        }).catch(error =>{
            console.log("SSM error ::: ",error)
        })
    }

    async updateAdmissionEnquiry(){
        const { admissionEnquiryData, enquiryObject, academicYearId, branchId, origin, sourceOfApplication, departmentId } = this.state;
        let dob = null;
        if(enquiryObject.dateOfBirth !== undefined && enquiryObject.dateOfBirth !== null 
            && enquiryObject.dateOfBirth.trim() !== "" ){
                dob = moment(enquiryObject.dateOfBirth, "YYYY-MM-DD").format("DD-MM-YYYY");
        }
        let admissionEnquiryInput = {
            id: enquiryObject.id,
            studentName: enquiryObject.studentName,
            studentMiddleName: enquiryObject.studentMiddleName,
            studentLastName: enquiryObject.studentLastName,
            cellPhoneNo: enquiryObject.cellPhoneNo,
            landLinePhoneNo: enquiryObject.landLinePhoneNo,
            emailId: enquiryObject.emailId,
            strDateOfBirth: dob,
            gender: enquiryObject.gender,
            highestQualification: enquiryObject.highestQualification,
            modeOfEnquiry: enquiryObject.modeOfEnquiry,
            enquiryStatus: origin !== "ADMISSION_PAGE" ? enquiryObject.enquiryStatus : "CONVERTED_TO_ADMISSION",
            transactionSource: origin !== "ADMISSION_PAGE" ? null : origin,
            comments: enquiryObject.comments,
            academicYearId: academicYearId,
            branchId: branchId,
            sourceOfApplication: sourceOfApplication,
            departmentId: departmentId
        };

        let btn = document.querySelector("#btnUpdate");
        if(origin === "ADMISSION_PAGE"){
            btn = document.querySelector("#btnConvertToAdmission");
        }
        btn && btn.setAttribute("disabled", "true");
        let exitCode = 0;
        await this.props.client.mutate({
            mutation: SAVE_ADMISSION_ENQUIRY,
            variables: { 
                input: admissionEnquiryInput
            },
            fetchPolicy: 'no-cache'
        }).then((resp: any) => {
            console.log("Success in saveAdmissionEnquiryMutation. Exit code : ",resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode);
            exitCode = resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode;
            if(exitCode === 0){
                if(enquiryObject.enquiryStatus === "DECLINED"){
                    this.sendSsmEvent("LostFromEnquiryReceived", resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.id);
                }
            }
            this.props.onSaveUpdate(resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.dataList);
        }).catch((error: any) => {
            exitCode = 1;
            console.log('Error in saveAdmissionEnquiryMutation : ', error);
        });
        btn && btn.removeAttribute("disabled");
        if(exitCode === 0 ){
            origin !== "ADMISSION_PAGE" ? admissionEnquiryData.successMessage = SUCCESS_MESSAGE_ADMISSION_ENQUIRY_UPDATED : 
            admissionEnquiryData.successMessage = SUCCESS_MESSAGE_ADMISSION_GRANTED;
        }else {
            admissionEnquiryData.errorMessage = ERROR_MESSAGE_SERVER_SIDE_ERROR;
        }
        this.setState({
            admissionEnquiryData: admissionEnquiryData,
            enquiryObject: enquiryObject
        });
        
    }

    render() {
        const {operationType, admissionEnquiryData, enquiryObject, dob, origin, sourceOfApplication} = this.state;
        return (
            <main>
                {
                    admissionEnquiryData.errorMessage !== ""  ? 
                        <MessageBox id="mbox" message={admissionEnquiryData.errorMessage} activeTab={2}/>        
                        : null
                }
                {
                    admissionEnquiryData.successMessage !== ""  ? 
                        <MessageBox id="mbox" message={admissionEnquiryData.successMessage} activeTab={1}/>        
                        : null
                }
                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6>First Name <span style={{ color: 'red' }}> * </span> </h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student First Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentName" id="studentName" onChange={this.onChange}  value={operationType === "ADD" ? admissionEnquiryData.studentName : enquiryObject.studentName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Middle Name</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Middle Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentMiddleName" id="studentMiddleName"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.studentMiddleName : enquiryObject.studentMiddleName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Last Name <span style={{ color: 'red' }}> * </span></h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Last Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentLastName" id="studentLastName"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.studentLastName : enquiryObject.studentLastName}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Cell Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Cell Phone No" maxLength={255}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="cellPhoneNo" id="cellPhoneNo"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.cellPhoneNo : enquiryObject.cellPhoneNo}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Land Line Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Land Line Phone No" maxLength={255}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="landLinePhoneNo" id="landLinePhoneNo" onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.landLinePhoneNo : enquiryObject.landLinePhoneNo} />
                    </div>
                    <div className="col-sm-4">
                        <h6 >Email Id</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Email Id" maxLength={255}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="emailId" id="emailId"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.emailId : enquiryObject.emailId}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Date Of Birth</h6>
                        {
                            this.props.operationType === "ADD" ?
                                <input type="date" disabled={origin === "ADMISSION_PAGE" ? true : false} name="dateOfBirth" id="dateOfBirth"  maxLength={8}  onChange={this.onChange} value={admissionEnquiryData.dateOfBirth}></input>  
                            :
                            <input type="date" disabled={origin === "ADMISSION_PAGE" ? true : false} name="dateOfBirth" id="dateOfBirth" style={{width:'139px'}} maxLength={8}  onChange={this.onChange} value={dob !== "" ? dob : moment(enquiryObject.strDateOfBirth, "DD-MM-YYYY").format("YYYY-MM-DD")}></input> 
                        }
                        
                    </div>
                    <div className="col-sm-4">
                        <h6 >Gender</h6>
                        <select name="gender" disabled={origin === "ADMISSION_PAGE" ? true : false} id="gender" onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.gender : enquiryObject.gender} className="gf-form-input max-width-22">
                            <option key={""} value={""}>Select Gender</option> 
                            <option key={"MALE"} value={"MALE"}>MALE</option>
                            <option key={"FEMALE"} value={"FEMALE"}>FEMALE</option>
                            <option key={"BOTH"} value={"BOTH"}>BOTH</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Highest Qualification</h6>
                        <input type="text" disabled={origin === "ADMISSION_PAGE" ? true : false} className="gf-form-input max-width-18" placeholder="Highest Qualification" maxLength={255} name="highestQualification" id="highestQualification" onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.highestQualification : enquiryObject.highestQualification} />
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Mode Of Enquiry</h6>
                        <select name="modeOfEnquiry" id="modeOfEnquiry" disabled={origin === "ADMISSION_PAGE" ? true : false} onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.modeOfEnquiry : enquiryObject.modeOfEnquiry} className="gf-form-input max-width-22">
                            <option key={""} value={""}>Select Mode Of Enquiry</option>
                            <option key={"INPERSON"} value={"INPERSON"}>INPERSON</option>
                            <option key={"TELEPHONE"} value={"TELEPHONE"}>TELEPHONE</option>
                            <option key={"EMAIL"} value={"EMAIL"}>EMAIL</option>
                        </select>
                    </div>
                    {
                        operationType === "EDIT" && (
                            <div className="col-sm-4">
                                <h6 >Enquiry Status</h6>
                                <select name="enquiryStatus" id="enquiryStatus" disabled={origin === "ADMISSION_PAGE" ? true : false} onChange={this.onChange} value={enquiryObject.enquiryStatus} className="gf-form-input max-width-22">
                                    <option key={""} value={""}>Select Enquiry Status</option>
                                    <option key={"RECEIVED"} value={"RECEIVED"}>RECEIVED</option>
                                    <option key={"FOLLOWUP"} value={"FOLLOWUP"}>FOLLOWUP</option>
                                    <option key={"DECLINED"} value={"DECLINED"}>DECLINED</option>
                                    {/* <option key={"CONVERTED_TO_ADMISSION"} value={"CONVERTED_TO_ADMISSION"}>CONVERTED_TO_ADMISSION</option> */}
                                </select>
                            </div>
                        )
                    }
                    <div className="col-sm-4">
                        <h6 >Comments <span style={{ color: 'red' }}> * </span></h6>
                        <textarea rows={3} disabled={origin === "ADMISSION_PAGE" ? true : false} className="gf-form-input max-width-18" placeholder="comments" maxLength={5000}  name="comments" id="comments"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.comments : enquiryObject.comments}/>
                    </div>
                </div>
                {
                    operationType === "ADD" ? 
                    <div className="m-t-1 text-right">
                        <button id="btnSave" className="btn btn-primary border-bottom" onClick={this.saveEnquiry}>Save</button>
                    </div>
                    :
                    origin !== "ADMISSION_PAGE" ?
                        <div className="m-t-1 text-center">
                            <button id="btnUpdate" className="btn btn-primary border-bottom" onClick={this.saveEnquiry}>Update</button>
                        </div>
                        :
                        <div className="m-t-1 text-center">
                            <button id="btnConvertToAdmission" className="btn btn-primary border-bottom" style={{width:'164px', marginLeft:'-59px'}} onClick={this.saveEnquiry} >{sourceOfApplication === "STUDENT_PROFILE" ? "Grant Admission" : "Convert to Admission"} </button>
                        </div>
                }
                
            </main>
        );
    }
}

export default withApollo(AdmissionEnquiryPage)