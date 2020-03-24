import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import AdmissionEnquiry from './AdmissionEnquiry';
import AdmissionApplication from './AdmissionApplication';
import { FaUserGraduate } from 'react-icons/fa';
import {config} from '../../config';
import {Utils} from '../application/_utilites/Utils';
import { admissionService } from './_services/admission.service';

export default class TabPage extends React.Component<any, any> {
  LOGGED_IN_USER = new URLSearchParams(location.search).get('signedInUser');
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 0,
      permissions: [],
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.getUserPermissions = this.getUserPermissions.bind(this);
  }

  toggleTab(tabNo: any) {
    this.setState({
      activeTab: tabNo,
    });
  }

  async componentDidMount(){
    await this.getUserPermissions();
    console.log("Permissions : ",this.state.permissions);
  }

  async getUserPermissions(){
    if(this.LOGGED_IN_USER !== 'admin' && this.LOGGED_IN_USER !== null) {
      const URL = config.CMS_GLOBAL_CONFIG_URL + '?userName=' + this.LOGGED_IN_USER;
      await fetch(URL).then(
        response => response.json()
      ).then(res =>{
          const perm = res.loginResponse.authz.permissions;
          console.log("SecurityServie Resp Perm ::------->>>>>> ",perm);
          const arr: any = [];
          perm.map((item: any) =>{
            arr[item] = item;
          });
          this.setState({
            permissions: arr,
          });
      })
    } 
  }

  render() {
    const {activeTab, permissions} = this.state;
    return (
      <section className="tab-container">
        <div className="tab-flex p-1">
          <h5><FaUserGraduate className="m-1 fa-2x" />Admission</h5>
        </div>
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 bottom-box-shadow">
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Enquiry"] !== null && permissions["Admission Enquiry"] !== undefined ?
              <NavItem className="cursor-pointer">
                <NavLink className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => { this.toggleTab(0); }} >
                  Admission Enquiry
                </NavLink>
              </NavItem>
              // console.log("permissions[Admission Enquiry] -- ",permissions["Admission Enquiry"] )
            : this.LOGGED_IN_USER === 'admin' ?
              <NavItem className="cursor-pointer">
                <NavLink className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => { this.toggleTab(0); }} >
                  Admission Enquiry
                </NavLink>
              </NavItem>
            : null
          }
          
          
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Applications"] !== null && permissions["Admission Applications"] !== undefined ?
              <NavItem className="cursor-pointer">
                <NavLink className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => { this.toggleTab(1); }} >
                  Admission Applications
                </NavLink>
              </NavItem>
              // console.log("permissions[Admission Applications] ::: -- ",permissions["Admission Applications"])
            : this.LOGGED_IN_USER === 'admin' ?
              <NavItem className="cursor-pointer">
                <NavLink className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => { this.toggleTab(1); }} >
                  Admission Applications
                </NavLink>
              </NavItem>
              // console.log("ADMIN USER ....")
            : null
          }

        </Nav>
        <TabContent activeTab={activeTab} className="border-right">
          
          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Enquiry"] !== null && permissions["Admission Enquiry"] !== undefined ?
              <TabPane tabId={0}>
                <AdmissionEnquiry permissions={permissions}/>
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
              <TabPane tabId={0}>
                <AdmissionEnquiry permissions={permissions}/>
              </TabPane>
            : null
          }

          {
            this.LOGGED_IN_USER !== 'admin' && permissions["Admission Applications"] !== null && permissions["Admission Applications"] !== undefined ?
              <TabPane tabId={1}>
                <AdmissionApplication permissions={permissions}/>
              </TabPane>
            : this.LOGGED_IN_USER === 'admin' ?
              <TabPane tabId={1}>
                <AdmissionApplication permissions={permissions}/>
              </TabPane>
            : null
          }
          
        </TabContent>
      </section>
    );
  }
}
