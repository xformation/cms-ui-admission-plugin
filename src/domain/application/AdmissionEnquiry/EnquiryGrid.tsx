import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdmissionEnquiryPage from './EnquiryPage';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withApollo } from 'react-apollo';
import Slider from './Slider';
import { config } from '../../../config';
import { Utils } from '../_utilites/Utils';
import StudentPersonalInfo from '../SsmFlow/StudentPersonalInfo';
import "../../../css/custom.css";
import { SurveyJson } from './SurveryJson';

import * as Survey from "survey-react";
import axios from 'axios';
import "survey-react/survey.css";
import "survey-react/modern.css";
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';
import { SAVE_ADMISSION_APPLICATION, SAVE_TEMP_STUDENT, GET_TEMP_STUDENT } from '../_queries';
import * as moment from 'moment';
import { commonFunctions } from '../_utilites/common.functions';
import { UserAgentApplication } from 'msal';
import { azureConfig } from '../../../azureConfig';
import '../../../css/custom.css';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement> {
    [data: string]: any;
    totalRecords?: number | string;
    type?: string;
    source?: string;
    sourceOfApplication?: string;
    user?: any;

}

class EnquiryGrid<T = { [data: string]: any }> extends React.Component<AdmissionEnquiryProps, any> {
    surveyModel: any = null;
    SSM_SORT_ORDER: any = {
        "EnquiryReceived": 0,
        "PersonalInfo": 1,
        "AcademicInfo": 2,
        "Documents": 3,
        "AdmissionGranted": 4,
    };
    customCss = {
        root: "form-container",
        header: "form-header",
        headerError: "form-header-error",
        headerNoError: "form-header-success",
        footer: "panel-footer card-footer text-right",
        body: "form-body",
        question: {
            title: "form-control-label",
            mainRoot: "form-control-container sv_qstn"
        },
        text: "input-form-control",
        dropdown: {
            control: "select-form-control",
        },
        navigation: {
            complete: "btn btn-success",
            next: "btn btn-primary",
            prev: "btn btn-primary"
        },
        error: {
            root: "error"
        },
        page: {
            title: "page-title"
        },
        paneldynamic: {
            "buttonAdd": "btn btn-secondary",
		    "buttonRemove": "btn btn-danger m-b-1",
        }
    };
    constructor(props: AdmissionEnquiryProps) {
        super(props);
        this.state = {
            list: this.props.data,
            totalRecords: this.props.totalRecords,
            type: this.props.type,
            isDetailOpen: false,
            enquiryObj: {},
            tempObj: {},
            source: this.props.source,
            sourceOfApplication: this.props.sourceOfApplication,
            user: this.props.user,
            ssmStatesData: [],
            isLoading: false,
            uniqueStateData: [],
            currentState: null,
            survey: null,
            currentPageNo: null,
            branchId: null,
            departmentId: null,
            academicYearId: null,
            batchList: [],
            sectionList: [],
            stateList: [],
            cityList: [],
            admissionNo: null,
            isAuthenticated: false,
            userAgentApplication: new UserAgentApplication({
                auth: {
                    clientId: azureConfig.APP_ID,
                    redirectUri: azureConfig.REDIRECT_URL
                },
                cache: {
                    cacheLocation: "localStorage",
                    storeAuthStateInCookie: true,
                }
            }),
            accessToken: null,
            msCloudParentId: azureConfig.MS_CLOUD_PARENT_ID,
            tokenType: null,
            imageFileObj: null,
            otherFileObj: [],
            documentUploadStatus: [],
            newStudentId: null,
            enqObjForEdit: null,
            isPersonalInfoDone: false,
            isAcademicInfoDone: false,
            isDocumentsDone: false,
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
        this.getBatchList = this.getBatchList.bind(this);
        this.setDropDown = this.setDropDown.bind(this);
        this.getSectionList = this.getSectionList.bind(this);
        // this.setSectionDropDown = this.setSectionDropDown.bind(this);
        this.onFormDetailsChanged = this.onFormDetailsChanged.bind(this);
        this.getStateList = this.getStateList.bind(this);
        this.getCityList = this.getCityList.bind(this);
        this.saveAdmissionApplication = this.saveAdmissionApplication.bind(this);
        this.initData = this.initData.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.uploadFilesToMsCloud = this.uploadFilesToMsCloud.bind(this);
        this.updateDocumentsPathInBackend = this.updateDocumentsPathInBackend.bind(this);
        this.loginToMsAccount = this.loginToMsAccount.bind(this);
        this.saveTempObjectInDb = this.saveTempObjectInDb.bind(this);
        this.initFromDb = this.initFromDb.bind(this);
        this.onClickSsmState = this.onClickSsmState.bind(this);
    }

    async componentDidMount() {
        await this.registerSocket();
        if (this.state.source === 'ADMISSION_PAGE') {
            await this.getSsmStates();
            await this.removeDuplicateAndSort();
            this.surveyModel = new Survey.ReactSurveyModel(SurveyJson.ADMISSION_STATE_FORM);
            this.setState({ survey: SurveyJson.ADMISSION_STATE_FORM });
            // await this.loginToMsAccount(); 
        }
    }

    async loginToMsAccount() {
        try {
            if (!this.state.isAuthenticated) {
                console.log("Authenticating the user with microsoft AD account");
                await this.state.userAgentApplication.loginPopup({
                    scopes: azureConfig.scopes,
                    prompt: "select_account"
                });
            }
            await this.getUserProfile();
        } catch (err) {
            alert("ERROR. loginToMsAccount ---->>>>> " + err);
            this.setState({
                isAuthenticated: false,
                azureUser: {},
                // error: error
            });
        }
    }

    async getUserProfile() {
        try {
            var accessToken = await this.state.userAgentApplication.acquireTokenSilent({
                scopes: azureConfig.scopes,
                // client_secret: azureConfig.CLIENT_SECRATE
            });
            console.log("EnquiryGrid. ACCESS TOKEN :::::: ", accessToken.accessToken);
            if (accessToken) {
                // TEMPORARY: Display the token in the error flash
                this.setState({
                    isAuthenticated: true,
                    accessToken: accessToken.accessToken
                });
                //   console.log("Getting list of all the files : ");
                //   const URI = 'https://graph.microsoft.com/v1.0/me/drive/root:/Manoj @ SYNECTIKS INC';
                //   axios.get( URI,
                //     { headers: { Authorization: `Bearer ${accessToken.accessToken}` }}
                //   ).then(res => {
                //     const me = res.data;
                //     console.log("PARENT ID : ",me.parentReference.id);
                //     this.setState({ 
                //         msCloudParentId : me.parentReference.id
                //     });
                //     console.log("TAB PAGE : MICROSOFT GRAPH RESPONSE : ",me);
                //   });


            }
        } catch (err) {
            alert("ERROR getting acces token ---->>>>> " + err);
            this.setState({
                isAuthenticated: false,
                // azureUser: {},
            });
        }
        // console.log("EnquiryGrid : PARENT ID : ",this.state.msCloudParentId);
    }

    registerSocket() {
        const socket = wsCmsBackendServiceSingletonClient.getInstance();

        socket.onmessage = (response: any) => {
            let message = JSON.parse(response.data);
            console.log("EnquiryGrid. message received from server ::: ", message);
            this.setState({
                branchId: message.selectedBranchId,
                academicYearId: message.selectedAcademicYearId,
                departmentId: message.selectedDepartmentId,
            });
            console.log("EnquiryGrid. branchId: ", this.state.branchId);
            console.log("EnquiryGrid. departmentId: ", this.state.departmentId);
            console.log("EnquiryGrid. ayId: ", this.state.academicYearId);
        }

        socket.onopen = () => {
            console.log("AdmissinPage. Opening websocekt connection User : ", new URLSearchParams(location.search).get("signedInUser"));
            socket.send(new URLSearchParams(location.search).get("signedInUser"));
        }

        window.onbeforeunload = () => {
            console.log("AdmissinPage. Closing websocket connection with cms backend service");
        }
    }

    async nextPageEvent() {
        const { branchId } = this.state;

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

    async initFromDb(enquiryObj: any){
        const { academicYearId, branchId, departmentId } = this.state;
        const machineId = Utils.getSSMachineId(config.SSM_ID, enquiryObj.id);
        const { data } = await this.props.client.query({
            query: GET_TEMP_STUDENT,
            variables: {
                branchId: branchId,
                academicYearId: academicYearId,
                stateMachineId: machineId
            },
            fetchPolicy: 'no-cache'
        })
        const tempObj = data.getTempStudent;
        console.log("Temp student object from db : ",tempObj);
        this.setState({
            tempObj: tempObj,
        });
        
    }

    async saveTempObjectInDb(){
        const { academicYearId, branchId, departmentId } = this.state;
        let exitCode = 0;
        const machineId = Utils.getSSMachineId(config.SSM_ID, this.state.enquiryObj.id);
        const tempInput = Utils.getInputForTempObject(this.surveyModel, branchId, academicYearId, departmentId, machineId);
        await this.props.client.mutate({
            mutation: SAVE_TEMP_STUDENT,
            variables: {
                input: tempInput
            },
            fetchPolicy: 'no-cache'
        }).then((resp: any) => {
            console.log("Success in saveTempStudent mutation. Exit code : ", resp.data.saveTempStudent.cmsTempStudentVo.exitCode);
            exitCode = resp.data.saveTempStudent.cmsTempStudentVo.exitCode;
        }).catch((error: any) => {
            exitCode = 1;
            console.log('Error in saveTempStudent mutation : ', error);
        });
        
    }

    /**
     * prevPageEvent is called on onCurrentPageChanged survey event. it should do the state changes
     * in workflow.
     */
    async prevPageEvent() {

        console.log("1. prevPageEvent : Page name --------- ", this.surveyModel.currentPageValue);

        if (this.surveyModel.currentPageValue) {

            let eventType = this.surveyModel.currentPageValue.name;
            if (this.state.currentPageNo !== null && this.surveyModel.currentPageValue.visibleIndex < this.state.currentPageNo) {
                eventType = "BackTo" + this.surveyModel.currentPageValue.name;
            }
            console.log("2. prevPageEvent : event type --------- ", eventType);
            await Utils.sendSsmEvent(eventType, this.state.enquiryObj.id)
            // this.updateStateData(curSt);
            // .then((curSt: any) => {
            //     console.log('Current State set from Previous Event : ', curSt);
            // });
            await this.updateSliderStates(this.surveyModel.currentPageValue.name);
            await this.saveTempObjectInDb();
            this.setState({
                currentPageNo: this.surveyModel.currentPageValue.visibleIndex,
            });
            
        }
    }

    async onComplete(survey: any, options: any) {
        const { branchId, departmentId, imageFileObj, otherFileObj } = this.state;
        // console.log("Survey results: " + JSON.stringify(survey.data));
        try {
            await this.saveAdmissionApplication('ACTIVE');
            await this.saveStudent();
            if (config.IS_MS_ONEDRIVE_STORAGE === 'YES') {
                // if(imageFileObj){
                //     await this.uploadFilesToMsCloud(imageFileObj,"image/png", "photo");
                // }
                console.log("EnquiryGrid. onComplete. otherFileObj ::--->>>>>, ", otherFileObj);
                if (otherFileObj.length > 0) {
                    await otherFileObj.map((item: any, index: any) => {
                        console.log("uploding file ::: --> ", item);
                        if (item.name === imageFileObj.name && item.type === imageFileObj.type) {
                            this.uploadFilesToMsCloud(imageFileObj, "image/png", "photo");
                        } else {
                            if (item.type === "image/png") {
                                this.uploadFilesToMsCloud(item, "image/png", "document");
                            } else {
                                this.uploadFilesToMsCloud(item, "application/json", "document");
                            }
                        }

                    });
                }
            }

            // await this.updateDocumentsPathInBackend();
            await Utils.sendSsmEvent("GrantAdmission", this.state.enquiryObj.id);
            await this.updateSliderStates("AdmissionGranted");
        } catch (e) {
            console.log("Exception saving admission application ", e);
        }
    }

    async updateDocumentsPathInBackend(item: any) {
        console.log("1. EnquiryGrid. updateDocumentsPathInBackend:::::: ");
        const { documentUploadStatus, newStudentId } = this.state;
        // const arr = documentUploadStatus;
        // await arr.map( (item: any) => {
        console.log("1. EnquiryGrid. updateDocumentsPathInBackend. Item ::: ", item)
        if (item.status === 'SUCCESS') {
            Utils.postReq(config.BACKEND_CMS_DOCUMENTS_URL + "?studentId=" + newStudentId, item)
                .then((res: any) => {
                    console.error('EnquiryGrid: document backend update status ', res);
                })
                .catch((err: any) => {
                    console.error('3. fetchCurState: Failed to fetch ', err);
                });
        }
        // });
    }

    async saveStudent() {
        const { branchId, departmentId, academicYearId, admissionNo } = this.state;
        const data = Utils.getInput(this.surveyModel, branchId, departmentId, null, admissionNo, academicYearId);
        console.log("1 EnquiryGrid. saveStudent.  input  : ", data);
        if (data.strDateOfBirth === "Invalid date") {
            data.strDateOfBirth = null;
        }
        await Utils.postReq(config.BACKEND_GRANT_ADMISSION + "?admissionNo=" + admissionNo, data)
            .then((res: any) => {
                console.log('2 EnquiryGrid. saveStudent - admission granted ::: ', res);
                this.setState({
                    newStudentId: res.data
                });
                console.log('3 EnquiryGrid. new student id ::: ', res.data);
            })
            .catch((err: any) => {
                console.error('3 EnquiryGrid. Failed to post student data to backend ', err);
            });
    }

    async saveAdmissionApplication(status: any) {
        const { academicYearId, branchId, departmentId, enquiryObj } = this.state;
        let admissionApplicationInput = {
            applicationStatus: status,
            admissionEnquiryId: enquiryObj.id,
            academicYearId: academicYearId,
            branchId: branchId
        };

        let exitCode = 0;
        await this.props.client.mutate({
            mutation: SAVE_ADMISSION_APPLICATION,
            variables: {
                input: admissionApplicationInput
            },
            fetchPolicy: 'no-cache'
        }).then((resp: any) => {
            console.log("Success in saveAdmissionApplication Mutation. Exit code : ", resp.data.saveAdmissionApplication.cmsAdmissionApplicationVo.exitCode);
            exitCode = resp.data.saveAdmissionApplication.cmsAdmissionApplicationVo.exitCode;
            if (exitCode === 0) {
                this.setState({
                    list: resp.data.saveAdmissionApplication.cmsAdmissionApplicationVo.enquiryList,
                    admissionNo: resp.data.saveAdmissionApplication.cmsAdmissionApplicationVo.admissionNo
                });
            }
        }).catch((error: any) => {
            exitCode = 1;
            console.log('Error in saveAdmissionApplication Mutation : ', error);
        });

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

    async removeDuplicateAndSort() {
        const arr = this.state.ssmStatesData;
        let obj: any = [];
        let objName: any = {};
        arr.map((item: any) => {
            if (!objName[item.name]) {
                console.log("removeDuplicateAndSort - Unique items ::::: ", item);
                objName[item.name] = item;
                if (item.name !== "Lost") {
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
        console.log("1. updateSliderStates - Current state ---- ", curState);
        const arr = this.state.ssmStatesData;
        const currentIndex = this.SSM_SORT_ORDER[curState];
        const obj: any = [];
        await arr.map((item: any, index: any) => {
            console.log("2. updateSliderStates - Current Item ---- ", item);
            let i = this.SSM_SORT_ORDER[item.name];
            // if (item.name === this.state.currentState) {
            //     item.active = true;
            //     item.status = 'Y';
            //     obj[i] = item;
            // }else 

            if (index <= currentIndex) {
                item.status = 'Y';
            } else {
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
            console.log("2. showSelectedPage. Current Page :: ", pm);
            if (pm.name === curSt) {
                this.surveyModel.currentPageNo = pm.visibleIndex;
                console.log("3. showSelectedPage ::::: Page name : ", this.surveyModel.currentPageValue);
                break;
            }
        }
        await console.log("4. showSelectedPage :::::: ");
    }

    async getBatchList() {
        const { departmentId } = this.state;
        let batchList: any = [];
        console.log("Getting batch :::: ");
        const URL = config.PREF_GET_BATCH_URL + '?departmentId=' + departmentId;
        await Utils.getReq(URL)
            .then((res: any) => {
                console.log('1. EnquiryGrid. batch list : ', res);
                if (res && Array.isArray(res.data)) {
                    for (var i = 0; i < res.data.length; i++) {
                        let b = res.data[i];
                        // console.log("2. EnquiryGrid. batch list batch :: ",b);
                        batchList.push(b);
                    }
                    this.setState({
                        batchList: batchList,
                    });
                    console.log('3. EnquiryGrid. batch list : ', batchList);

                } else {
                    console.warn('EnquiryGrid: Invalid response for batch list url : ' + URL);
                }
            }).catch((err: any) => {
                console.error('EnquiryGrid: Failed to fetch batch list ', err);
            });
    }

    async getSectionList(batchId: any) {
        if (batchId === "") {
            this.setState({
                sectionList: [],
            });
            return;
        }
        let sectionList: any = [];
        console.log("Getting section list: ");
        const URL = config.PREF_GET_SECTION_URL + '?batchId=' + batchId;
        await Utils.getReq(URL)
            .then((res: any) => {
                console.log('1. EnquiryGrid. section list: ', res);
                if (res && Array.isArray(res.data)) {
                    for (var i = 0; i < res.data.length; i++) {
                        let b = res.data[i];
                        // console.log("2. EnquiryGrid. batch list batch :: ",b);
                        sectionList.push(b);
                    }
                    this.setState({
                        sectionList: sectionList,
                    });
                    console.log('3. EnquiryGrid. section list: ', sectionList);

                } else {
                    console.warn('EnquiryGrid: Invalid response for section list url: ' + URL);
                }
            }).catch((err: any) => {
                console.error('EnquiryGrid: Error. Failed to fetch section list: ', err);
            });
    }

    async setDropDown(list: any, questionObject: any, id: any, name: any) {
        var obj = this.surveyModel.getQuestionByName(questionObject);
        obj.value = "";
        let arr: any = [];
        await list.map((item: any, index: any) => {
            let obj = {
                value: item[id],
                text: item[name]
            }
            arr.push(obj);
        });
        obj.choices = arr;
    }

    async initData(enquiryObj: any) {
        var studentNameQuestion = this.surveyModel.getQuestionByName("studentName");
        studentNameQuestion.questionValue = enquiryObj.studentName;

        var studentMiddleNameQuestion = this.surveyModel.getQuestionByName("studentMiddleName");
        studentMiddleNameQuestion.questionValue = enquiryObj.studentMiddleName;

        var studentLastNameQuestion = this.surveyModel.getQuestionByName("studentLastName");
        studentLastNameQuestion.questionValue = enquiryObj.studentLastName;

        var studentPrimaryCellNumberQuestion = this.surveyModel.getQuestionByName("studentPrimaryCellNumber");
        studentPrimaryCellNumberQuestion.questionValue = enquiryObj.cellPhoneNo;

        var studentLandLinePhoneNumberQuestion = this.surveyModel.getQuestionByName("studentLandLinePhoneNumber");
        studentLandLinePhoneNumberQuestion.questionValue = enquiryObj.landLinePhoneNo;

        var studentPrimaryEmailIdQuestion = this.surveyModel.getQuestionByName("studentPrimaryEmailId");
        studentPrimaryEmailIdQuestion.questionValue = enquiryObj.emailId;

        var dateOfBirthQuestion = this.surveyModel.getQuestionByName("dateOfBirth");
        dateOfBirthQuestion.questionValue = moment(enquiryObj.strDateOfBirth, "DD-MM-YYYY").format("YYYY-MM-DD");

        var genderQuestion = this.surveyModel.getQuestionByName("sex");
        genderQuestion.value = enquiryObj.gender;

        // ----------------
        if(!this.state.tempObj){
            return;
        }
        this.surveyModel.getQuestionByName('fatherName').questionValue = this.state.tempObj.fatherName; 						
        this.surveyModel.getQuestionByName('fatherMiddleName').questionValue = this.state.tempObj.fatherMiddleName; 					
        this.surveyModel.getQuestionByName('fatherLastName').questionValue = this.state.tempObj.fatherLastName; 					
        this.surveyModel.getQuestionByName('motherName').questionValue = this.state.tempObj.motherName; 						
        this.surveyModel.getQuestionByName('motherMiddleName').questionValue = this.state.tempObj.motherMiddleName; 					
        this.surveyModel.getQuestionByName('motherLastName').questionValue = this.state.tempObj.motherLastName; 					
        this.surveyModel.getQuestionByName('placeOfBirth').questionValue = this.state.tempObj.placeOfBirth; 						
        this.surveyModel.getQuestionByName('religion').questionValue = this.state.tempObj.religion; 							
        this.surveyModel.getQuestionByName('caste').questionValue = this.state.tempObj.caste; 								
        this.surveyModel.getQuestionByName('subCaste').questionValue = this.state.tempObj.subCaste; 							
        this.surveyModel.getQuestionByName('studentLocalAddress').questionValue = this.state.tempObj.studentLocalAddress; 				
        this.surveyModel.getQuestionByName('studentPermanentAddress').questionValue = this.state.tempObj.studentPermanentAddress; 			
        this.surveyModel.getQuestionByName('city').questionValue = this.state.tempObj.city; 								
        this.surveyModel.getQuestionByName('state').questionValue = this.state.tempObj.state; 								
        this.surveyModel.getQuestionByName('pinCode').questionValue = this.state.tempObj.pinCode; 							
        this.surveyModel.getQuestionByName('studentAlternateCellNumber').questionValue = this.state.tempObj.studentAlternateCellNumber; 		
        this.surveyModel.getQuestionByName('studentAlternateEmailId').questionValue = this.state.tempObj.studentAlternateEmailId; 			
        this.surveyModel.getQuestionByName('relationWithStudent').questionValue = this.state.tempObj.relationWithStudent; 				
        this.surveyModel.getQuestionByName('emergencyContactName').questionValue = this.state.tempObj.emergencyContactName; 				
        this.surveyModel.getQuestionByName('emergencyContactCellNumber').questionValue = this.state.tempObj.emergencyContactCellNumber; 		
        this.surveyModel.getQuestionByName('emergencyContactEmailId').questionValue = this.state.tempObj.emergencyContactEmailId; 			
        this.surveyModel.getQuestionByName('studentType').questionValue = this.state.tempObj.studentType; 						
        this.surveyModel.getQuestionByName('fatherCellNumber').questionValue = this.state.tempObj.fatherCellNumber; 					
        this.surveyModel.getQuestionByName('fatherEmailId').questionValue = this.state.tempObj.fatherEmailId; 						
        this.surveyModel.getQuestionByName('motherCellNumber').questionValue = this.state.tempObj.motherCellNumber; 					
        this.surveyModel.getQuestionByName('motherEmailId').questionValue = this.state.tempObj.motherEmailId; 						
        this.surveyModel.getQuestionByName('batchId').questionValue = this.state.tempObj.batchId; 							
        this.surveyModel.getQuestionByName('sectionId').questionValue = this.state.tempObj.sectionId; 							
        // this.surveyModel.getQuestionByName('dateOfBirth').questionValue = this.state.tempObj.strDateOfBirth;						
        this.surveyModel.getQuestionByName('qualification').questionValue = this.state.tempObj.highestQualification; 				
        this.surveyModel.getQuestionByName('yearOfPassing').questionValue = this.state.tempObj.yearOfPassing; 						
        this.surveyModel.getQuestionByName('percentage').questionValue = this.state.tempObj.lastQualificationPercentage; 		
        this.surveyModel.getQuestionByName('institution').questionValue = this.state.tempObj.lastCollegeAttended; 				
        
        
    }

    async showDetail(e: any, bShow: boolean, enquiryObj: any) {
        e && e.preventDefault();
        const {source} = this.state;
        this.setState({
            isDetailOpen: bShow
        });
        if (bShow) {
            this.setState({
                isLoading: true
            });
            await this.getBatchList();
            await this.getStateList();
            await this.getCityList();
            if(source === "ADMISSION_PAGE"){
                await this.fetchCurState(enquiryObj.id);
                if (this.state.currentState === "EnquiryReceived") {
                    await Utils.sendSsmEvent("PersonalInfo", enquiryObj.id);
                }
                await this.updateSliderStates(this.state.currentState);
                await this.showSelectedPage(this.state.currentState);
                await this.setDropDown(this.state.batchList, "batchId", "id", "batch");
                await this.setDropDown(this.state.stateList, "state", "id", "stateName");
                await this.initFromDb(enquiryObj);
                await this.initData(enquiryObj);
            }
            this.setState({
                isLoading: false
            });
        } else {
            this.setState({
                isLoading: false
            });
        }
        this.setState({
            enqObjForEdit: enquiryObj, 
            enquiryObj: enquiryObj,
            source: this.props.source,
            sourceOfApplication: this.props.sourceOfApplication,
        });
    }

    createRows(objAry: any) {
        const { source } = this.state;
        console.log("createRows() - Enquiry list on Grid page: ", objAry);
        if (objAry === undefined || objAry === null) {
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
                                <button className="btn btn-primary" onClick={e => this.showDetail(e, true, admissionEnquiry)}>{source !== "ADMISSION_PAGE" ? 'Edit' : 'Grant Admission'}</button>
                            )
                        }
                    </td>
                </tr>
            );
        }
        return retVal;
    }

    async updateEnquiryList(updatedEnquiryList: any) {
        this.setState({
            list: updatedEnquiryList,
        });
    }

    async getStateList() {
        let stateList: any = [];
        const URL = config.PREF_STATES_URL;
        await Utils.getReq(URL)
            .then((res: any) => {
                if (res && Array.isArray(res.data)) {
                    for (var i = 0; i < res.data.length; i++) {
                        let b = res.data[i];
                        stateList.push(b);
                    }
                    this.setState({
                        stateList: stateList,
                    });
                } else {
                    console.warn('EnquiryGrid: Invalid response for state list url: ' + URL);
                }
            }).catch((err: any) => {
                console.error('EnquiryGrid: Error. Failed to fetch state list: ', err);
            });
    }

    async getCityList() {
        let cityList: any = [];
        const URL = config.PREF_CITY_URL;
        await Utils.getReq(URL)
            .then((res: any) => {
                if (res && Array.isArray(res.data)) {
                    for (var i = 0; i < res.data.length; i++) {
                        let b = res.data[i];
                        cityList.push(b);
                    }
                    this.setState({
                        cityList: cityList,
                    });
                } else {
                    console.warn('EnquiryGrid: Invalid response for city list url: ' + URL);
                }
            }).catch((err: any) => {
                console.error('EnquiryGrid: Error. Failed to fetch city list: ', err);
            });
    }

    async uploadFilesToMsCloud(file: any, contentType: any, namePrefix: any) {
        const { accessToken, msCloudParentId, newStudentId } = this.state;
        try {
            const fName = namePrefix + "_" + file.name + "_" + newStudentId;
            console.log("EnquiryGrid. Uploading file to MS OneDrive: ", fName);
            const URI = azureConfig.MS_GRAPH_URL + '/' + msCloudParentId + ':/' + file.name + ':/content';
            // console.log("Access Token : ",accessToken.accessToken);
            // console.log("EnquiryGrid. msCloudParentId: ",msCloudParentId);

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${accessToken}`);
            myHeaders.append("Content-Type", contentType);
            await fetch(URI, {
                method: 'PUT',
                headers: myHeaders,
                body: file,
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(async  result => {
                    // const {documentUploadStatus} = this.state;
                    // const arr = documentUploadStatus;
                    // arr.map((item: any, index: any) => {
                    let item = {
                        documentName: namePrefix + "__" + file.name,
                        isMsOneDriveStorage: config.IS_MS_ONEDRIVE_STORAGE,
                        status: 'SUCCESS',
                        oneDrivePath: result['@microsoft.graph.downloadUrl'],
                    }
                    await this.updateDocumentsPathInBackend(item);
                    // console.log("1. EnquiryGrid uploadFilesToMsCloud. selectFile::: --> ",item);
                    // arr.push(item);
                    // // });
                    // this.setState({
                    //     documentUploadStatus: arr,
                    // });
                    console.log("2. EnquiryGrid uploadFilesToMsCloud. File upload succes: ", result);
                    console.log("3. EnquiryGrid uploadFilesToMsCloud. File Download URL: ", result['@microsoft.graph.downloadUrl'])
                })
                .catch(error => console.log('error', error));
        } catch (err) {
            console.log("EnquiryGrid. Error in uploading file to MS OneDrive: ", err);
        }
    }

    async uploadFiles(sender: any, options: any) {
        switch (options.name) {
            case "studentImage":
                {
                    console.log("EnquiryGrid. studentImage::: --> ", options.files[0]);
                    this.setState({
                        imageFileObj: options.files[0],
                    });
                }
            case "selectFile":
                {
                    const { otherFileObj } = this.state;
                    const arr = otherFileObj;
                    // console.log("Existing items in file array : ",arr);
                    await options.files.map((item: any, index: any) => {
                        console.log("EnquiryGrid. selectFile::: --> ", item);
                        arr.push(item);
                    });
                    this.setState({
                        otherFileObj: arr,
                    });
                }

        }
    }
    async onFormDetailsChanged(sender: any, options: any) {
        switch (options.name) {
            case "batchId":
                {
                    let batch = sender.getQuestionByName("batchId");
                    let section = sender.getQuestionByName("sectionId");
                    await this.getSectionList(batch.value);
                    section.value = "";
                    let arr: any = [];
                    for (let i = 0; i < this.state.sectionList.length; i++) {
                        let item = this.state.sectionList[i];
                        let obj = {
                            value: item.id,
                            text: item.section
                        }
                        arr.push(obj);
                    }
                    section.choices = arr;
                }
            case "state":
                {
                    let objSource = sender.getQuestionByName("state");
                    let objTarget = sender.getQuestionByName("city");
                    objTarget.value = "";
                    let arr: any = [];

                    await this.state.cityList.map((item: any, index: any) => {
                        if (objSource.value === item["stateId"]) {
                            let obj = {
                                value: item["id"],
                                text: item["cityName"]
                            }
                            arr.push(obj);
                        }
                    });

                    objTarget.choices = arr;
                }
            // section.choices = [{
            //     value: "choice1",
            //     text: "choice1"
            // },{
            //     value: "choice2",
            //     text: "choice2"
            // },{
            //     value: "choice3",
            //     text: "choice3"
            // }];
        }
    }

    onClickSsmState(e: any, item: any){
        this.surveyModel.pages.forEach((element: any) => {
            if(item.name === element.name){
                // console.log("ITEM FROM GRID ::: ", element);
                // this.setState({
                //     currentPageNo: element.visibleIndex,
                // });    
            }
        });
    }

    render() {
        // const { data } = this.props
        const { list, totalRecords, type, isDetailOpen, enquiryObj, source, sourceOfApplication, user, currentState, isLoading } = this.state;
        return (
            <main style={{width: "100%"}}>
                {isDetailOpen && !isLoading &&
                    
                    <React.Fragment>
                        <button className="btn btn-primary" onClick={(e) => this.showDetail(e, false, null)}>Back</button>
                        {
                            source === 'ADMISSION_PAGE' ?
                                <React.Fragment>
                                    <div className="xform-container">
                                        <div className="text-center  m-b-1" >
                                            <Slider clickHandler={this.onClickSsmState} data={this.state.uniqueStateData} />
                                        </div>
                                        <div className="custom-style">
                                            {/* {this.state.survey ? this.getModel(this.state.survey) : null} */}
                                            {
                                                this.surveyModel &&
                                                <Survey.Survey model={this.surveyModel} onComplete={this.onComplete} onCurrentPageChanging={this.nextPageEvent} onCurrentPageChanged={this.prevPageEvent} onValueChanged={this.onFormDetailsChanged} onUploadFiles={this.uploadFiles} css={this.customCss} />
                                            }
                                        </div>
                                        {/* <div className="xform-container" style={{height:'300px', overflowY:'auto'}}>
                                        <StudentPersonalInfo className="xform-container"></StudentPersonalInfo>
                                    </div> */}
                                    </div>
                                </React.Fragment>
                            : 
                            this.state.enqObjForEdit !== null ?    
                                <AdmissionEnquiryPage onSaveUpdate={this.updateEnquiryList} operationType={"EDIT"} enquiryObject={this.state.enqObjForEdit} origin={source} sourceOfApplication={sourceOfApplication}></AdmissionEnquiryPage>
                            : console.log("this.state.enqObjForEdit is null")
                            
                        }
                        

                        {
                            // source !== 'ADMISSION_PAGE' ?
                            //     <div className="text-center" style={{ marginLeft: '222px', marginTop: '-34px' }}>

                            //     </div>
                            //     : null
                        }
                    </React.Fragment>
                }
                {
                    isDetailOpen && isLoading &&
                    <div>Data is loading...</div>
                }
                {!isDetailOpen &&
                    <React.Fragment>
                        <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
                            {
                                source !== 'ADMISSION_PAGE' && (
                                    <span style={{ fontSize: "13px", color: "Blue" }}>{type} : {totalRecords}</span>
                                )
                            }
                        </div>
                        <div style={{ width: '100%', height: '250px', overflow: 'auto' }}>
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
                                    {this.createRows(list)}
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                }
            </main>
        );
    }
}

export default withApollo(EnquiryGrid);