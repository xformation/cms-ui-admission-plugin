import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as Survey from "xform-react";
import "xform-react/xform.min.css";
// import {ADD_ADM_APPLICATION, ADD_DOCUMENT, CREATE_ADMISSION_DATA_CACHE } from '../_queries'
// import withLoadingHandler from '../withLoadingHandler';
import '../../../css/custom.css';

// import * as AddDocumentMutationGql from './_queries/AddDocumentMutation.graphql';
// import * as AddAdmissionApplicationMutationGql from './_queries/AddAdmissionApplicationMutation.graphql';
// import { AdmissionServices } from './_services';
// import {
//     LoadAdmissionDataCacheType,
//     DocumentsAddMutationType,
//     AddAdmissionApplicationMutation
// } from '../../types';

// import withLoadingHandler from '../../../components/withLoadingHandler';
// import withAdmissionDataCacheLoader from "./withAdmissionDataCacheLoader";
// import 'bootstrap/dist/css/bootstrap.min.css';

// type AdmissionDataRootProps = RouteComponentProps<{
//     // collegeId: string;
// }> & {
//         data: QueryProps & LoadAdmissionDataCacheType;
//     }

// type AddAdmissionPageProps = AdmissionDataRootProps & {
//     addDocument: MutationFunc<DocumentsAddMutationType>;
//     addAdmissionApplicationMutation: MutationFunc<AddAdmissionApplicationMutation>;
// };

function onClickHeader(e: any) {
    const { currentTarget } = e;
    const plusSign = currentTarget.querySelector(".fa-plus");
    const minusSign = currentTarget.querySelector(".fa-minus");
    const collapseContainer = currentTarget.closest(".collapse-container");
    const formContainer = collapseContainer.querySelector(".gf-form-inline");
    const style = window.getComputedStyle(formContainer);
    if (style.display === "none") {
        formContainer.style.display = "grid";
        formContainer.style.gridGap = "10px";
        formContainer.style.gridTemplateColumns = "auto auto auto";
        minusSign.style.display = "block";
        plusSign.style.display = "none";
    } else {
        formContainer.style.display = "none";
        minusSign.style.display = "none";
        plusSign.style.display = "block";
    }
}

type AdmissionEnquiryState = {
    admissionEnquiryData: any,
    departments: any,
    branches: any,
    batches: any,
    states: any,
    cities: any,
    courses: any,
    submitted: any,
    uploadPhoto: any,
    fileName: any,
    activeRadio: any
};

const customCss = {
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
        complete: "btn bs d-none"
    },
    error: {
        root: "error"
    }
};

class NewAdmissionEnquiryPage extends React.Component<any, AdmissionEnquiryState>{
    isActive: any = false;
    // totalResult: any;
    // cumulativeResult: any;
    personalFormRef: any;
    // academicHistoryFormRef: any;
    // documentsFormRef: any;
    // admissionFormRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            admissionEnquiryData: {
                academicYear: {
                    id: ""
                },
                branch: {
                    id: ""
                },
                department: {
                    id: ""
                },
                batch: {
                    id: ""
                },
                state: {
                    id: ""
                },
                city: {
                    id: ""
                },
                course: {
                    id: ""
                }
            },
            departments: [],
            branches: [],
            batches: [],
            states: [],
            cities: [],
            courses: [],
            submitted: false,
            uploadPhoto: null,
            fileName: "",
            activeRadio: "draft"
        };
        this.reassignConfig();
        this.createDepartments = this.createDepartments.bind(this);
        this.createBranches = this.createBranches.bind(this);
        this.createBatches = this.createBatches.bind(this);
        this.createStates = this.createStates.bind(this);
        this.createCities = this.createCities.bind(this);
        this.createCourseOptions = this.createCourseOptions.bind(this);
        this.onAdmissionDetailsChanged = this.onAdmissionDetailsChanged.bind(this);
        this.onCompletePersonalForm = this.onCompletePersonalForm.bind(this);
        // this.onCompleteAcademicHistoryForm = this.onCompleteAcademicHistoryForm.bind(this);
        // this.onCompleteAdmissionDetailsForm = this.onCompleteAdmissionDetailsForm.bind(this);
        this.saveAllForm = this.saveAllForm.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.sendData = this.sendData.bind(this);
        this.personalFormRef = React.createRef();
        // this.academicHistoryFormRef = React.createRef();
        // this.documentsFormRef = React.createRef();
        // this.admissionFormRef = React.createRef();
    }

    handleRadioChange(e: any) {
        const { name, value } = e.target;
        this.isActive = value === "active";
        this.reassignConfig();
        this.setState({
            "activeRadio": value
        });
    }

    onAdmissionDetailsChanged(sender: any, options: any) {
        let { admissionEnquiryData } = this.state;
        let department = sender.getQuestionByName("department");
        let batch = sender.getQuestionByName("batch");
        switch (options.name) {
            case "branch":
                department.value = "";
                department.choices = this.createDepartments(this.props.data.createAdmissionDataCache.departments, options.value);
                batch.value = "";
                batch.choices = [];
                break;
            case "department":
                batch.value = "";
                batch.choices = this.createBatches(this.props.data.createAdmissionDataCache.batches, department.value)
                break;
            case "state":
                let city = sender.getQuestionByName("city");
                let state = sender.getQuestionByName("state");
                city.value = "";
                city.choices = this.createCities(this.props.data.createAdmissionDataCache.cities, state.value);
                break;
        }
    }

    PERSONAL = {};
    // ACADEMIC_HISTORY = {};
    // DOCUMENTS = {};
    // ADMISSION_DETAILS = {};

    reassignConfig() {

        this.PERSONAL = {
            title: "Personal Details",
            showQuestionNumbers: "off",
            elements: [
                {
                    type: "text",
                    name: 'studentName',
                    title: 'Name',
                    requiredErrorText: 'Please enter Name',
                    isRequired: true,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'studentMiddleName',
                    title: 'Middle Name',
                    requiredErrorText: 'Please enter Middle Name',
                    isRequired: true,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'studentLastName',
                    title: 'Last Name',
                    requiredErrorText: 'Please enter Last Name',
                    isRequired: true,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'cellPhoneNo',
                    title: 'Cell Phone No',
                    // requiredErrorText: 'Please enter Father Name',
                    isRequired: false,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'landLinePhoneNo',
                    title: 'Land Line Phone No',
                    // requiredErrorText: 'Please enter Father Middle Name',
                    isRequired: false,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'emailId',
                    title: 'Email Id',
                    // requiredErrorText: 'Please enter Father Last Name',
                    isRequired: false,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    inputType: "date",
                    name: 'dateOfBirth',
                    title: 'Date Of Birth',
                    // requiredErrorText: 'Please enter Date Of Birth',
                    isRequired: false,
                    startWithNewLine: false,
                },
                {
                    type: 'dropdown',
                    name: 'gender',
                    title: 'Gender',
                    requiredErrorText: 'Please enter Gender',
                    isRequired: false,
                    startWithNewLine: false,
                    choices: [
                        {
                            value: "MALE",
                            text: "MALE"
                        },
                        {
                            value: "FEMALE",
                            text: "FEMALE"
                        },
                        {
                            value: "BOTH",
                            text: "BOTH"
                        }
                    ]
                },
                {
                    type: "text",
                    name: 'highestQualification',
                    title: 'Highest Qualification',
                    requiredErrorText: 'Please enter last qualification',
                    isRequired: false,
                    startWithNewLine: false,
                },
                {
                    type: "text",
                    name: 'comments',
                    title: 'Comments',
                    requiredErrorText: 'Please enter enquiry details',
                    isRequired: true,
                    startWithNewLine: false,
                }
            ]
        };

        
    
        
    }

    createDepartments(departments: any, selectedBranchId: any) {
        let departmentsOptions = [];
        for (let i = 0; i < departments.length; i++) {
            let brId = "" + departments[i].branch.id;
            if (selectedBranchId == brId) {
                departmentsOptions.push({
                    value: departments[i].id,
                    text: departments[i].name
                });
            }
        }
        return departmentsOptions;
    }

    createBranches(branches: any) {
        let branchesOptions = [];
        for (let i = 0; i < branches.length; i++) {
            branchesOptions.push({
                value: branches[i].id,
                text: branches[i].branchName
            });
        }
        return branchesOptions;
    }

    createBatches(batches: any, selectedDepartmentId: any) {
        let batchesOptions = [];
        for (let i = 0; i < batches.length; i++) {
            let dptId = "" + batches[i].department.id;
            if (dptId == selectedDepartmentId) {
                batchesOptions.push({
                    value: batches[i].id,
                    text: batches[i].batch
                });
            }
        }
        return batchesOptions;
    }

    createStates(states: any) {
        let statesOptions = [];
        for (let i = 0; i < states.length; i++) {
            statesOptions.push({
                value: states[i].id,
                text: states[i].stateName
            });
        }
        return statesOptions;
    }

    createCities(cities: any, selectedStateId: any) {
        let citiesOptions = [];
        for (let i = 0; i < cities.length; i++) {
            let ctId = "" + cities[i].state.id;
            if (selectedStateId == ctId) {
                citiesOptions.push({
                    value: cities[i].id,
                    text: cities[i].cityName
                });
            }
        }
        return citiesOptions;
    }

    createCourseOptions(courses: any) {
        let coursesOptions = [];
        for (let i = 0; i < courses.length; i++) {
            let course = courses[i];
            coursesOptions.push({
                value: courses[i].description,
                text: courses[i].description
            });
        }
        return coursesOptions;
    }

    getStudentImage = (e: any) => {
        const { admissionEnquiryData } = this.state;
        admissionEnquiryData.uploadPhoto = URL.createObjectURL(e.target.files[0]);
        var r = new FileReader();
        r.onload = function (e: any) {
            admissionEnquiryData.fileName = e.target.result;
            console.log('Image converted to base64 on upload :\n\n' + admissionEnquiryData.fileName);
        };
        r.readAsDataURL(e.target.files[0]);

        this.setState({
            admissionEnquiryData: admissionEnquiryData
        })
    }

    onCompletePersonalForm(result: any) {
        result.clear(false, true);
        // this.totalResult += 1;
        // this.cumulativeResult = {
        //     ...this.cumulativeResult,
        //     ...result.data
        // };
        // if (this.totalResult === 3) {
        //     this.sendData();
        // }
    }

    

    sendData(){
        const {  addAdmissionApplicationMutation  } = this.props;
        return  addAdmissionApplicationMutation ({
            // variables: { input: {
            //         ...this.cumulativeResult
            //     }
            // },
        }).then((data: any) => {
            console.log("success"); 
        }).catch((error: any) => {
            console.log("failure");
        });
    }

    saveAllForm() {
        // this.totalResult = 0;
        // this.cumulativeResult = {};
        // this.admissionFormRef.current.survey.completeLastPage();
        this.personalFormRef.current.survey.completeLastPage();
        // this.academicHistoryFormRef.current.survey.completeLastPage();
    }

    render() {
        return (
            <section className="xform-container">
                {/* <div className="student-profile-container"> */}
                    
                    {/* <div className="row form-main-container m-0"> */}
                        {/* <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-part grafana-style">
                            
                        </div> */}
                        <div className="col-lg-12 custom-style">
                            <div>
                                <Survey.SurveyCollapseForm json={this.PERSONAL} css={customCss} onComplete={this.onCompletePersonalForm} ref={this.personalFormRef} />
                            </div>
                            {/* <div>
                                <Survey.SurveyCollapseForm json={this.ACADEMIC_HISTORY} css={customCss} onComplete={this.onCompleteAcademicHistoryForm} showCompletedPage={false} ref={this.academicHistoryFormRef} />
                            </div>
                            <div>
                                <Survey.SurveyCollapseForm json={this.DOCUMENTS} css={customCss} showCompletedPage={false} ref={this.documentsFormRef} />
                            </div> */}
                        </div>
                    {/* </div> */}
                    {/* <div className="row m-0"> */}
                        {/* <div className="col-sm-12 col-xs-12 profile-header m-b-2"> */}
                            <div className="pull-right">
                                <span className="m-r-2 data-saved-message" style={{ fontSize: "13px", color: "#AA0000", display: "none" }}>Data Saved</span>
                                <button className="btn bs" type="submit" onClick={this.saveAllForm}>Save</button>
                            </div>
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </section>
        );
    }
}


export default NewAdmissionEnquiryPage;
