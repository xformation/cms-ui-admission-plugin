import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
// import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import {MessageBox} from '../Message/MessageBox'
import { SAVE_ADMISSION_ENQUIRY } from '../_queries';
import {commonFunctions} from '../_utilites/common.functions';
import  "../../../css/custom.css";

type AdmissionEnquiryState = {
    enquiryStaticData: any,
    admissionEnquiryData: any
};

const ERROR_MESSAGE_MANDATORY_FIELD_MISSING = "Mandatory fields missing";
const ERROR_MESSAGE_INVALID_EMAIL_ID = "Invalid email id";
export interface NewAdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    [staticData: string]: any;
}

class NewAdmissionEnquiryPage<T = {[staticData: string]: any}> extends React.Component<NewAdmissionEnquiryProps, AdmissionEnquiryState>{
    
    constructor(props: NewAdmissionEnquiryProps) {
        super(props);
        this.state = {
            enquiryStaticData: this.props.staticData,
            admissionEnquiryData: {
                errorMessage:"",
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
                academicYear: {
                    id: ""
                },
                branch: {
                    id: ""
                },
                department: {
                    id: ""
                }
            },
        };
        this.changeTextBoxBorderToError = this.changeTextBoxBorderToError.bind(this);
        this.restoreTextBoxBorderToNormal = this.restoreTextBoxBorderToNormal.bind(this);    
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
        const { admissionEnquiryData } = this.state;
        admissionEnquiryData.errorMessage = "";
        this.setState({
            admissionEnquiryData: {
                ...admissionEnquiryData,
                [name]: value
            }
        });
        this.restoreTextBoxBorderToNormal(name);
    }

    saveEnquiry = (e: any) => {
        const { admissionEnquiryData } = this.state;
        admissionEnquiryData.errorMessage = "";
        this.setState({
            admissionEnquiryData: admissionEnquiryData
        });
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
    }

    render() {
        const {staticData} = this.props
        const {admissionEnquiryData} = this.state;
        return (
            <main>
                {
                    admissionEnquiryData.errorMessage !== ""  ? 
                        <MessageBox id="mbox" message={admissionEnquiryData.errorMessage} activeTab={2}/>        
                        : null
                }
                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6>First Name <span style={{ color: 'red' }}> * </span> </h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student First Name" maxLength={255} name="studentName" id="studentName" onChange={this.onChange}  value={admissionEnquiryData.studentName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Middle Name</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Middle Name" maxLength={255} name="studentMiddleName" id="studentMiddleName"  onChange={this.onChange} value={admissionEnquiryData.studentMiddleName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Last Name <span style={{ color: 'red' }}> * </span></h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Last Name" maxLength={255} name="studentLastName" id="studentLastName"  onChange={this.onChange} value={admissionEnquiryData.studentLastName}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Cell Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Cell Phone No" maxLength={255}  name="cellPhoneNo" id="cellPhoneNo"  onChange={this.onChange} value={admissionEnquiryData.cellPhoneNo}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Land Line Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Land Line Phone No" maxLength={255}  name="landLinePhoneNo" id="landLinePhoneNo" onChange={this.onChange} value={admissionEnquiryData.landLinePhoneNo} />
                    </div>
                    <div className="col-sm-4">
                        <h6 >Email Id</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Email Id" maxLength={255}  name="emailId" id="emailId"  onChange={this.onChange} value={admissionEnquiryData.emailId}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Date Of Birth</h6>
                        <input type="date" name="dateOfBirth" id="dateOfBirth"  maxLength={8}  onChange={this.onChange} value={admissionEnquiryData.dateOfBirth}></input> 
                    </div>
                    <div className="col-sm-4">
                        <h6 >Gender</h6>
                        <select name="gender" id="gender" className="gf-form-input max-width-22">
                            <option key={""} value={""}>Select Gender</option>
                            <option key={"MALE"} value={"MALE"}>MALE</option>
                            <option key={"FEMALE"} value={"FEMALE"}>FEMALE</option>
                            <option key={"BOTH"} value={"BOTH"}>BOTH</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Highest Qualification</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Highest Qualification" maxLength={255} name="highestQualification" id="highestQualification" onChange={this.onChange} value={admissionEnquiryData.highestQualification} />
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Mode Of Enquiry</h6>
                        <select name="modeOfEnquiry" id="modeOfEnquiry" className="gf-form-input max-width-22">
                            <option key={""} value={""}>Select Mode Of Enquiry</option>
                            <option key={"INPERSON"} value={"INPERSON"}>INPERSON</option>
                            <option key={"TELEPHONE"} value={"TELEPHONE"}>TELEPHONE</option>
                            <option key={"EMAIL"} value={"EMAIL"}>EMAIL</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Comments <span style={{ color: 'red' }}> * </span></h6>
                        <textarea rows={3} className="gf-form-input max-width-18" placeholder="comments" maxLength={5000}  name="comments" id="comments"  onChange={this.onChange} value={admissionEnquiryData.comments}/>
                    </div>
                </div>
                <div className="m-t-1 text-right">
                    <button className="btn btn-primary border-bottom" onClick={this.saveEnquiry}>Save</button>
                </div>
            </main>
        );
    }
}


export default NewAdmissionEnquiryPage;
