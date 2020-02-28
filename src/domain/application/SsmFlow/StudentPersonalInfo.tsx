import * as React from 'react';
import { withApollo } from 'react-apollo';
import PersonalData from './PersonalData';

class StudentPersonalInfo extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            studentData: {
                batch: {
                    id: ""
                },
                section: {
                    id: ""
                },
                studentType: {
                    id: ""
                },
            },
            batches: [],
            sections: [],
            studentTypes: [],
            submitted: false,
            uploadPhoto: null,
            fileName: "",
            
        };
        this.createBatches = this.createBatches.bind(this);
        this.createSections = this.createSections.bind(this);
        this.createStudentTypeOptions = this.createStudentTypeOptions.bind(this);
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
    createSections(sections: any, selectedBatchId: any) {
        let sectionsOptions = [<option key={0} value="">Select Section</option>];
        for (let i = 0; i < sections.length; i++) {
            let id = sections[i].id;
            let sbthId = ""+sections[i].batch.id;
            if (sbthId == selectedBatchId) {
                sectionsOptions.push(
                <option key={id} value={id}>{sections[i].section}</option>
                );
            }
        }
        return sectionsOptions;
    }

    createStudentTypeOptions(studentTypes: any) {
        let studentTypesOptions = [<option key={""} value="">Select Student Type</option>];
        for (let i = 0; i < studentTypes.length; i++) {
            let studentType = studentTypes[i];
            studentTypesOptions.push(
                <option key={studentTypes[i].description} value={studentTypes[i].description}>{studentTypes[i].description}</option>
            );
        }
        return studentTypesOptions;
    }

    // onFormSubmit = (e: any) => {
    //     this.setState({
    //         submitted: true
    //     });
    //     const { mutate } = this.props;
    //     const { studentData } = this.state;
    //     e.preventDefault();
    //     if (studentData.department.id && studentData.branch.id && studentData.batch.id && studentData.studentType && studentData.section.id) {
            
    //         let dplStudentData = {
    //             ...studentData,
    //             batchId: studentData.batch.id,
    //             sectionId: studentData.section.id,
    //             branchId: studentData.branch.id,
    //             departmentId: studentData.department.id,
    //             uploadPhoto: studentData.uploadPhoto,
    //             studentType: studentData.studentType.id,
    //             fileName: studentData.fileName
    //         };
    //         delete dplStudentData.batch;
    //         delete dplStudentData.section;
    //         delete dplStudentData.branch;
    //         delete dplStudentData.department;
    //         delete dplStudentData.__typename;
    //         let btn = e.target.querySelector("button[type='submit']");
    //         btn.setAttribute("disabled", true);
    //         let dataSavedMessage: any = document.querySelector(".data-saved-message");
    //         dataSavedMessage.style.display = "none";
    //         return mutate({
    //             variables: { input: dplStudentData },
    //         }).then((data: any) => {
    //             btn.removeAttribute("disabled");
    //             dataSavedMessage.style.display = "inline-block";
    //             location.href = `${location.origin}/plugins/ems-student/page/students`;
    //         }).catch((error: any) => {
    //             btn.removeAttribute("disabled");
    //             dataSavedMessage.style.display = "inline-block";
    //             console.log('there was an error sending the update mutation', error);
    //             return Promise.reject(`Could not save student: ${error}`);
    //         });
    //     }
    // }
    
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
                    },
                    section: {
                        id: ""
                    },
                    studentType: {
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
                    },
                    section: {
                        id: ""
                    },
                    studentType: {
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
                    },
                    section: {
                        id: ""
                    },
                    studentType: {
                        id: ""
                    }
                }
            });
        } else if (name === "section") {
            this.setState({
                studentData: {
                    ...studentData,
                    section: {
                        id: value
                    },
                    studentType: {
                        id: ""
                    }
                }
            });
        } else if (name === "studentType") {
            this.setState({
                studentData: {
                    ...studentData,
                    studentType: {
                        id: value
                    }
                }
            });
        }  else {
            this.setState({
                studentData: {
                    ...studentData,
                    [name]: value
                }
            });
        }
    }
    render() {
        const { studentData, departments, batches, branches, sections, submitted } = this.state;
        return (
            <section className="customCss">
                {/* <h3 className="bg-heading p-1 m-b-0">
                    <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
                    Student Personal Profile
                </h3> */}
                <div className="student-profile-container">
                    {/* <form className="gf-form-group" onSubmit={this.onFormSubmit}> */}
                    <form className="gf-form-group" >
                        

                        {/* <div className="row form-main-container m-0">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 student-profile-form">
                                
                            </div>
                        </div> */}

                        <div className="row form-main-container m-0">
                            {/* <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 student-photo-container">
                                <div className="row p-1">
                                    <div className="col-md-6 col-lg-12 col-xs-12 col-sm-6 student-photo">
                                        <img className="photo" id="stPhoto" src={studentData.uploadPhoto}></img>
                                    </div>
                                    
                                    <div className="col-sm-6 col-xs-12 col-md-6 col-lg-12">
                                        <input type="file"  accept="image/*" id="stImageUpload" onChange={this.getStudentImage} ></input>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 student-profile-form">
                                    <div className="row m-t-1">
                                {/* <div className="col-sm-12 col-xs-12 profile-header m-b-2"> */}
                                    <div className="col-sm-12 col-xs-12">
                                        {/* <div className="pull-left">Student Profile</div> */}
                                        <div className="pull-left">
                                            <div className="gf-form p-1">
                                                <span className="gf-form-label width-8">Year</span>
                                                <select name="batch" onChange={this.onChange} value={studentData.batch.id} className="gf-form-input max-width-22">
                                                    {/* {this.createBatches(this.props.data.createStudentFilterDataCache.batches, studentData.department.id)} */}
                                                </select>
                                            </div>
                                            {
                                                submitted && !studentData.batch.id &&
                                                <div>
                                                    Student batch needed.
                                                </div>
                                            }
                                        </div>
                                        <div className="pull-left">
                                            <div className="gf-form p-1">
                                                <span className="gf-form-label width-8">Section</span>
                                                <select name="section" onChange={this.onChange} value={studentData.section.id} className="gf-form-input max-width-22">
                                                    {/* {this.createSections(this.props.data.createStudentFilterDataCache.sections, studentData.batch.id)} */}
                                                </select>
                                            </div>
                                            {
                                                submitted && !studentData.section.id &&
                                                <div>
                                                    Student section needed.
                                                </div>
                                            }
                                        </div>
                                        
                                        {/* <div className="pull-right">
                                            <span className="m-r-2 data-saved-message" style={{ fontSize: "13px", color: "#AA0000", display: "none" }}>Data Saved</span>
                                            <button className="btn bs" type="submit">Save</button>
                                        </div> */}

                                    </div>
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
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}


export default withApollo(StudentPersonalInfo);