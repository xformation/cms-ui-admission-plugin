import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { graphql, MutationFunc } from 'react-apollo';
// import '../../../css/college-settings.css';
// import CollegeInfo  from './college/AddCollegePage/CollegeInfo';
// import {CollegeBranches} from './branch/CollegeBranches';
// import { any } from 'prop-types';
import NewAdmissionEnquiryPage from './NewEnquiry';

export default class AdmissionEnquiry extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tabNo: any) {
        this.setState({
            activeTab: tabNo,
        });
    }

    render() {
        const { activeTab } = this.state;
        return (
            <section className="tab-container row vertical-tab-container">
                <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0); }} >
                            New Enquiry
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1); }} >
                            Total Enquiry
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2); }} >
                            Follow Up
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3); }} >
                            Declined
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(4); }} >
                            Admission Granted
                        </NavLink>
                    </NavItem>
                    
                </Nav>
                <TabContent activeTab={activeTab} className="col-sm-9 border-left p-t-1">
                    <TabPane tabId={0}>
                        <NewAdmissionEnquiryPage></NewAdmissionEnquiryPage>
                    </TabPane>
                    <TabPane tabId={1}>
                        {/* <CollegeBranches /> */}
                    </TabPane>
                    <TabPane tabId={2}>
                        Test
                    </TabPane>
                    <TabPane tabId={3}>
                        Test
                    </TabPane>
                    <TabPane tabId={4}>
                        Test
                    </TabPane>
                    
                </TabContent>
            </section>
        );
    }
}
