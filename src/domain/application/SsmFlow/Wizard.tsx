import * as React from 'react';
import { withApollo } from 'react-apollo';
import {MessageBox} from '../Message/MessageBox'
import { SAVE_ADMISSION_ENQUIRY } from '../_queries';
import {commonFunctions} from '../_utilites/common.functions';
import  "../../../css/wizard.css";
import * as moment from 'moment';
import { GET_ADMISSION_ENQUIRY_LIST, GET_STUDENT_LIST } from '../_queries';
import  EnquiryGrid from '../AdmissionEnquiry/EnquiryGrid' 
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';

type WizardState = {
    academicYearId: any,
    branchId: any,
    departmentId: any,
    user: any,
};

export interface WizardProps extends React.HTMLAttributes<HTMLElement>{
    user?: any;
}

class Wizard extends React.Component<WizardProps, WizardState>{
    
    constructor(props: WizardProps) {
        super(props);
        this.state = {
            academicYearId: null,
            branchId: null,
            departmentId: null,
            user: this.props.user,
        };
        this.registerSocket = this.registerSocket.bind(this);
    }
    
    async componentDidMount(){
        await this.registerSocket();
    }

    registerSocket() {
        const socket = wsCmsBackendServiceSingletonClient.getInstance();

        socket.onmessage = (response: any) => {
            let message = JSON.parse(response.data);
            console.log("Wizard. message received from server ::: ", message);
            this.setState({
                branchId: message.selectedBranchId,
                academicYearId: message.selectedAcademicYearId,
                departmentId: message.selectedDepartmentId,
            });
            console.log("Wizard. branchId: ",this.state.branchId);
            console.log("Wizard. ayId: ",this.state.academicYearId);  
        }
    
        socket.onopen = () => {
            console.log("Wizard. Opening websocekt connection User : ",new URLSearchParams(location.search).get("signedInUser"));
            socket.send(new URLSearchParams(location.search).get("signedInUser"));
        }
    
        window.onbeforeunload = () => {
            console.log("Wizard. Closing websocket connection with cms backend service");
        }
    }

    render() {
        const {} = this.state;
        return (
            <main>
                <div className="row col-sm-12 col-xs-12 m-b-2">
                    <h6>Wizard </h6>
                    <div className="divLoader">
                        <img src="./plugins/ems-admission/src/img/cross.gif" alt="Loader" />
                    </div>
                </div>
            </main>
        );
    }
}

export default withApollo(Wizard)