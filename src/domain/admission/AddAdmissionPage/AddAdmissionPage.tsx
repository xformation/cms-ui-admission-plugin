import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as AddStudentMutationGql from './AddStudentMutation.graphql';
import PersonalData from './PersonalData';
import AcademicHistory from './AcademicHistory';
import Document from './Document';
import { StudentServices } from './_services';
import {
    LoadStudentFilterDataCacheType,
    AddStudentMutation,
    AcademicHistoryAddMutationType,
    CompetitiveAddMutationType,
    AddAdmissionMutation,
    DocumentsAddMutationType,
    AddStudentInput,
    AddStudentMutationVariables,
    StudentData,
} from '../../types';

// import withLoadingHandler from '../../../components/withLoadingHandler';
import withStudentFilterDataCacheLoader from "./withStudentFilterDataCacheLoader";
// import 'bootstrap/dist/css/bootstrap.min.css';


type AddAdmissionPageProps =  {
    addStudentMutation : MutationFunc<AddStudentMutation>;
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

type EditStudentProfileStates = {
    studentData: any,
    departments: any,
    branches: any,
    batches: any,
    submitted: any,
    uploadPhoto:any,
    fileName: any,
    academicYearId: any
};

class AddAdmissionPage extends React.Component<AddAdmissionPageProps, EditStudentProfileStates>{
    constructor(props: any) {
        super(props);
        this.state = {
            studentData: {
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
            },
            departments: [],
            branches: [],
            batches: [],
            submitted: false,
            uploadPhoto: null,
            fileName: "",
            academicYearId: 1701
        };
        this.createDepartments = this.createDepartments.bind(this);
        this.createBranches = this.createBranches.bind(this);
        this.createBatches = this.createBatches.bind(this);
    }

    createDepartments(departments: any, selectedBranchId: any) {
        let departmentsOptions = [<option key={0} value="">Select department</option>];
        for (let i = 0; i < departments.length; i++) {
        if (selectedBranchId == departments[i].branch.id ) {
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
            let id = batches[i].id;
            let dptId = ""+batches[i].department.id;
            if (dptId == selectedDepartmentId) {
                batchesOptions.push(
                <option key={id} value={id}>{batches[i].batch}</option>
                );
            }
        }
        return batchesOptions;
    }
    

    onFormSubmit = (e: any) => {
        this.setState({
            submitted: true
        });
        const { addStudentMutation } = this.props;
        const { studentData } = this.state;
        e.preventDefault();
        if (studentData.department.id && studentData.branch.id && studentData.batch.id ) {
            
            let dplStudentData = {
                ...studentData,
                batchId: studentData.batch.id,
                branchId: studentData.branch.id,
                departmentId: studentData.department.id,
                uploadPhoto: studentData.uploadPhoto,
                fileName: studentData.fileName
            };
            delete dplStudentData.batch;
            delete dplStudentData.branch;
            delete dplStudentData.department;
            delete dplStudentData.__typename;
            let btn = e.target.querySelector("button[type='submit']");
            btn.setAttribute("disabled", true);
            let dataSavedMessage: any = document.querySelector(".data-saved-message");
            dataSavedMessage.style.display = "none";
            return addStudentMutation({
                variables: { input: dplStudentData },
            }).then((data: any) => {
                btn.removeAttribute("disabled");
                dataSavedMessage.style.display = "inline-block";
                location.href = `${location.origin}/plugins/ems-student/page/students`;
            }).catch((error: any) => {
                btn.removeAttribute("disabled");
                dataSavedMessage.style.display = "inline-block";
                console.log('there was an error sending the update mutation', error);
                return Promise.reject(`Could not save student: ${error}`);
            });
        }
    }
    
    getStudentImage = (e: any) => {
        const { studentData } = this.state;
        studentData.uploadPhoto = URL.createObjectURL(e.target.files[0]);
        var r = new FileReader();
		r.onload = function (e: any){
			studentData.fileName = e.target.result;
            console.log('Image converted to base64 on upload :\n\n' + studentData.fileName);
		};
		r.readAsDataURL(e.target.files[0]);    

        this.setState({
            studentData: studentData
        })     
    }

    onChange = (e: any) => {
        const { name, value } = e.nativeEvent.target;
        const { studentData } = this.state;
        if (name === "branch") {
            this.setState({
                studentData: {
                    ...studentData,
                    branch: {
                        id: value
                    },
                    department: {
                      id: ""
                    },
                    batch: {
                      id: ""
                    }
                }
            });
        }else if (name === "department") {
            this.setState({
                studentData: {
                    ...studentData,
                    department: {
                        id: value
                    },
                    batch: {
                        id: ""
                    }
                }
            });
        } else if (name === "batch") {
            this.setState({
                studentData: {
                    ...studentData,
                    batch: {
                        id: value
                    }
                }
            });
        }   else {
            this.setState({
                studentData: {
                    ...studentData,
                    [name]: value
                }
            });
        }
    }
    render() {
        const {  addStudentMutation } = this.props;
        const { studentData, departments, batches, branches,  submitted } = this.state;
        return (
            <section className="customCss">
                <h3 className="bg-heading p-1 m-b-0">
                    <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
                    Application Form
                </h3>
                <div className="student-profile-container">
                    <form className="gf-form-group" onSubmit={this.onFormSubmit}>
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
                                        <img className="photo" id="stPhoto" src={studentData.uploadPhoto}></img>
                                    </div>
                                    
                                    <div className="col-sm-6 col-xs-12 col-md-6 col-lg-12">
                                        
                                        <input type="file"  accept="image/*" id="stImageUpload" onChange={this.getStudentImage} ></input>
                                        
                                        
                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Admission No</span>
                                            <input name="admissionNo"  onChange={this.onChange} type="text" className="gf-form-input max-width-22" />
                                        </div>
                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Roll No</span>
                                            <input name="rollNo" type="text" className="gf-form-input max-width-22" value={studentData.rollNo} onChange={this.onChange} />
                                        </div>
                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Branch</span>
                                            <select name="branch" onChange={this.onChange} value={studentData.branch.id} className="gf-form-input max-width-22">
                                            </select>
                                        </div>
                                        {
                                            submitted && !studentData.branch.id &&
                                            <div>
                                                Student branch needed.
                                        </div>
                                        }
                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Department</span>
                                            <select name="department" onChange={this.onChange} value={studentData.department.id} className="gf-form-input max-width-22">
                                            </select>
                                        </div>
                                        {
                                            submitted && !studentData.department.id &&
                                            <div>
                                                Student department needed.
                                            </div>
                                        }
                                        <div className="gf-form">
                                            <span className="gf-form-label width-8">Year</span>
                                            <select name="batch" onChange={this.onChange} value={studentData.batch.id} className="gf-form-input max-width-22">
                                            </select>
                                        </div>
                                        {
                                            submitted && !studentData.batch.id &&
                                            <div>
                                                Student batch needed.
                                        </div>
                                        }
                                        
                                        
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 student-profile-form">

                                <div className="collapse-container">
                                    <div className="collapse-header">
                                        <div className="collapse-title">Personal Details</div>
                                        <div className="collapse-icon" onClick={onClickHeader}>
                                            <i className="fa fa-fw fa-plus"></i>
                                            <i className="fa fa-fw fa-minus"></i>
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                    <PersonalData modelData={studentData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            studentData: {
                                                ...studentData,
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
                                    <AcademicHistory modelData={studentData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            studentData: {
                                                ...studentData,
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
                                    <Document modelData={studentData} onChange={(name: any, value: any) => {
                                        this.setState({
                                            studentData: {
                                                ...studentData,
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
}

// export default withRouter(
//     graphql<AddStudentMutation, AddStudentPageOwnProps>(AddStudentMutationGql)(
//         AddStudentPage
//     )
// );

export default withStudentFilterDataCacheLoader( 
  
    compose(
      graphql<AddStudentMutation, AddAdmissionPageProps>(AddStudentMutationGql, {
        name: "addStudentMutation"
      })
      
    )
    (AddAdmissionPage) as any
  );
