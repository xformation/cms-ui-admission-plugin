import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as Survey from "xform-react";
import "xform-react/xform.min.css";

import * as AddDocumentMutationGql from './_queries/AddDocumentMutation.graphql';
import * as AddAcademicHistoryMutationGql from './_queries/AddAcademicHistoryMutation.graphql';
import * as AddPersonalDataMutationGql from './_queries/AddPersonalDataMutation.graphql';
// import { AdmissionServices } from './_services';
import {
    LoadAdmissionDataCacheType,
    AcademicHistoryAddMutationType,
    DocumentsAddMutationType,
    AddAdmissionPersonalDetailsMutationType
} from '../../types';

// import withLoadingHandler from '../../../components/withLoadingHandler';
import withAdmissionDataCacheLoader from "./withAdmissionDataCacheLoader";
// import 'bootstrap/dist/css/bootstrap.min.css';

type AdmissionDataRootProps = RouteComponentProps<{
    // collegeId: string;
}> & {
        data: QueryProps & LoadAdmissionDataCacheType;
    }

type AddAdmissionPageProps = AdmissionDataRootProps & {
    addAcademicHistoryMutation: MutationFunc<AcademicHistoryAddMutationType>;
    addDocument: MutationFunc<DocumentsAddMutationType>;
    addPersonalDataMutation: MutationFunc<AddAdmissionPersonalDetailsMutationType>;
};

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

type EditAdmissionProfileStates = {
    admissionData: any,
    departments: any,
    branches: any,
    batches: any,
    states: any,
    cities: any,
    courses: any,
    submitted: any,
    uploadPhoto: any,
    fileName: any,
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
        complete: "btn bs"
    },
    error: {
        root: "error"
    }
};

class AddAdmissionPage extends React.Component<AddAdmissionPageProps, EditAdmissionProfileStates>{
    personalFormRef: any;
    academicHistoryFormRef: any;
    documentsFormRef: any;
    admissionFormRef: any;
    constructor(props: AddAdmissionPageProps) {
        super(props);
        this.state = {
            admissionData: {
                department: {
                    id: ""
                },
                batch: {
                    id: ""
                },
                branch: {
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
        };
        this.createDepartments = this.createDepartments.bind(this);
        this.createBranches = this.createBranches.bind(this);
        this.createBatches = this.createBatches.bind(this);
        this.createStates = this.createStates.bind(this);
        this.createCities = this.createCities.bind(this);
        this.createCourseOptions = this.createCourseOptions.bind(this);
        this.onAdmissionDetailsChanged = this.onAdmissionDetailsChanged.bind(this);
        this.onCompletePersonalForm = this.onCompletePersonalForm.bind(this);
        this.onCompleteAcademicHistoryForm = this.onCompleteAcademicHistoryForm.bind(this);
        this.saveAllForm = this.saveAllForm.bind(this);
        this.personalFormRef = React.createRef();
        this.academicHistoryFormRef = React.createRef();
        this.documentsFormRef = React.createRef();
        this.admissionFormRef = React.createRef();
    }

    saveAllForm(){
        console.log(this.personalFormRef);
        this.personalFormRef.current.survey.completeLastPage();
        this.academicHistoryFormRef.current.survey.completeLastPage();
    }

    onAdmissionDetailsChanged(sender: any, options: any){
        let { admissionData } = this.state;
        switch (options.name) {
            case "branch":
                this.ADMISSION_DETAILS.elements[1].defaultValue = options.value;
                this.ADMISSION_DETAILS.elements[2].defaultValue = "";
                this.ADMISSION_DETAILS.elements[3].defaultValue = "";
                break;
            case "department":
                this.ADMISSION_DETAILS.elements[2].defaultValue = options.value;
                this.ADMISSION_DETAILS.elements[3].defaultValue = "";
                break;
            case "batch":
                this.ADMISSION_DETAILS.elements[3].defaultValue = options.value;
                break;
            case "state":
                this.ADMISSION_DETAILS.elements[4].defaultValue = options.value;
                this.ADMISSION_DETAILS.elements[5].defaultValue = "";
                break;
            case "city":
                this.ADMISSION_DETAILS.elements[5].defaultValue = options.value;
                break;
            case "course":
                this.ADMISSION_DETAILS.elements[6].defaultValue = options.value;
                break;
        }
        this.forceUpdate();
    }

    setChoices(){
        let branches = this.createBranches(this.props.data.createAdmissionDataCache.branches);
        let departments = this.createDepartments(this.props.data.createAdmissionDataCache.departments, this.ADMISSION_DETAILS.elements[1].defaultValue);
        let batches = this.createBatches(this.props.data.createAdmissionDataCache.batches, this.ADMISSION_DETAILS.elements[2].defaultValue);
        let states = this.createStates(this.props.data.createAdmissionDataCache.states);
        let cities = this.createCities(this.props.data.createAdmissionDataCache.cities, this.ADMISSION_DETAILS.elements[4].defaultValue);
        let course = this.createCourseOptions(this.props.data.createAdmissionDataCache.courses);
        this.ADMISSION_DETAILS.elements[1].choices = branches;
        this.ADMISSION_DETAILS.elements[2].choices = departments;
        this.ADMISSION_DETAILS.elements[3].choices = batches;
        this.ADMISSION_DETAILS.elements[4].choices = states;
        this.ADMISSION_DETAILS.elements[5].choices = cities;
        this.ADMISSION_DETAILS.elements[6].choices = course;
    }

    PERSONAL = {
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
                name: 'fatherName',
                title: 'Father Name',
                requiredErrorText: 'Please enter Father Name',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'fatherMiddleName',
                title: 'Father Middle Name',
                requiredErrorText: 'Please enter Father Middle Name',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'fatherLastName',
                title: 'Father Last Name',
                requiredErrorText: 'Please enter Father Last Name',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'motherName',
                title: 'Mother Name',
                requiredErrorText: 'Please enter Mother Name',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'motherMiddleName',
                title: 'Mother Middle Name',
                requiredErrorText: 'Please enter Mother Middle Name',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'motherLastName',
                title: 'mother Last Name',
                requiredErrorText: 'Please enter mother Last Name',
                isRequired: true,
                startWithNewLine: false,
            },

            {
                type: "text",
                inputType: "date",
                name: 'dateOfBirth',
                title: 'Date Of Birth',
                requiredErrorText: 'Please enter Date Of Birth',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'dropdown',
                name: 'sex',
                title: 'Gender',
                requiredErrorText: 'Please enter Gender',
                isRequired: true,
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
                        value: "OTHER",
                        text: "OTHER"
                    }
                ]
            },
            {
                type: "text",
                name: 'contactNumber',
                title: 'Student Contact Number',
                requiredErrorText: 'Please enter Student Contact Number',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'alternateMobileNumber',
                title: 'Alternate Contact Number',
                requiredErrorText: 'Please enter Alternate Contact Number',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'email',
                title: 'Student Email',
                requiredErrorText: 'Please enter Student Email',
                isRequired: true,
                startWithNewLine: false,
            },

        ]
    };

    ACADEMIC_HISTORY = {
        title: "Academic History",
        showQuestionNumbers: "off",
        elements: [
            {
                type: 'text',
                name: 'qualification',
                title: 'Highest Qualification',
                requiredErrorText: "Please enter Highest Qualification",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'yearOfPassing',
                title: 'Year',
                requiredErrorText: "Please enter Year",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'institution',
                title: 'Institution',
                requiredErrorText: "Please enter Institution",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'university',
                title: 'Board/University',
                requiredErrorText: "Please enter Board/University",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'enrollmentNo',
                title: 'Enrollment No',
                requiredErrorText: "Please enter Enrollment No",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'score',
                title: 'Score',
                requiredErrorText: "Please enter Score",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'percentage',
                title: 'Percentage',
                requiredErrorText: "Please enter Percentage",
                isRequired: true,
                startWithNewLine: false,
            },
        ]
    };

    DOCUMENTS = {
        title: "Documents",
        showQuestionNumbers: "off",
        elements: [
            {
                type: 'text',
                name: 'documentName',
                title: 'Document Name',
                isRequired: true,
                requiredErrorText: 'Please enter Document Name',
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'upload',
                title: 'Upload',
                isRequired: true,
                requiredErrorText: 'Please enter Upload',
                startWithNewLine: false,
            },
        ]
    };

    ADMISSION_DETAILS: any = {
        title: "",
        showQuestionNumbers: "off",
        elements: [
            {
                type: "text",
                name: "admissionNo",
                title: "Admission No",
                isRequired: true,
                maxLength: 50,
                startWithNewLine: true,
                requiredErrorText: "Please enter Admission No"
            },
            {
                type: 'dropdown',
                name: 'branch',
                title: 'Branch',
                requiredErrorText: 'Please enter Branch',
                isRequired: true,
                startWithNewLine: true,
                choices: [],
                defaultValue: ""
            },
            {
                type: 'dropdown',
                name: 'department',
                title: 'Department',
                requiredErrorText: 'Please enter Department',
                isRequired: true,
                startWithNewLine: true,
                choices: [],
                defaultValue: ""
            },
            {
                type: 'dropdown',
                name: 'batch',
                title: 'Year',
                requiredErrorText: 'Please enter Year',
                isRequired: true,
                startWithNewLine: true,
                choices: [],
                defaultValue: ""
            },
            {
                type: 'dropdown',
                name: 'state',
                title: 'State',
                requiredErrorText: 'Please enter State',
                isRequired: true,
                startWithNewLine: true,
                choices: []
            },
            {
                type: 'dropdown',
                name: 'city',
                title: 'City',
                requiredErrorText: 'Please enter City',
                isRequired: true,
                startWithNewLine: true,
                choices: [],
                defaultValue: ""
            },
            {
                type: 'dropdown',
                name: 'course',
                title: 'Course',
                requiredErrorText: 'Please enter Course',
                isRequired: true,
                startWithNewLine: true,
                choices: [],
                defaultValue: ""
            },
        ]
    };

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
        const { admissionData } = this.state;
        admissionData.uploadPhoto = URL.createObjectURL(e.target.files[0]);
        var r = new FileReader();
        r.onload = function (e: any) {
            admissionData.fileName = e.target.result;
            console.log('Image converted to base64 on upload :\n\n' + admissionData.fileName);
        };
        r.readAsDataURL(e.target.files[0]);

        this.setState({
            admissionData: admissionData
        })
    }

    onCompletePersonalForm(result:any){
        result.clear(false, true);
        const { addPersonalDataMutation } = this.props;
        return addPersonalDataMutation({
            variables: { input: {
                    ...result.data,
                    countryId: 951
                }
            },
        }).then((data: any) => {
            console.log("success");
        }).catch((error: any) => {
            console.log("failure");
        });
    }

    onCompleteAcademicHistoryForm(result: any){
        result.clear(false, true);
        const { addAcademicHistoryMutation } = this.props;
        return addAcademicHistoryMutation({
            variables: { input: {
                    ...result.data,
                    enrollmentNo: parseInt(result.data.enrollmentNo),
                    score: parseFloat(result.data.score),
                    percentage: parseInt(result.data.percentage),
                    studentId: 152
                }
            },
        }).then((data: any) => {
            console.log("success"); 
        }).catch((error: any) => {
            console.log("failure");
        });
    }

    render() {
        this.setChoices();
        return (
            <section className="xform-container">
                <div className="student-profile-container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-xs-12 profile-header m-b-2">
                            <div className="pull-left">Admin - Add Admission</div>
                            <div className="pull-right">
                                <span className="m-r-2 data-saved-message" style={{ fontSize: "13px", color: "#AA0000", display: "none" }}>Data Saved</span>
                                <button className="btn bs" type="submit" onClick={this.saveAllForm}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="row form-main-container m-0">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-part grafana-style">
                            <div className="row p-1">
                                <div className="col-md-6 col-lg-12 col-xs-12 col-sm-6">
                                    <img className="student-photo" id="stPhoto" />
                                </div>
                                <div className="col-sm-6 col-xs-12 col-md-6 col-lg-12">
                                    <input type="file" accept="image/*" id="stImageUpload" onChange={this.getStudentImage} />
                                    <div>
                                        <Survey.Survey onValueChanged = {this.onAdmissionDetailsChanged} json={this.ADMISSION_DETAILS} css={customCss} ref={this.admissionFormRef}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 right-part custom-style">
                            <div>
                                <Survey.SurveyCollapseForm json={this.PERSONAL} css={customCss} onComplete = {this.onCompletePersonalForm} ref={this.personalFormRef}/>
                            </div>
                            <div>
                                <Survey.SurveyCollapseForm json={this.ACADEMIC_HISTORY} css={customCss} onComplete={this.onCompleteAcademicHistoryForm} showCompletedPage={false} ref={this.academicHistoryFormRef}/>
                            </div>
                            <div>
                                <Survey.SurveyCollapseForm json={this.DOCUMENTS} css={customCss} showCompletedPage={false} ref={this.documentsFormRef}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withAdmissionDataCacheLoader(

    compose(
        graphql<AcademicHistoryAddMutationType, AdmissionDataRootProps>(AddAcademicHistoryMutationGql, {
            name: "addAcademicHistoryMutation",
        }),
        graphql<DocumentsAddMutationType, AdmissionDataRootProps>(AddDocumentMutationGql, {
            name: "addDocument",
        }),
        graphql<AddAdmissionPersonalDetailsMutationType, AdmissionDataRootProps>(AddPersonalDataMutationGql, {
            name: "addPersonalDataMutation"
        })

    )

        (AddAdmissionPage) as any
);