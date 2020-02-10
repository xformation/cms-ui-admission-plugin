import * as React from 'react';
import { withApollo } from 'react-apollo';
import {MessageBox} from '../Message/MessageBox'
import { SAVE_ADMISSION_ENQUIRY } from '../_queries';
import {commonFunctions} from '../_utilites/common.functions';
import  "../../../css/custom.css";
import * as moment from 'moment';
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';
import { AnswerCountValidator } from 'xform-react';
// import {Websocket} from 'react-websocket';

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
};

const ERROR_MESSAGE_MANDATORY_FIELD_MISSING = "Mandatory fields missing";
const ERROR_MESSAGE_INVALID_EMAIL_ID = "Invalid email id";
const ERROR_MESSAGE_INVALID_NUMBER = "Invalid Number";
const ERROR_MESSAGE_SERVER_SIDE_ERROR = "Due to some error in admission service, admission enquiry could not be saved. Please check admission service logs";
const SUCCESS_MESSAGE_ADMISSION_ENQUIRY_ADDED = "New admission enquiry saved successfully";
const SUCCESS_MESSAGE_ADMISSION_ENQUIRY_UPDATED = "Admission enquiry updated successfully";
const SUCCESS_MESSAGE_ADMISSION_GRANTED = "Admission granted";

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
        };
        this.changeTextBoxBorderToError = this.changeTextBoxBorderToError.bind(this);
        this.restoreTextBoxBorderToNormal = this.restoreTextBoxBorderToNormal.bind(this);
        this.addAdmissionEnquiry = this.addAdmissionEnquiry.bind(this);
    }
    
    async componentDidMount(){
        await this.registerSocket();
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
            obj.className = "gf-form-input fwidth input-textbox-error";
        }
        if(objName === "emailId"){
            const obj: any = document.querySelector("#"+objName);
            obj.className = "gf-form-input fwidth input-textbox-error";
        }
        if(objName === "cellPhoneNo"){
            const obj: any = document.querySelector("#"+objName);
            obj.className = "gf-form-input fwidth input-textbox-error";
        }
        if(objName === "landLinePhoneNo"){
            const obj: any = document.querySelector("#"+objName);
            obj.className = "gf-form-input fwidth input-textbox-error";
        }
    }
    
    restoreTextBoxBorderToNormal(objName: any){
        const obj: any = document.querySelector("#"+objName);
        obj.className = "gf-form-input fwidth";
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
        const { admissionEnquiryData, enquiryObject, operationType, sourceOfApplication, academicYearId, branchId } = this.state;
        admissionEnquiryData.errorMessage = "";
        this.setState({
            admissionEnquiryData: admissionEnquiryData
        });
        
        console.log("Operation type : ",this.state.operationType);
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
            if(admissionEnquiryData.cellPhoneNo !== ""){
                if(!commonFunctions.phoneNumber(admissionEnquiryData.cellPhoneNo)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_NUMBER;
                    this.changeTextBoxBorderToError(admissionEnquiryData.cellPhoneNo, "cellPhoneNo");
                    return;
                } 
            }
            if(admissionEnquiryData.landLinePhoneNo !== ""){
                if(!commonFunctions.landlineNo(admissionEnquiryData.landLinePhoneNo)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_NUMBER;
                    this.changeTextBoxBorderToError(admissionEnquiryData.landLinePhoneNo, "landLinePhoneNo");
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
            if(enquiryObject.cellPhoneNo !== "" && enquiryObject.cellPhoneNo !== null && enquiryObject.cellPhoneNo !== undefined){
                if(!commonFunctions.phoneNumber(enquiryObject.cellPhoneNo)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_NUMBER;
                    this.changeTextBoxBorderToError(enquiryObject.cellPhoneNo, "cellPhoneNo");
                    return;
                } 
            }
            if(enquiryObject.landLinePhoneNo !== "" && enquiryObject.landLinePhoneNo !== null && enquiryObject.landLinePhoneNo !== undefined){
                if(!commonFunctions.landlineNo(enquiryObject.landLinePhoneNo)){
                    admissionEnquiryData.errorMessage = ERROR_MESSAGE_INVALID_NUMBER;
                    this.changeTextBoxBorderToError(enquiryObject.landLinePhoneNo, "landLinePhoneNo");
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
        // this.registerSocket();
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
                <div className="aflex m-b-2 m-t-1">
                    <div className="col-sm-4">
                        <h6>First Name <span style={{ color: 'red' }}> * </span> </h6>
                        <input type="text" className="gf-form-input fwidth" placeholder="Student First Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentName" id="studentName" onChange={this.onChange}  value={operationType === "ADD" ? admissionEnquiryData.studentName : enquiryObject.studentName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Middle Name</h6>
                        <input type="text" className="gf-form-input fwidth" placeholder="Student Middle Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentMiddleName" id="studentMiddleName"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.studentMiddleName : enquiryObject.studentMiddleName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Last Name <span style={{ color: 'red' }}> * </span></h6>
                        <input type="text" className="gf-form-input fwidth" placeholder="Student Last Name" maxLength={255} disabled={origin === "ADMISSION_PAGE" ? true : false} name="studentLastName" id="studentLastName"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.studentLastName : enquiryObject.studentLastName}/>
                    </div>
                </div>

                <div className="aflex m-b-2">
                    <div className="col-sm-4">
                        <h6 >Cell Phone No</h6>
                        <input type="number" className="gf-form-input fwidth" placeholder="Cell Phone No" maxLength={10}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="cellPhoneNo" id="cellPhoneNo"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.cellPhoneNo : enquiryObject.cellPhoneNo}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Land Line Phone No</h6>
                        <input type="number" className="gf-form-input fwidth" placeholder="Land Line Phone No" maxLength={11}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="landLinePhoneNo" id="landLinePhoneNo" onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.landLinePhoneNo : enquiryObject.landLinePhoneNo} />
                    </div>
                    <div className="col-sm-4">
                        <h6 >Email Id</h6>
                        <input type="text" className="gf-form-input fwidth" placeholder="Email Id" maxLength={255}  disabled={origin === "ADMISSION_PAGE" ? true : false} name="emailId" id="emailId"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.emailId : enquiryObject.emailId}/>
                    </div>
                </div>

                <div className="aflex m-b-2">
                    <div className="col-sm-4">
                        <h6 >Date Of Birth</h6>
                        {
                            this.props.operationType === "ADD" ?
                                <input type="date" className="gf-form-input fwidth" disabled={origin === "ADMISSION_PAGE" ? true : false} name="dateOfBirth" id="dateOfBirth"  maxLength={8}  onChange={this.onChange} value={admissionEnquiryData.dateOfBirth}></input>  
                            :
                            <input type="date" className="gf-form-input fwidth" disabled={origin === "ADMISSION_PAGE" ? true : false} name="dateOfBirth" id="dateOfBirth" maxLength={8}  onChange={this.onChange} value={dob !== "" ? dob : moment(enquiryObject.strDateOfBirth, "DD-MM-YYYY").format("YYYY-MM-DD")}></input> 
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
                        <input type="text" disabled={origin === "ADMISSION_PAGE" ? true : false} className="gf-form-input fwidth" placeholder="Highest Qualification" maxLength={255} name="highestQualification" id="highestQualification" onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.highestQualification : enquiryObject.highestQualification} />
                    </div>
                </div>

                <div className="aflex m-b-2">
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
                                    <option key={"CONVERTED_TO_ADMISSION"} value={"CONVERTED_TO_ADMISSION"}>CONVERTED_TO_ADMISSION</option>
                                </select>
                            </div>
                        )
                    }
                    <div className="col-sm-4">
                        <h6 >Comments <span style={{ color: 'red' }}> * </span></h6>
                        <textarea rows={3} disabled={origin === "ADMISSION_PAGE" ? true : false} className="gf-form-input fwidth" placeholder="comments" maxLength={5000}  name="comments" id="comments"  onChange={this.onChange} value={operationType === "ADD" ? admissionEnquiryData.comments : enquiryObject.comments}/>
                    </div>
                </div>
                {
                    operationType === "ADD" ? 
                    <div className="m-t-1 text-right mrb">
                        <button id="btnSave" className="btn btn-primary border-bottom" onClick={this.saveEnquiry}>Save</button>
                    </div>
                    :
                    origin !== "ADMISSION_PAGE" ?
                        <div className="m-t-1 text-center">
                            <button id="btnUpdate" className="btn btn-primary border-bottom" style={{marginLeft: '-100px'}} onClick={this.saveEnquiry}>Update</button>
                        </div>
                        :
                        <div className="m-t-1 text-center">
                            <button id="btnConvertToAdmission" className="btn btn-primary border-bottom" style={{width:'164px', marginLeft:'-140px'}} onClick={this.saveEnquiry} >{sourceOfApplication === "STUDENT_PROFILE" ? "Grant Admission" : "Convert to Admission"} </button>
                        </div>
                }
                
            </main>
        );
    }
}

export default withApollo(AdmissionEnquiryPage)