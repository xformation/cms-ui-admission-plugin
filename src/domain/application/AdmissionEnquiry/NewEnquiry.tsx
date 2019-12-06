import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

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


class NewAdmissionEnquiryPage extends React.Component<any, AdmissionEnquiryState>{
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
        this.createDepartments = this.createDepartments.bind(this);
        this.createBranches = this.createBranches.bind(this);
        this.createBatches = this.createBatches.bind(this);
        this.createStates = this.createStates.bind(this);
        this.createCities = this.createCities.bind(this);
        this.createCourseOptions = this.createCourseOptions.bind(this);
        
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

    render() {
        return (
            <main>
                <div className="col-sm-12 col-xs-12 profile-header m-b-2">

                </div>
            </main>
        );
    }
}


export default NewAdmissionEnquiryPage;
