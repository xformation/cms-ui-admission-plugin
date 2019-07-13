import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as Survey from "xform-react";
import "xform-react/xform.min.css";

import * as AddStudentMutationGql from './AddStudentMutation.graphql'
import * as AddAdmissionMutationGql from './AddAdmissionMutation.graphql';
import * as AddCompetitiveExamMutationGql from './AddCompetitiveExamMutation.graphql';
import * as AddDocumentMutationGql from './AddDocumentMutation.graphql';
import * as AddAcademicHistoryMutationGql from './AddAcademicHistoryMutation.graphql';
import PersonalData from './PersonalData';
import AcademicHistory from './AcademicHistory';
import Document from './Document';
// import { AdmissionServices } from './_services';
import {
    LoadAdmissionDataCacheType,
    AddStudentMutation,
    AcademicHistoryAddMutationType,
    CompetitiveAddMutationType,
    AddAdmissionMutation,
    DocumentsAddMutationType,
    AddAcademicHistoryInput,
    AddCompetitiveExamInput,
    AddDocumentsInput,
    AddAdmissionInput,
    AddStudentInput,
    AddStudentMutationVariables,
    StudentData,
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
    addStudentMutation: MutationFunc<AddStudentMutation>;
    addAcademicHistoryMutation: MutationFunc<AcademicHistoryAddMutationType>;
    addCompetitiveExam: MutationFunc<CompetitiveAddMutationType>;
    addDocument: MutationFunc<DocumentsAddMutationType>;
    addAdmissionMutation: MutationFunc<AddAdmissionMutation>;
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

const leftCss = {
    root: "form-container",
    header: "form-header",
    footer: "panel-footer card-footer text-right",
    body: "form-body",
    question: {
        title: "gf-form-label width-8 m-0",
        mainRoot: "gf-form",
    },
    text: "gf-form-input max-width-22",
    dropdown:{
        control: "gf-form-input max-width-22",
    },
    navigation: {
        complete: "btn bs"
    },
    error: {
        root: "error"
    }
};

const rightCss = {
    root: "form-container",
    header: "form-header",
    footer: "panel-footer card-footer text-right",
    body: "form-body",
    question: {
        title: "form-control-label",
        mainRoot: "form-control-container sv_qstn"
    },
    text: "input-form-control",
    dropdown:{
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
    constructor(props: AddAdmissionPageProps) {
        super(props);
        this.state = {
            admissionData: {
                // college: {
                //     id: 1801 
                // },
                // academicYear: {
                //     id: 1701  
                // },
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
                name: 'studentContactNumber',
                title: 'Student Contact Number',
                requiredErrorText: 'Please enter Student Contact Number',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'alternateContactNumber',
                title: 'Alternate Contact Number',
                requiredErrorText: 'Please enter Alternate Contact Number',
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: "text",
                name: 'studentEmailAddress',
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
                name: 'testName',
                title: 'Exam Name',
                requiredErrorText: "Please enter Exam Name",
                isRequired: true,
                startWithNewLine: false,
            },
            {
                type: 'text',
                name: 'testScore',
                title: 'Score',
                requiredErrorText: "Please enter Score",
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

    ADMISSION_DETAILS = {
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
                    choices: []
            },
            {
                    type: 'dropdown',
                    name: 'department',
                    title: 'Department',
                    requiredErrorText: 'Please enter Department',
                    isRequired: true,
                    startWithNewLine: true,
                    choices: []
            },
            {
                    type: 'dropdown',
                    name: 'batch',
                    title: 'Year',
                    requiredErrorText: 'Please enter Year',
                    isRequired: true,
                    startWithNewLine: true,
                    choices: []
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
                    choices: []
            },
            {
                    type: 'dropdown',
                    name: 'course',
                    title: 'Course',
                    requiredErrorText: 'Please enter Course',
                    isRequired: true,
                    startWithNewLine: true,
                    choices: []
            },
        ]
    };

    createDepartments(departments: any, selectedBranchId: any) {
        let departmentsOptions = [<option key={0} value="">Select department</option>];
        for (let i = 0; i < departments.length; i++) {
            let brId = "" + departments[i].branch.id;
            if (selectedBranchId == brId) {
                departmentsOptions.push(
                    <option key={departments[i].id} value={departments[i].id}>{departments[i].name}</option>
                );
            }
        }
        return departmentsOptions;
    }

    createBranches(branches: any) {
        let branchesOptions = [<option key={0} value="">Select Branch</option>];
        for (let i = 0; i < branches.length; i++) {
            branchesOptions.push(
                <option key={branches[i].id} value={branches[i].id}>{branches[i].branchName}</option>
            );
        }
        return branchesOptions;
    }

    createBatches(batches: any, selectedDepartmentId: any) {
        let batchesOptions = [<option key={0} value="">Select Year</option>];
        for (let i = 0; i < batches.length; i++) {
            let dptId = "" + batches[i].department.id;
            if (dptId == selectedDepartmentId) {
                batchesOptions.push(
                    <option key={batches[i].id} value={batches[i].id}>{batches[i].batch}</option>
                );
            }
        }
        return batchesOptions;
    }

    createStates(states: any) {
        let statesOptions = [<option key={0} value="">Select State</option>];
        for (let i = 0; i < states.length; i++) {
            statesOptions.push(
                <option key={states[i].id} value={states[i].id}>{states[i].branchName}</option>
            );
        }
        return statesOptions;
    }

    createCities(cities: any, selectedStateId: any) {
        let citiesOptions = [<option key={0} value="">Select City</option>];
        for (let i = 0; i < cities.length; i++) {
            let ctId = "" + cities[i].state.id;
            if (selectedStateId == ctId) {
                citiesOptions.push(
                    <option key={cities[i].id} value={cities[i].id}>{cities[i].cityName}</option>
                );
            }
        }
        return citiesOptions;
    }

    createCourseOptions(courses: any) {
        let coursesOptions = [<option key={""} value="">Select Course</option>];
        for (let i = 0; i < courses.length; i++) {
            let course = courses[i];
            coursesOptions.push(
                <option key={courses[i].description} value={courses[i].description}>{courses[i].description}</option>
            );
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

    onChange = (e: any) => {
        const { name, value } = e.nativeEvent.target;
        const { admissionData } = this.state;
        if (name === "branch") {
            this.setState({
                admissionData: {
                    ...admissionData,
                    branch: {
                        id: value
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
                }
            });
        } else if (name === "department") {
            this.setState({
                admissionData: {
                    ...admissionData,
                    department: {
                        id: value
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
                }
            });
        } else if (name === "batch") {
            this.setState({
                admissionData: {
                    ...admissionData,
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
                }
            });
        } else if (name === "state") {
            this.setState({
                admissionData: {
                    ...admissionData,
                    state: {
                        id: ""
                    },
                    city: {
                        id: ""
                    },
                    course: {
                        id: ""
                    }
                }
            });
        } else if (name === "city") {
            this.setState({
                admissionData: {
                    ...admissionData,
                    city: {
                        id: ""
                    },
                    course: {
                        id: ""
                    }
                }
            });
        } else if (name === "course") {
            this.setState({
                admissionData: {
                    ...admissionData,
                    course: {
                        id: ""
                    }
                }
            });
        } else {
            this.setState({
                admissionData: {
                    ...admissionData,
                    [name]: value
                }
            });
        }
    }

    saveStudent = (e: any) => {
        this.setState({
            submitted: true
        });
        const { addStudentMutation } = this.props;
        const { admissionData } = this.state;
        e.preventDefault();
        let dplStudentData = {
            ...admissionData,
            uploadPhoto: admissionData.uploadPhoto,
            fileName: admissionData.fileName
        };

        let btn = e.target.querySelector("button[type='submit']");
        btn.setAttribute("disabled", true);
        let dataSavedMessage: any = document.querySelector(".data-saved-message");
        dataSavedMessage.style.display = "none";
        return addStudentMutation({
            variables: { input: dplStudentData },
        }).then((data: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
        }).catch((error: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
            console.log('there was an error sending the update mutation', error);
            return Promise.reject(`Could not save student: ${error}`);
        });
    }


    saveAcademicHistory = (e: any) => {
        this.setState({
            submitted: true
        });
        const { addAcademicHistoryMutation } = this.props;
        const { admissionData } = this.state;
        e.preventDefault();
        let dplAcademicHistoryData = {
            ...admissionData
        };

        let btn = e.target.querySelector("button[type='submit']");
        btn.setAttribute("disabled", true);
        let dataSavedMessage: any = document.querySelector(".data-saved-message");
        dataSavedMessage.style.display = "none";
        return addAcademicHistoryMutation({
            variables: { input: dplAcademicHistoryData },
        }).then((data: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
        }).catch((error: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
            console.log('there was an error sending the update mutation', error);
            return Promise.reject(`Could not save student: ${error}`);
        });
    }

    saveCompetiveExam = (e: any) => {
        this.setState({
            submitted: true
        });
        const { addCompetitiveExam } = this.props;
        const { admissionData } = this.state;
        e.preventDefault();
        let dplCompetitiveExamData = {
            ...admissionData
        };

        let btn = e.target.querySelector("button[type='submit']");
        btn.setAttribute("disabled", true);
        let dataSavedMessage: any = document.querySelector(".data-saved-message");
        dataSavedMessage.style.display = "none";
        return addCompetitiveExam({
            variables: { input: dplCompetitiveExamData },
        }).then((data: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
        }).catch((error: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
            console.log('there was an error sending the update mutation', error);
            return Promise.reject(`Could not save student: ${error}`);
        });
    }

    saveDocuments = (e: any) => {
        this.setState({
            submitted: true
        });
        const { addDocument } = this.props;
        const { admissionData } = this.state;
        e.preventDefault();
        let dplDocumentData = {
            ...admissionData
        };

        let btn = e.target.querySelector("button[type='submit']");
        btn.setAttribute("disabled", true);
        let dataSavedMessage: any = document.querySelector(".data-saved-message");
        dataSavedMessage.style.display = "none";
        return addDocument({
            variables: { input: dplDocumentData },
        }).then((data: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
        }).catch((error: any) => {
            btn.removeAttribute("disabled");
            dataSavedMessage.style.display = "inline-block";
            console.log('there was an error sending the update mutation', error);
            return Promise.reject(`Could not save student: ${error}`);
        });
    }


    render12() {
        const { data: { createAdmissionDataCache, refetch }, addStudentMutation, addAcademicHistoryMutation, addCompetitiveExam, addDocument } = this.props;
        const { admissionData, submitted } = this.state;
        return (
            <section className="">
                <h3 className="bg-heading p-1 m-b-0">
                    <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
                    Application Form
                </h3>
                <div className="student-profile-container">
                    <form className="gf-form-group" onSubmit={this.saveAcademicHistory}>
                        <div className="row m-0">
                            <div className="col-sm-12 col-xs-12 profile-header m-b-2">
                                <div className="pull-left">Admission</div>
                                <div className="pull-right">
                                    <span className="m-r-2 data-saved-message" style={{ fontSize: "13px", color: "#AA0000", display: "none" }}>Data Saved</span>
                                    <button className="btn bs" type="submit">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="row form-main-container m-0">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 student-photo-container">
                                <div className="row p-1">
                                    <div className="col-md-6 col-lg-12 col-xs-12 col-sm-6 student-photo">
                                        <img className="photo" id="stPhoto" src={admissionData.uploadPhoto}></img>
                                    </div>

                                    <div className="col-sm-6 col-xs-12 col-md-6 col-lg-12">

                                        <input type="file" accept="image/*" id="stImageUpload" onChange={this.getStudentImage} ></input>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Admission No</span>
                                            <input name="admissionNo" onChange={this.onChange} type="text" className="gf-form-input max-width-22" />
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Branch</span>
                                            <select required name="branch" id="branch" onChange={this.onChange} value={admissionData.branch.id} className="gf-form-input max-width-22">
                                                {this.createBranches(this.props.data.createAdmissionDataCache.branches)}
                                            </select>
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Department</span>
                                            <select name="department" id="department" onChange={this.onChange} value={admissionData.department.id} className="gf-form-input max-width-22">
                                                {this.createDepartments(this.props.data.createAdmissionDataCache.departments, admissionData.branch.id)}
                                            </select>
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Year</span>
                                            <select name="batch" id="batch" onChange={this.onChange} value={admissionData.batch.id} className="gf-form-input max-width-22">
                                                {this.createBatches(this.props.data.createAdmissionDataCache.batches, admissionData.department.id)}
                                            </select>
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">State</span>
                                            <select name="state" id="state" onChange={this.onChange} value={admissionData.state.id} className="gf-form-input max-width-22">
                                                {this.createStates(this.props.data.createAdmissionDataCache.states)}
                                            </select>
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">City</span>
                                            <select name="city" id="city" onChange={this.onChange} value={admissionData.city.id} className="gf-form-input max-width-22">
                                                {this.createCities(this.props.data.createAdmissionDataCache.cities, admissionData.state.id)}
                                            </select>
                                        </div>

                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Course</span>
                                            <select name="course" id="course" onChange={this.onChange} value={admissionData.course.id} className="gf-form-input max-width-22">
                                                {this.createCourseOptions(this.props.data.createAdmissionDataCache.courses)}
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 student-profile-form">

                                <div className="collapse-container">
                                    <div className="collapse-header">
                                        <div className="collapse-title">Personal Details</div>
                                        <div className="collapse-icon" onClick={onClickHeader} >
                                            <i className="fa fa-fw fa-plus"></i>
                                            <i className="fa fa-fw fa-minus"></i>
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                    <PersonalData modelData={admissionData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            admissionData: {
                                                ...admissionData,
                                                [name]: value
                                            }
                                        });
                                    }} />
                                </div>
                                <div className="collapse-container">
                                    <div className="collapse-header">
                                        <div className="collapse-title">Academic History</div>
                                        <div className="collapse-icon" onClick={onClickHeader}>
                                            <i className="fa fa-fw fa-plus"></i>
                                            <i className="fa fa-fw fa-minus"></i>
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                    <AcademicHistory modelData={admissionData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            admissionData: {
                                                ...admissionData,
                                                [name]: value
                                            }
                                        });
                                    }} />
                                </div>
                                <div className="collapse-container">
                                    <div className="collapse-header">
                                        <div className="collapse-title">Documents</div>
                                        <div className="collapse-icon" onClick={onClickHeader}>
                                            <i className="fa fa-fw fa-plus"></i>
                                            <i className="fa fa-fw fa-minus"></i>
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                    <Document modelData={admissionData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            admissionData: {
                                                ...admissionData,
                                                [name]: value
                                            }
                                        });
                                    }} />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }

    render() {
        let data = this.createBranches(this.props.data.createAdmissionDataCache.branches);
        console.log("branches", data);
        Survey.Survey.cssType = "bootstrap";
        return (
            <section className="xform-container">
                <div className="student-profile-container">
                    <form className="gf-form-group">
                        <div className="row m-0">
                            <div className="col-sm-12 col-xs-12 profile-header m-b-2">
                                <div className="pull-left">Admin - Add Admission</div>
                                <div className="pull-right">
                                    <span className="m-r-2 data-saved-message" style={{ fontSize: "13px", color: "#AA0000", display: "none" }}>Data Saved</span>
                                    <button className="btn bs" type="submit">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="row form-main-container m-0">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-part">
                                <div className="row p-1">
                                    <div className="col-md-6 col-lg-12 col-xs-12 col-sm-6">
                                        <img className="student-photo" id="stPhoto" />
                                    </div>
                                    <div className="col-sm-6 col-xs-12 col-md-6 col-lg-12">
                                        <input type="file" accept="image/*" id="stImageUpload" onChange={this.getStudentImage} />
                                        <div>
                                            <Survey.Survey json={this.ADMISSION_DETAILS} css={leftCss} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 right-part">
                                <div>
                                    <Survey.SurveyCollapseForm json={this.PERSONAL} css={rightCss} />
                                </div>
                                <div>
                                    <Survey.SurveyCollapseForm json={this.ACADEMIC_HISTORY} css={rightCss} />
                                </div>
                                <div>
                                    <Survey.SurveyCollapseForm json={this.DOCUMENTS} css={leftCss} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

// export default withRouter(
//     graphql<AddStudentMutation, AddStudentPageOwnProps>(AddStudentMutationGql)(
//         AddStudentPage
//     )
// );

export default withAdmissionDataCacheLoader(

    compose(

        graphql<AddStudentMutation, AdmissionDataRootProps>(AddStudentMutationGql, {
            name: "addStudentMutation",
        }),
        graphql<AcademicHistoryAddMutationType, AdmissionDataRootProps>(AddAcademicHistoryMutationGql, {
            name: "addAcademicHistoryMutation",
        }),
        graphql<CompetitiveAddMutationType, AdmissionDataRootProps>(AddCompetitiveExamMutationGql, {
            name: "addCompetitiveExam",
        }),
        graphql<DocumentsAddMutationType, AdmissionDataRootProps>(AddDocumentMutationGql, {
            name: "addDocument",
        }),


    )

        (AddAdmissionPage) as any
);