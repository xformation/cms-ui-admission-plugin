import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';

import * as AdmissionEnquiryListQueryGql from './SearchAdmissionOnType.graphql';
import { SearchAdmissionOnTypeListType, AdmissionEnquiryCountQueryType } from '../../types';
import widthAdmissionDataloader from './withAdmissionDataloader';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

type AdmissionDataRootProps = RouteComponentProps<{
  branchId: string;
}> & {
  data: QueryProps & AdmissionEnquiryCountQueryType;
};

type AdmissionDataPageProps = AdmissionDataRootProps & {
  mutate: MutationFunc<SearchAdmissionOnTypeListType>
};

type AdmissionDataState = {
  admissionEnquiryData: any
}


// Tabs
class Tabs extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0
    }
  }

  select = (i: any) => {
    let _this = this;
    return function () {
      _this.setState({
        active: i
      });
    }
  }

  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
      }
    });
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className='content'>{item}</div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className="tabsAdmission">
        {/* <div className="tabWrapper"> */}
        {this.renderTabs()}
        {/* </div> */}
        {this.renderContent()}
      </div>
    );
    // );
  }
}

// Tabs

class AdmissionEnquiryPage extends React.Component<AdmissionDataPageProps, AdmissionDataState> {
  constructor(props: any) {
    super(props);
    this.state = {
      admissionEnquiryData: {
        branch: {
          id: 1851 //1001
        },
        mutateResult: [],
        enquiryData: {}
      }

    };
    this.checkAllAdmissions = this.checkAllAdmissions.bind(this);
    this.createAdmissionRows = this.createAdmissionRows.bind(this);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
    this.createNoRecordMessage = this.createNoRecordMessage.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.createDetailsDiv = this.createDetailsDiv.bind(this);
    this.back = this.back.bind(this);
  }

  onClickCheckbox(index: any, e: any) {
    const { id } = e.nativeEvent.target;
    let chkBox: any = document.querySelector("#" + id);
    chkBox.checked = e.nativeEvent.target.checked;
  }

  checkAllAdmissions(e: any) {
    const { admissionEnquiryData } = this.state;
    const mutateResLength = admissionEnquiryData.mutateResult.length;
    let chkAll = e.nativeEvent.target.checked;
    let els = document.querySelectorAll("input[type=checkbox]");

    var empty = [].filter.call(els, function (el: any) {
      if (chkAll) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }

  createNoRecordMessage(objAry: any) {
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      const admissionArray = tempObj.data.searchAdmissionOnType;
      const length = admissionArray.length;
      if (length === 0) {
        retVal.push(
          <h4 className="ptl-06">No Record Found</h4>
        );
      }
    }
    return retVal;
  }

  createAdmissionRows(objAry: any) {
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      const admissionArray = tempObj.data.searchAdmissionOnType;
      const length = admissionArray.length;
      for (let i = 0; i < length; i++) {
        const admissionEnquiry = admissionArray[i];
        retVal.push(
          <tr >
            <td>
              <input onClick={(e: any) => this.onClickCheckbox(i, e)} checked={admissionEnquiry.isChecked} type="checkbox" name="" id={"chk" + admissionEnquiry.id} />
            </td>
            <td>{admissionEnquiry.id}</td>
            <td>{admissionEnquiry.studentName}</td>
            <td>{admissionEnquiry.contactNumber}</td>
            <td>{admissionEnquiry.status}</td>
            <td>{admissionEnquiry.strEnquiryDate}</td>
            <td>

              <button className="btn btn-primary" onClick={e => this.showDetail(admissionEnquiry)}>Details</button></td>

          </tr>
        );
      }
    }

    return retVal;
  }

  showDetail(obj: any) {
    const { admissionEnquiryData } = this.state;
    admissionEnquiryData.enquiryData = obj;
    this.setState({
      admissionEnquiryData: admissionEnquiryData
    });

    let detailDiv: any = document.querySelector("#admissionDetailShow");
    let gridDiv: any = document.querySelector("#admissionGridShow");
    let backDiv: any = document.querySelector("#backDiv");
    detailDiv.setAttribute("class", "col-md-12 ");
    gridDiv.setAttribute("class", "hide");
    backDiv.setAttribute("class", "d-flex fwidth justify-content-between pt-2");
    this.createDetailsDiv(obj);
  }

  back() {
    let detailDiv: any = document.querySelector("#admissionDetailShow");
    let gridDiv: any = document.querySelector("#admissionGridShow");
    detailDiv.setAttribute("class", "hide");
    gridDiv.setAttribute("class", "col-md-12");
    let backDiv: any = document.querySelector("#backDiv");
    backDiv.setAttribute("class", "hide");
  }

  createDetailsDiv(obj: any) {


    return (

      <div className="hide" id="admissionDetailShow">
        <h5 className="bg-heading p-1 m-0">Details</h5>
        <div className="row">
          <div className="col-md-2 buttons-container dont-print mt--12">
            <h5 className="bg-grey head-prime text-uppercase p--512">Enquiry <span className="dark-text">
              {obj.id}</span></h5>
            <div className="btn-group btn-adm m-4">
              <button className="btn btn-primary">Approve</button>
              <button className="btn btn-primary">Followup</button>
              <button className="btn btn-primary">Decline</button>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-primary">Print</button>
              <button className="btn btn-primary" id="btnBack" name="btnBack" onClick={this.back}>Back</button>
            </div>
          </div>
          <div className="col-md-10">
            <Tabs>
              Personal Details
              <span>
                <div className="p-2">
                  <div className="details-container">
                    <div className="row">
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-8">
                          Student Name:
        </span>
                        <span className="">{obj.studentName}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-12">
                          Middle Name:
                        </span>
                        <span >{obj.studentMiddleName}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-10">
                          Last Name: </span>
                        <span >{obj.studentLastName}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-8">
                          Father's Name:
                           </span>
                        <span >{obj.fatherName}</span>
                        )}
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-12">
                          Father's Middle Name:
        </span>
                        <span >{obj.fatherMiddleName}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-10">
                          Father's Last Name
        </span>
                        <span >{obj.fatherLastName}</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-8">
                          Mother's Name:
        </span>
                        <span >{obj.motherName}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-12">
                          Mother's Middle Name:
        </span>
                        <span >{obj.motherMiddleName}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-10">
                          Mother's Last Name
        </span>
                        <span >{obj.motherLastName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="details-container">
                    <div className="row">
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-8">
                          Date Of Birth
          </span>
                        <span>{obj.dateOfBirth}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-12">
                          Sex
          </span>
                        <span >{obj.sex}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-10">
                          Nationality
          </span>
                        {obj.branch !== undefined && (

                          <span >{obj.branch.state.country.countryName}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-8">
                          Contact Number
          </span>
                        <span className="">{obj.contactNumber}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-12">
                          Alternate Contact Number
          </span>
                        {/* {obj.admissionApplication !== undefined && (

                          <span >{obj.admissionApplication.student.alternateContactNumber}</span>
                        )} */}
                        <span className="">{obj.alternateMobileNumber}</span>
                      </div>
                      <div className="col-sm-4 col-xs-12 m-b-1 adminDetails">
                        <span className="profile-label w-10">
                          Email
          </span>
                        <span className="">{obj.email}email</span>
                      </div>
                    </div>
                  </div>
                </div>
              </span>

              Academic History

              <div><p className="h2">In Progress</p></div>

              Enrollment
              <div><p className="h2">In Progress</p></div>

              Documents

              <div><p className="h2">In Progress</p></div>

            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  onClick = (e: any) => {
    const { name, value } = e.nativeEvent.target;
    const { mutate } = this.props;
    const { admissionEnquiryData } = this.state;
    e.preventDefault();
    let admType = "";
    if (name === "btnTotalReceived") {
      admType = "RECEIVED"
    } else if (name === "btnFollowup") {
      admType = "FOLLOWUP"
    } else if (name === "btnDeclined") {
      admType = "DECLINED"
    } else if (name === "btnConverted") {
      admType = "CONVERTED"
    }
    this.back();
    let btn: any = document.querySelector("#" + name);
    btn.setAttribute("disabled", true);
    return mutate({
      variables: {
        admissionEnquiryType: admType,
        branchId: admissionEnquiryData.branch.id,
      },
    }).then(data => {
      btn.removeAttribute("disabled");
      const aet = data;
      admissionEnquiryData.mutateResult = [];
      admissionEnquiryData.mutateResult.push(aet);
      this.setState({
        admissionEnquiryData: admissionEnquiryData
      });
      console.log('Admission result :  ', admissionEnquiryData.mutateResult);
    }).catch((error: any) => {
      btn.removeAttribute("disabled");
      console.log('there was an error sending the admission mutation result ', error);
      return Promise.reject(`Could not retrieve admission data: ${error}`);
    });

  }

  render() {
    const { admissionEnquiryData } = this.state;
    return (
      <section className="border">
        <h3 className="bg-heading-admission p-1 mb-1">
          <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
          Admission Enquiry
        </h3>
        {/* <div>
      <Link
                to={`/plugins/ems-admission/page/addadmission`}
                className="btn btn-primary" style={w180}>Create New Admission
                </Link>

        </div> */}
        <div className="inDashboard p-1">
          <div className="invoiceDashboard">
            <div className="invoiceHeader">
              <h6 className="center">Total Enquiry</h6>
              <a href=""><span className="ti-close m-r-1"></span></a>
              <a href=""><span className="ti-download"></span></a>
            </div>
            <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalAdmissions}</strong></h2>
            <button className="center btn btn-primary w50 p05 remainder" id="btnTotalReceived" name="btnTotalReceived" onClick={this.onClick}>View Info</button>
          </div>
          <div className="invoiceDashboard">
            <div className="invoiceHeader">
              <h6 className="center">Follow Up</h6>
              <a href=""><span className="ti-close m-r-1"></span></a>
              <a href=""><span className="ti-download"></span></a>
            </div>
            <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalFollowup}</strong></h2>
            <button className="center btn btn-primary w50 p05 remainder" id="btnFollowup" name="btnFollowup" onClick={this.onClick}>View Info</button>
          </div>
          <div className="invoiceDashboard">
            <div className="invoiceHeader">
              <h6 className="center">Declined</h6>
              <a href=""><span className="ti-close m-r-1 "></span></a>
              <a href=""><span className="ti-download"></span></a>
            </div>
            <h2 className="fee-orange"><strong>{this.props.data.getAdmissionData.totalDeclined}</strong></h2>
            <button className="center btn btn-primary w50 p05 remainder" id="btnDeclined" name="btnDeclined" onClick={this.onClick}>View Info</button>
          </div>
          <div className="invoiceDashboard">
            <div className="invoiceHeader">
              <h6 className="center">Converted</h6>
              <a href=""><span className="ti-close m-r-1"></span></a>
              <a href=""><span className="ti-download"></span></a>
            </div>
            <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalConverted}</strong></h2>
            <button className="center btn btn-primary w50 p05 remainder" id="btnConverted" name="btnConverted" onClick={this.onClick}>View Info</button>

          </div>
        </div>

        <div className="col-md-12" id="admissionGridShow">
          <h5 className="bg-heading p-1 m-0">Received Info</h5>

          <table id="admissionlistpage" className="striped-table fwidth bg-white p-2">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onClick={(e: any) => this.checkAllAdmissions(e)} value="checkedall" name="" id="chkCheckedAll" />
                </th>
                <th>Enquiry ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {
                this.createAdmissionRows(this.state.admissionEnquiryData.mutateResult)
              }
            </tbody>
          </table>
          {
            this.createNoRecordMessage(this.state.admissionEnquiryData.mutateResult)
          }
        </div>
        {
          this.createDetailsDiv(admissionEnquiryData.enquiryData)
        }

        <div className="hide" id="backDiv">
          <p></p>
          <div>
            {/* <button className="btn btn-primary mr-1" id="btnBack" name="btnBack" onClick={this.back}>Back to Grid</button> */}
          </div>
        </div>
      </section>
    );
  }
}


export default widthAdmissionDataloader(
  compose(
    graphql<SearchAdmissionOnTypeListType, AdmissionDataRootProps>(AdmissionEnquiryListQueryGql, {
      name: "mutate"
    })
  )
    (AdmissionEnquiryPage) as any
);