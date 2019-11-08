import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import AddAdmissionPage from '../addadmission/AddAdmissionPage';
import AdmissionApplicationPage from '../application/AdmissionApplicationPage';
import AdmissionEnquiryPage from '../enquiry/AdmissionEnquiryPage';
import { FaUserGraduate } from 'react-icons/fa';
import './tabs.css';


export default class AdmissionsTab extends React.Component<any, any> {
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
      <section className="tab-container">
        <div className="tab-flex p-1">
          {/* <img src="../../img/students.png" alt="" /> */}
          <h5><FaUserGraduate className="m-1 fa-2x" /></h5>
          <h5 className="p-1">Admission</h5>
        </div>
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 boxShadow">
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 0 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(0);
              }}
            >
              Admission
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 1 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(1);
              }}
            >
              Admission Application
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 2 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(2);
              }}
            >
              Admission Enquiry
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="border-right">
          <TabPane tabId={0}>
            <AddAdmissionPage />
          </TabPane>
          <TabPane tabId={1}>
          <AdmissionApplicationPage />
          </TabPane>
          <TabPane tabId={2}>
            <AdmissionEnquiryPage />
          </TabPane>
        </TabContent>
      </section>
    );
  }
}
