import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import {withRouter, RouteComponentProps, Link} from 'react-router-dom';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import AdmissionEnquiry from './AdmissionEnquiry';
import AdmissionApplication from './AdmissionApplication';
import Admission from './Admission';
import { FaUserGraduate } from 'react-icons/fa';

export default class TabPage extends React.Component<any, any> {
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
    const {activeTab} = this.state;
    return (
      <section className="tab-container">
        <div className="tab-flex p-1">
          <h5><FaUserGraduate className="m-1 fa-2x" />Admission</h5>
        </div>
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 bottom-box-shadow">
          <NavItem className="cursor-pointer">
            <NavLink className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => { this.toggleTab(0); }} >
              Admission Enquiry
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => { this.toggleTab(1); }} >
              Admission Applications
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink className={`${activeTab === 2 ? 'active' : ''}`} onClick={() => { this.toggleTab(2); }} >
              Admission
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="border-right">
          <TabPane tabId={0}>
            <AdmissionEnquiry />
          </TabPane>
          <TabPane tabId={1}>
            <AdmissionApplication />
          </TabPane>
          <TabPane tabId={2}>
            <Admission />
          </TabPane>
        </TabContent>
      </section>
    );
  }
}
