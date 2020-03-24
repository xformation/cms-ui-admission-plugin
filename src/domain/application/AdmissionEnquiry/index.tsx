import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {withApollo} from 'react-apollo';

import {GET_ADMISSION_ENQUIRY_LIST} from '../_queries';
import AdmissionEnquiryPage from './EnquiryPage';
import EnquiryGrid from './EnquiryGrid';
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement> {
  [data: string]: any;
  user?: any;
  permissions?: any;
}

class AdmissionEnquiry<T = {[data: string]: any}> extends React.Component< AdmissionEnquiryProps, any > {
  LOGGED_IN_USER = new URLSearchParams(location.search).get('signedInUser');
  constructor(props: AdmissionEnquiryProps) {
    super(props);
    this.state = {
      permissions: this.props.permissions,
      activeTab: -1,
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
        new URLSearchParams(location.search).get("signedInUser")
      );
      socket.send(new URLSearchParams(location.search).get("signedInUser"));
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
    const {activeTab, enquiryList, permissions} = this.state;
    return (
      <section className="tab-container row vertical-tab-container m-r-1">
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
          
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["New Enquiry"] === "New Enquiry" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0, ''); }} >
                New Enquiry
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0, ''); }} >
                New Enquiry
              </NavLink>
            </NavItem>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Received"] === "Received" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1, 'RECEIVED'); console.log('check for re-render:', enquiryList); }} >
                Received
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1, 'RECEIVED'); console.log('check for re-render:', enquiryList); }} >
                Received
              </NavLink>
            </NavItem>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Follow Up"] === "Follow Up" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2, 'FOLLOWUP'); }} >
                Follow Up
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2, 'FOLLOWUP'); }} >
                Follow Up
              </NavLink>
            </NavItem>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Declined"] === "Declined" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3, 'DECLINED'); }} >
                Declined
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3, 'DECLINED'); }} >
                Declined
              </NavLink>
            </NavItem>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Granted"] === "Admission Granted" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(4, 'CONVERTED_TO_ADMISSION'); }} >
                Admission Granted
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(4, 'CONVERTED_TO_ADMISSION'); }} >
                Admission Granted
              </NavLink>
            </NavItem>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Total Enquiry"] === "Total Enquiry" ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 5 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(5, null); }} >
                Total Enquiry
              </NavLink>
            </NavItem>
            : this.LOGGED_IN_USER === 'admin' ?
            <NavItem className="cursor-pointer">
              <NavLink className={`vertical-nav-link ${activeTab === 5 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(5, null); }} >
                Total Enquiry
              </NavLink>
            </NavItem>
            : null
          }

        </Nav>

        <TabContent activeTab={activeTab} className="col-sm-10 border-left p-t-1">
          
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["New Enquiry"] === "New Enquiry" ?
            <TabPane tabId={0}>
            {
              activeTab === 0 ?
              <AdmissionEnquiryPage operationType={'ADD'} ></AdmissionEnquiryPage>
              : null
            }
            </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
            <TabPane tabId={0}>
            {
              activeTab === 0 ?
              <AdmissionEnquiryPage operationType={'ADD'} ></AdmissionEnquiryPage>
              : null
            }
            </TabPane>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Received"] === "Received" ?
              <TabPane tabId={1}>
                {
                  activeTab === 1 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Received" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  )) 
                  : null
                }
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
              <TabPane tabId={1}>
                {
                  activeTab === 1 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Received" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  )) 
                  : null
                }
              </TabPane>
            : null
          }


          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Follow Up"] === "Follow Up" ?
            <TabPane tabId={2}>
              {
                activeTab === 2 ?
                (enquiryList !== null && (
                    <EnquiryGrid type="Total Follow Up" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                ))
                : null
              }
            </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
            <TabPane tabId={2}>
              {
                activeTab === 2 ?
                (enquiryList !== null && (
                    <EnquiryGrid type="Total Follow Up" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                ))
                : null
              }
            </TabPane>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Declined"] === "Declined" ?
              <TabPane tabId={3}>
                {
                  activeTab === 3 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Declined" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  ))
                : null
                }
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
                <TabPane tabId={3}>
                  {
                    activeTab === 3 ?
                    (enquiryList !== null && (
                      <EnquiryGrid type="Total Declined" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                    ))
                    : null
                  }
                </TabPane>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Granted"] === "Admission Granted" ?
              <TabPane tabId={4}>
                {
                  activeTab === 4 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Admission Granted" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  ))
                  : null
                }
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
                <TabPane tabId={4}>
                  {
                    activeTab === 4 ?
                    (enquiryList !== null && (
                      <EnquiryGrid type="Total Admission Granted" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                    ))
                    : null
                  }
                </TabPane>
            : null
          }

          
          
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Total Enquiry"] === "Total Enquiry" ?
              <TabPane tabId={5}>
                {
                  activeTab === 5 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Enquiries" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  )) 
                  :null
                }
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
              <TabPane tabId={5}>
                {
                  activeTab === 5 ?
                  (enquiryList !== null && (
                    <EnquiryGrid type="Total Enquiries" totalRecords={enquiryList.getAdmissionEnquiryList.length} data={enquiryList.getAdmissionEnquiryList} ></EnquiryGrid>
                  )) 
                  :null
                }
              </TabPane>
            : null
          }

        </TabContent>
      </section>
    );
  }
}

export default withApollo(AdmissionEnquiry);
