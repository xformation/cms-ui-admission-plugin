import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
// import {MessageBox} from '../Message/MessageBox'
import { SAVE_ADMISSION_ENQUIRY } from '../_queries';
import { JsonMissingTypeErrorBase } from 'xform-react';
import "../Message/MessageBox.css";


type AdmissionEnquiryState = {
    enquiryStaticData: any,
    admissionEnquiryData: any,
    // departments: any,
    // branches: any,
    // batches: any,
    // states: any,
    // cities: any,
    // courses: any,
    // submitted: any,
    // uploadPhoto: any,
    // fileName: any,
    // activeRadio: any
};

export interface NewAdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    [staticData: string]: any;
}
interface MsgProps extends React.HTMLAttributes<HTMLElement> {
    id?: string | any;
    // messageType: any;
    message?: string | any;
    activeTab?: string | any;
    messageOnClose?: string | any;
}

class MessageBox extends React.Component<MsgProps, any> {
    constructor(props: MsgProps) {
        super(props);
        this.state = {
            activeState: this.props.activeTab,
            message : this.props.message,
            messageOnClose: this.props.messageOnClose
        };
        this.closeDiv = this.closeDiv.bind(this);
    }

    closeDiv() {
        this.setState({
          activeState: -1,
        });
    }
    

    render() {
        // const {message} = this.props
        const {activeState, message, messageOnClose} = this.state;
        return (
            <main>
                <div className={`${activeState === -1 ? 'info msgbox-border form-h5' : 'hide'}`}>
                    <div>{messageOnClose}</div>
                </div>
                <div className={`${activeState === 0 ? 'info msgbox-border form-h5 msgbox-width-height' : 'hide'}`}>
                    <div>{message}</div>
                    <hr className='msgbox-hr'></hr>
                </div>
                <div className={`${activeState === 1 ? 'success msgbox-border msgbox-padding msgbox-width-height text' : 'hide'}`}>
                    <div><input onClick={this.closeDiv} className="msgbox-close fa-info-circle" type="button" value="x"></input>{message}</div>
                </div>
                <div className={`${activeState === 2 ? 'error msgbox-border msgbox-padding msgbox-width-height text' : 'hide'}`}>
                    <div><input onClick={this.closeDiv} className="msgbox-close fa-info-circle" type="button" value="x"></input>{message}</div>
                </div>
            </main>
            
            
        );
    }
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
                },
                // state: {
                //     id: ""
                // },
                // city: {
                //     id: ""
                // },
                // course: {
                //     id: ""
                // }
            },
            // departments: [],
            // branches: [],
            // batches: [],
            // states: [],
            // cities: [],
            // courses: [],
            // submitted: false,
            // uploadPhoto: null,
            // fileName: "",
            // activeRadio: "draft"
        };
    
        
    }
    
    onChange = (e: any) => {
        const { name, value } = e.nativeEvent.target;
        const { admissionEnquiryData } = this.state;
        e.preventDefault();
        this.setState({
            admissionEnquiryData: {
                ...admissionEnquiryData,
                [name]: value
            }
        });
        
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
            admissionEnquiryData.errorMessage = "Mandatory fields missing";
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
                    admissionEnquiryData.errorMessage !== ""  && (
                        <MessageBox id="mbox" message={admissionEnquiryData.errorMessage} activeTab={2}></MessageBox>        
                    )
                }
                {
                    admissionEnquiryData.errorMessage === ""  && (
                        <MessageBox id="mbox" message={"New enquiry"} activeTab={0}></MessageBox>        
                    )
                }
                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6>First Name <span style={{ color: 'red' }}> * </span> </h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student First Name" maxLength={255} name="studentName" onChange={this.onChange}  value={admissionEnquiryData.studentName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Middle Name</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Middle Name" maxLength={255} name="studentMiddleName"  onChange={this.onChange} value={admissionEnquiryData.studentMiddleName}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Last Name <span style={{ color: 'red' }}> * </span></h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Student Last Name" maxLength={255} name="studentLastName"  onChange={this.onChange} value={admissionEnquiryData.studentLastName}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Cell Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Cell Phone No" maxLength={255}  name="cellPhoneNo"  onChange={this.onChange} value={admissionEnquiryData.cellPhoneNo}/>
                    </div>
                    <div className="col-sm-4">
                        <h6 >Land Line Phone No</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Land Line Phone No" maxLength={255}  name="landLinePhoneNo" onChange={this.onChange} value={admissionEnquiryData.landLinePhoneNo} />
                    </div>
                    <div className="col-sm-4">
                        <h6 >Email Id</h6>
                        <input type="text" className="gf-form-input max-width-18" placeholder="Email Id" maxLength={255}  name="emailId"  onChange={this.onChange} value={admissionEnquiryData.emailId}/>
                    </div>
                </div>

                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <div className="col-sm-4">
                        <h6 >Date Of Birth</h6>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" maxLength={8}  onChange={this.onChange} value={admissionEnquiryData.dateOfBirth}></input> 
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
                        <input type="text" className="gf-form-input max-width-18" placeholder="Highest Qualification" maxLength={255} name="highestQualification" onChange={this.onChange} value={admissionEnquiryData.highestQualification} />
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
                        <textarea rows={3} className="gf-form-input max-width-18" placeholder="comments" maxLength={5000}  name="comments"  onChange={this.onChange} value={admissionEnquiryData.comments}/>
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
