import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { withApollo } from 'react-apollo';
// import  {AdmissionGrid} from './AdmissionGrid'
import AdmissionPage from './AdmissionPage';

export interface AdmissionApplicationProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    user?: any,
}

class AdmissionApplication extends React.Component<AdmissionApplicationProps, any> {
    constructor(props: AdmissionApplicationProps) {
        super(props);
        this.state = {
            activeTab: 0,
            admissionList: null,
            user: this.props.user,
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    async toggleTab(tabNo: any) {
        // let bid = 34; //localStorage.getItem("branchId");
        // let aid = 56; //localStorage.getItem("academicYearId");
        let aps = null; 
        if(tabNo === 1){
            aps = 'RECEIVED';
        }else if(tabNo === 2){
            aps = 'INPROCESS';
        }else if(tabNo === 3){
            aps = 'DECLINED';
        }else if(tabNo === 4){
            aps = 'CONVERTED_TO_ADMISSION';
        }
        this.setState({
            enquiryList: null,
        });
        if(tabNo === 1 || tabNo === 2 || tabNo === 3 || tabNo === 4){
            // const { data } = await this.props.client.query({
            //     query: "",
            //     variables: { 
            //         branchId: bid,
            //         academicYearId: aid,
            //         enquiryStatus: aps
            //      },
            //      fetchPolicy: 'no-cache'
            // })
            // this.setState({
            //     enquiryList: data,
            // });
        }
        
        this.setState({
            activeTab: tabNo
        });
    }

    render() {
        const { activeTab, admissionList, user } = this.state;
        return (
            <section className="tab-container row vertical-tab-container">
                <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0); }} >
                            New Admission
                        </NavLink>
                    </NavItem>
                    {/* <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1); }} >
                            Received
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2); }} >
                            Inprogress
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3); }} >
                            Declined
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 4 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(4); }} >
                            Accepted
                        </NavLink>
                    </NavItem> */}
                    
                </Nav>
                <TabContent activeTab={activeTab} className="col-sm-9 border-left p-t-1">
                    <TabPane tabId={0}>
                        <AdmissionPage user={user} operationType={"ADD"} ></AdmissionPage>
                    </TabPane>
                    
                    
                </TabContent>
            </section>
        );
    }
}

export default withApollo(AdmissionApplication)