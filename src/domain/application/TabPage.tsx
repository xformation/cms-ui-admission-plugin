import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import AdmissionEnquiry from './AdmissionEnquiry';
import AdmissionApplication from './AdmissionApplication';
import { FaUserGraduate } from 'react-icons/fa';
import {config} from '../../config';

export default class TabPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 0,
      user: null,
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tabNo: any) {
    this.setState({
      activeTab: tabNo,
    });
  }

  async componentDidMount(){
    try{
      const response = await fetch(config.LOGGED_IN_USER_URL);
      if (!response.ok) {
        console.log("Response error : ",response.statusText);
        return;
      }
      const json = await response.json();
      this.setState({ user: json });
    }catch(error){
      console.log("Fetch user error: ",error);
    }

    console.log(" USER -- ",this.state.user); 
  }

  render() {
    const {activeTab, user} = this.state;
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
          
        </Nav>
        <TabContent activeTab={activeTab} className="border-right">
          <TabPane tabId={0}>
            {
              user !== null && (
                <AdmissionEnquiry user={user}/>
              )
            }
            
          </TabPane>
          <TabPane tabId={1}>
            {
              user !== null && (
                <AdmissionApplication user={user}/>
              )
            }
           
          </TabPane>
          
        </TabContent>
      </section>
    );
  }
}
