import * as React from 'react';
import {withApollo} from 'react-apollo';
import {MessageBox} from '../Message/MessageBox';
import {SAVE_ADMISSION_ENQUIRY} from '../_queries';
import {commonFunctions} from '../_utilites/common.functions';
import '../../../css/custom.css';
import * as moment from 'moment';
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';
import {GET_ADMISSION_ENQUIRY_LIST, GET_STUDENT_LIST} from '../_queries';
import {EnquiryGrid} from '../AdmissionEnquiry/EnquiryGrid';

type AdmissionState = {
  noEnquiryRecordFoundMsg: any;
  enquiryList: any;
  operationType: any;
  editAdmissionObject: any;
  admissionApplicationData: any;
  academicYearId: any;
  branchId: any;
  departmentId: any;
  user: any;
  dob: any;
};

const ERROR_MESSAGE_MANDATORY_FIELD_MISSING = 'Mandatory fields missing';
const ERROR_MESSAGE_INVALID_EMAIL_ID = 'Invalid email id';
const ERROR_MESSAGE_SERVER_SIDE_ERROR =
  'Due to some error in admission service, admission enquiry could not be saved. Please check admission service logs';
const SUCCESS_MESSAGE_ADMISSION_APPLICATION_ADDED =
  'New admission application saved successfully';
const SUCCESS_MESSAGE_ADMISSION_APPLICATION_UPDATED =
  'Admission application updated successfully';

export interface NewAdmissionProps extends React.HTMLAttributes<HTMLElement> {
  editAdmissionObject?: any;
  [operationType: string]: any;
  branchId?: any;
  academicYearId?: any;
  departmentId?: any;
  user?: any;
}

class AdmissionPage extends React.Component<NewAdmissionProps, AdmissionState> {
  constructor(props: NewAdmissionProps) {
    super(props);
    this.state = {
      noEnquiryRecordFoundMsg: '',
      enquiryList: null,
      editAdmissionObject: this.props.editAdmissionObject,
      operationType: this.props.operationType,
      academicYearId: null,
      branchId: null,
      departmentId: null,
      user: this.props.user,
      dob: '',
      admissionApplicationData: {
        errorMessage: '',
        successMessage: '',
        sourceOfApplication: '',
        comments: '',
        departmentId: '',
      },
    };
    this.addAdmissionEnquiry = this.addAdmissionEnquiry.bind(this);
    this.getData = this.getData.bind(this);
    this.getEnquiryData = this.getEnquiryData.bind(this);
    this.getStudentData = this.getStudentData.bind(this);
  }

  async componentDidMount() {
    await this.registerSocket();
  }

  registerSocket() {
    const socket = wsCmsBackendServiceSingletonClient.getInstance();

    socket.onmessage = (response: any) => {
      let message = JSON.parse(response.data);
      console.log('2. message received from server ::: ', message);
      this.setState({
        branchId: message.selectedBranchId,
        academicYearId: message.selectedAcademicYearId,
        departmentId: message.selectedDepartmentId,
      });
      console.log('2. branchId: ', this.state.branchId);
      console.log('2. ayId: ', this.state.academicYearId);
    };

    socket.onopen = () => {
      console.log(
        '2. Opening websocekt connection on Admission EnquiryPage.tsx. User : ',
        this.state.user.login
      );
      socket.send(this.state.user.login);
    };

    window.onbeforeunload = () => {
      console.log('2. Closing websocket connection with cms backend service');
    };
  }

  onChange = (e: any) => {
    e.preventDefault();
    const {name, value} = e.nativeEvent.target;
    const {
      admissionApplicationData,
      editAdmissionObject,
      operationType,
      dob,
    } = this.state;
    admissionApplicationData.errorMessage = '';
    admissionApplicationData.successMessage = '';
    if (operationType === 'ADD') {
      this.setState({
        admissionApplicationData: {
          ...admissionApplicationData,
          [name]: value,
        },
      });
      if (name === 'sourceOfApplication') {
        this.getData(value);
      }
    } else {
      this.setState({
        editAdmissionObject: {
          ...editAdmissionObject,
          [name]: value,
        },
      });
      if (name === 'dateOfBirth') {
        console.log('dob for update : ', value);
        let dob = moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD');
        this.setState({
          dob: dob,
        });
      }
    }

    commonFunctions.restoreTextBoxBorderToNormal(name);
  };

  async getEnquiryData() {
    let eqs = null;
    const {data} = await this.props.client.query({
      query: GET_ADMISSION_ENQUIRY_LIST,
      variables: {
        branchId: this.state.branchId,
        academicYearId: this.state.academicYearId,
        enquiryStatus: eqs,
      },
      fetchPolicy: 'no-cache',
    });
    const listLength = data.getAdmissionEnquiryList.length;
    const retVal = [];
    for (let i = 0; i < listLength; i++) {
      const admissionEnquiry = data.getAdmissionEnquiryList[i];
      if (
        admissionEnquiry.enquiryStatus === 'RECEIVED' ||
        admissionEnquiry.enquiryStatus === 'FOLLOWUP'
      ) {
        console.log('admission page : ', admissionEnquiry.enquiryStatus);
        retVal.push(admissionEnquiry);
      }
    }
    let msg = '';
    if (retVal.length === 0) {
      msg = 'No Record Found';
    }
    this.setState({
      enquiryList: retVal,
      noEnquiryRecordFoundMsg: msg,
    });
  }

  async getStudentData() {
    let bid = 34;
    let aid = 56;
    const {data} = await this.props.client.query({
      query: GET_STUDENT_LIST,
      variables: {
        branchId: bid,
        academicYearId: aid,
      },
      fetchPolicy: 'no-cache',
    });
    const listLength = data.getStudentList.length;
    const retVal = [];
    for (let i = 0; i < listLength; i++) {
      const admissionEnquiry = data.getStudentList[i];
      // if(admissionEnquiry.enquiryStatus === "RECEIVED" || admissionEnquiry.enquiryStatus === "FOLLOWUP"){
      console.log('Student profile data on admission page : ', admissionEnquiry.id);
      retVal.push(admissionEnquiry);
      // }
    }
    let msg = '';
    if (retVal.length === 0) {
      msg = 'No Record Found';
    }
    this.setState({
      enquiryList: retVal,
      noEnquiryRecordFoundMsg: msg,
    });
  }

  getData(source: any) {
    if (source === 'ADMISSION_ENQUIRY') {
      this.getEnquiryData();
    } else if (source === 'STUDENT_PROFILE') {
      this.getStudentData();
    }
  }

  saveAdmission = (e: any) => {
    const {
      admissionApplicationData,
      editAdmissionObject,
      operationType,
      academicYearId,
      branchId,
    } = this.state;
    admissionApplicationData.errorMessage = '';
    this.setState({
      admissionApplicationData: admissionApplicationData,
    });

    console.log('Operation type : ', this.state.operationType);
    if (operationType === 'ADD') {
      if (
        admissionApplicationData.studentName.trim() === '' ||
        admissionApplicationData.studentLastName.trim() === '' ||
        admissionApplicationData.comments.trim() === ''
      ) {
        admissionApplicationData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
        commonFunctions.changeTextBoxBorderToError(
          admissionApplicationData.studentName,
          'studentName'
        );
        commonFunctions.changeTextBoxBorderToError(
          admissionApplicationData.studentLastName,
          'studentLastName'
        );
        commonFunctions.changeTextBoxBorderToError(
          admissionApplicationData.comments,
          'comments'
        );
        return;
      }
      if (admissionApplicationData.emailId !== '') {
        if (!commonFunctions.validateEmail(admissionApplicationData.emailId)) {
          admissionApplicationData.errorMessage = ERROR_MESSAGE_INVALID_EMAIL_ID;
          commonFunctions.changeTextBoxBorderToError(
            admissionApplicationData.emailId,
            'emailId'
          );
          return;
        }
      }
      this.setState({
        admissionApplicationData: admissionApplicationData,
      });
      let dob = null;
      if (
        admissionApplicationData.dateOfBirth !== undefined &&
        admissionApplicationData.dateOfBirth !== null &&
        admissionApplicationData.dateOfBirth.trim() !== ''
      ) {
        dob = moment(admissionApplicationData.dateOfBirth, 'YYYY-MM-DD').format(
          'DD-MM-YYYY'
        );
      }
      this.addAdmissionEnquiry(dob);
    } else {
      if (
        editAdmissionObject.studentName.trim() === '' ||
        editAdmissionObject.studentLastName.trim() === '' ||
        editAdmissionObject.comments.trim() === ''
      ) {
        admissionApplicationData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
        commonFunctions.changeTextBoxBorderToError(
          editAdmissionObject.studentName,
          'studentName'
        );
        commonFunctions.changeTextBoxBorderToError(
          editAdmissionObject.studentLastName,
          'studentLastName'
        );
        commonFunctions.changeTextBoxBorderToError(
          editAdmissionObject.comments,
          'comments'
        );
        return;
      }
      if (editAdmissionObject.emailId !== '') {
        if (!commonFunctions.validateEmail(editAdmissionObject.emailId)) {
          admissionApplicationData.errorMessage = ERROR_MESSAGE_INVALID_EMAIL_ID;
          commonFunctions.changeTextBoxBorderToError(
            editAdmissionObject.emailId,
            'emailId'
          );
          return;
        }
      }
      if (editAdmissionObject.enquiryStatus.trim() === '') {
        admissionApplicationData.errorMessage = ERROR_MESSAGE_MANDATORY_FIELD_MISSING;
        commonFunctions.changeTextBoxBorderToError(
          editAdmissionObject.enquiryStatus,
          'enquiryStatus'
        );
        return;
      }
      this.setState({
        admissionApplicationData: admissionApplicationData,
        editAdmissionObject: editAdmissionObject,
      });
      let dob = null;
      if (
        editAdmissionObject.dateOfBirth !== undefined &&
        editAdmissionObject.dateOfBirth !== null &&
        editAdmissionObject.dateOfBirth.trim() !== ''
      ) {
        dob = moment(editAdmissionObject.dateOfBirth, 'YYYY-MM-DD').format('DD-MM-YYYY');
      }
      this.updateAdmissionEnquiry();
    }
  };

  async addAdmissionEnquiry(dob: any) {
    const {admissionApplicationData, academicYearId, branchId} = this.state;
    let admissionEnquiryInput = {
      studentName: admissionApplicationData.studentName,
      studentMiddleName: admissionApplicationData.studentMiddleName,
      studentLastName: admissionApplicationData.studentLastName,
      cellPhoneNo: admissionApplicationData.cellPhoneNo,
      landLinePhoneNo: admissionApplicationData.landLinePhoneNo,
      emailId: admissionApplicationData.emailId,
      strDateOfBirth: dob,
      gender: admissionApplicationData.gender,
      highestQualification: admissionApplicationData.highestQualification,
      modeOfEnquiry: admissionApplicationData.modeOfEnquiry,
      comments: admissionApplicationData.comments,
      academicYearId: academicYearId,
      branchId: branchId,
    };

    let btn = document.querySelector('#btnSave');
    btn && btn.setAttribute('disabled', 'true');
    let exitCode = 0;
    await this.props.client
      .mutate({
        mutation: SAVE_ADMISSION_ENQUIRY,
        variables: {
          input: admissionEnquiryInput,
        },
        fetchPolicy: 'no-cache',
      })
      .then((resp: any) => {
        console.log(
          'Success in saveAdmissionEnquiryMutation. Exit code : ',
          resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode
        );
        exitCode = resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode;
      })
      .catch((error: any) => {
        exitCode = 1;
        console.log('Error in saveAdmissionEnquiryMutation : ', error);
      });
    btn && btn.removeAttribute('disabled');
    if (exitCode === 0) {
      admissionApplicationData.successMessage = SUCCESS_MESSAGE_ADMISSION_APPLICATION_ADDED;
    } else {
      admissionApplicationData.errorMessage = ERROR_MESSAGE_SERVER_SIDE_ERROR;
    }
    this.setState({
      admissionApplicationData: admissionApplicationData,
    });
  }

  async updateAdmissionEnquiry() {
    const {
      admissionApplicationData,
      editAdmissionObject,
      academicYearId,
      branchId,
    } = this.state;
    let dob = null;
    if (
      editAdmissionObject.dateOfBirth !== undefined &&
      editAdmissionObject.dateOfBirth !== null &&
      editAdmissionObject.dateOfBirth.trim() !== ''
    ) {
      dob = moment(editAdmissionObject.dateOfBirth, 'YYYY-MM-DD').format('DD-MM-YYYY');
    }
    let admissionEnquiryInput = {
      id: editAdmissionObject.id,
      studentName: editAdmissionObject.studentName,
      studentMiddleName: editAdmissionObject.studentMiddleName,
      studentLastName: editAdmissionObject.studentLastName,
      cellPhoneNo: editAdmissionObject.cellPhoneNo,
      landLinePhoneNo: editAdmissionObject.landLinePhoneNo,
      emailId: editAdmissionObject.emailId,
      strDateOfBirth: dob,
      gender: editAdmissionObject.gender,
      highestQualification: editAdmissionObject.highestQualification,
      modeOfEnquiry: editAdmissionObject.modeOfEnquiry,
      enquiryStatus: editAdmissionObject.enquiryStatus,
      comments: editAdmissionObject.comments,
      academicYearId: academicYearId,
      branchId: branchId,
      sourceOfApplication: admissionApplicationData.sourceOfApplication,
    };

    let btn = document.querySelector('#btnUpdate');
    btn && btn.setAttribute('disabled', 'true');
    let exitCode = 0;
    await this.props.client
      .mutate({
        mutation: SAVE_ADMISSION_ENQUIRY,
        variables: {
          input: admissionEnquiryInput,
        },
        fetchPolicy: 'no-cache',
      })
      .then((resp: any) => {
        console.log(
          'Success in saveAdmissionEnquiryMutation. Exit code : ',
          resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode
        );
        exitCode = resp.data.saveAdmissionEnquiry.cmsAdmissionEnquiryVo.exitCode;
      })
      .catch((error: any) => {
        exitCode = 1;
        console.log('Error in saveAdmissionEnquiryMutation : ', error);
      });
    btn && btn.removeAttribute('disabled');
    if (exitCode === 0) {
      admissionApplicationData.successMessage = SUCCESS_MESSAGE_ADMISSION_APPLICATION_UPDATED;
    } else {
      admissionApplicationData.errorMessage = ERROR_MESSAGE_SERVER_SIDE_ERROR;
    }
    this.setState({
      admissionApplicationData: admissionApplicationData,
      editAdmissionObject: editAdmissionObject,
    });
  }

  render() {
    const {
      operationType,
      admissionApplicationData,
      editAdmissionObject,
      dob,
      enquiryList,
      noEnquiryRecordFoundMsg,
    } = this.state;
    return (
      <main>
        {admissionApplicationData.errorMessage !== '' ? (
          <MessageBox
            id="mbox"
            message={admissionApplicationData.errorMessage}
            activeTab={2}
          />
        ) : null}
        {admissionApplicationData.successMessage !== '' ? (
          <MessageBox
            id="mbox"
            message={admissionApplicationData.successMessage}
            activeTab={1}
          />
        ) : null}
        <div className="row col-sm-12 col-xs-12 m-b-2">
          <h6>
            Source of Application <span style={{color: 'red'}}> * </span>{' '}
          </h6>

          <div className="col-sm-4">
            <select
              name="sourceOfApplication"
              id="sourceOfApplication"
              onChange={this.onChange}
              value={
                operationType === 'ADD'
                  ? admissionApplicationData.sourceOfApplication
                  : editAdmissionObject.sourceOfApplication
              }
              className="gf-form-input max-width-22"
            >
              <option key={''} value={''}>
                Select Source of Application
              </option>
              <option key={'ADMISSION_ENQUIRY'} value={'ADMISSION_ENQUIRY'}>
                ADMISSION ENQUIRY
              </option>
              <option key={'STUDENT_PROFILE'} value={'STUDENT_PROFILE'}>
                STUDENT PROFILE
              </option>
            </select>
          </div>
        </div>

        <div className="row col-sm-12 col-xs-12 m-b-2">
          {enquiryList !== null && enquiryList.length > 0 ? (
            <EnquiryGrid
              sourceOfApplication={admissionApplicationData.sourceOfApplication}
              source="ADMISSION_PAGE"
              type="Total Enquiries"
              totalRecords={enquiryList !== null ? enquiryList.length : 0}
              data={enquiryList}
            ></EnquiryGrid>
          ) : (
            <span style={{color: 'red'}}> {noEnquiryRecordFoundMsg} </span>
          )}
        </div>
      </main>
    );
  }
}

export default withApollo(AdmissionPage);
