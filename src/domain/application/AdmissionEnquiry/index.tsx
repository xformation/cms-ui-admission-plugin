import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {withApollo} from 'react-apollo';

import {GET_ADMISSION_ENQUIRY_LIST} from '../_queries';
import AdmissionEnquiryPage from './EnquiryPage';
import {EnquiryGrid} from './EnquiryGrid';
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement> {
  [data: string]: any;
  user?: any;
}

class AdmissionEnquiry<T = {[data: string]: any}> extends React.Component<
  AdmissionEnquiryProps,
  any
> {
  constructor(props: AdmissionEnquiryProps) {
    super(props);
    this.state = {
      activeTab: 0,
      enquiryList: null,
      branchId: null,
      academicYearId: null,
      departmentId: null,
      user: this.props.user,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.registerSocket = this.registerSocket.bind(this);
  }

  async componentDidMount() {
    await this.registerSocket();
  }

  registerSocket() {
    const socket = wsCmsBackendServiceSingletonClient.getInstance();

    socket.onmessage = (response: any) => {
      let message = JSON.parse(response.data);
      console.log('1. message received from server ::: ', message);
      this.setState({
        branchId: message.selectedBranchId,
        academicYearId: message.selectedAcademicYearId,
        departmentId: message.selectedDepartmentId,
      });
      console.log('1. branchId: ', this.state.branchId);
      console.log('1. ayId: ', this.state.academicYearId);
    };

    socket.onopen = () => {
      console.log(
        '1. Opening websocekt connection on Admission index.tsx. User : ',
        this.state.user
      );
      socket.send(this.state.user.login);
    };

    window.onbeforeunload = () => {
      console.log('1. Closing websocekt connection on Admission index.tsx');
    };
  }

  async toggleTab(tabNo: any, eqs: any) {
    this.setState({
      enquiryList: null,
      activeTab: tabNo,
    });

    if (tabNo === 1 || tabNo === 2 || tabNo === 3 || tabNo === 4 || tabNo === 5) {
      const {data} = await this.props.client.query({
        query: GET_ADMISSION_ENQUIRY_LIST,
        variables: {
          branchId: this.state.branchId,
          academicYearId: this.state.academicYearId,
          enquiryStatus: eqs,
        },
        fetchPolicy: 'no-cache',
      });

      this.setState({
        enquiryList: data,
      });
    }
    this.setState({
      activeTab: tabNo,
    });
  }

  render() {
    const {activeTab, enquiryList, user} = this.state;
    return (
      <section className="tab-container row vertical-tab-container m-r-1">
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(0, '');
              }}
            >
              New Enquiry
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(1, 'RECEIVED');
                console.log('check for re-render:', enquiryList);
              }}
            >
              Received
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(2, 'FOLLOWUP');
              }}
            >
              Follow Up
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(3, 'DECLINED');
              }}
            >
              Declined
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(4, 'CONVERTED_TO_ADMISSION');
              }}
            >
              Admission Granted
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`vertical-nav-link ${activeTab === 5 ? 'side-active' : ''}`}
              onClick={() => {
                this.toggleTab(5, null);
              }}
            >
              Total Enquiry
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="col-sm-10 border-left p-t-1">
          <TabPane tabId={0}>
            {user !== null && (
              <AdmissionEnquiryPage
                user={user}
                operationType={'ADD'}
              ></AdmissionEnquiryPage>
            )}
          </TabPane>
          <TabPane tabId={1}>
            {user !== null && enquiryList !== null && (
              <EnquiryGrid
                user={user}
                type="Total Received"
                totalRecords={enquiryList.getAdmissionEnquiryList.length}
                data={enquiryList.getAdmissionEnquiryList}
              ></EnquiryGrid>
            )}
          </TabPane>
          <TabPane tabId={2}>
            {user !== null && enquiryList !== null && (
              <EnquiryGrid
                user={user}
                type="Total Follow Up"
                totalRecords={enquiryList.getAdmissionEnquiryList.length}
                data={enquiryList.getAdmissionEnquiryList}
              ></EnquiryGrid>
            )}
          </TabPane>
          <TabPane tabId={3}>
            {user !== null && enquiryList !== null && (
              <EnquiryGrid
                user={user}
                type="Total Declined"
                totalRecords={enquiryList.getAdmissionEnquiryList.length}
                data={enquiryList.getAdmissionEnquiryList}
              ></EnquiryGrid>
            )}
          </TabPane>
          <TabPane tabId={4}>
            {user !== null && enquiryList !== null && (
              <EnquiryGrid
                user={user}
                type="Total Admission Granted"
                totalRecords={enquiryList.getAdmissionEnquiryList.length}
                data={enquiryList.getAdmissionEnquiryList}
              ></EnquiryGrid>
            )}
          </TabPane>
          <TabPane tabId={5}>
            {user !== null && enquiryList !== null && (
              <EnquiryGrid
                user={user}
                type="Total Enquiries"
                totalRecords={enquiryList.getAdmissionEnquiryList.length}
                data={enquiryList.getAdmissionEnquiryList}
              ></EnquiryGrid>
            )}
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default withApollo(AdmissionEnquiry);
