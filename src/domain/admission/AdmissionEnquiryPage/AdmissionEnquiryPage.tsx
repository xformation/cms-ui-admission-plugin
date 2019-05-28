import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';

import * as AdmissionEnquiryListQueryGql from './AdmissionEnquiry.graphql';
import { AdmissionEnquiryQuery,AdmissionEnquiryCountQueryType} from '../../types';
import widthAdmissionDataloader from './withAdmissionDataloader';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

type AdmissionDataRootProps = RouteComponentProps<{
  branchId: string;
  admissionApplicationId: string;
}> & {
  data: QueryProps & AdmissionEnquiryCountQueryType;
};

type AdmissionDataPageProps = AdmissionDataRootProps& {
  mutate: MutationFunc<AdmissionEnquiryQuery>
};

type AdmissionDataState = {
  admissionEnquiryData: any
}

  class AdmissionEnquiryPage extends React.Component<AdmissionDataPageProps, AdmissionDataState> {
    constructor(props: any) {
      super(props);
      this.state = {
        admissionEnquiryData: {
          branch: {
            id: 1851 //1001
          },
          admissionApplication: {
            id: 6051 //1051
          },
       mutateResult: []
      }
      };
      this.checkAllAdmissions = this.checkAllAdmissions.bind(this);
      this.createAdmissionRows = this.createAdmissionRows.bind(this);
      this.onClickCheckbox = this.onClickCheckbox.bind(this);
      this.createNoRecordMessage = this.createNoRecordMessage.bind(this);
    }

    onClickCheckbox(index: any, e: any) {
      const { id } = e.nativeEvent.target;
      let chkBox : any = document.querySelector("#"+id);
      chkBox.checked = e.nativeEvent.target.checked;
    }

    checkAllAdmissions(e: any) {
      const { admissionEnquiryData } = this.state;
      const mutateResLength = admissionEnquiryData.mutateResult.length;
      let chkAll  = e.nativeEvent.target.checked;
      let els = document.querySelectorAll("input[type=checkbox]");
  
      var empty = [].filter.call( els, function( el: any ) {
        if(chkAll){
          el.checked = true;
        }else{
          el.checked = false;
        }
      });
    }

    createNoRecordMessage(objAry: any){
      const mutateResLength = objAry.length;
      const retVal = [];
      for(let x=0; x< mutateResLength; x++){
        const tempObj = objAry[x];
        const admissionArray = tempObj.data.admissionEnquiryList;
        const length = admissionArray.length;
        if(length === 0){
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
      for(let x=0; x< mutateResLength; x++){
        const tempObj = objAry[x];
        const admissionArray = tempObj.data.admissionEnquiryList;
        const length = admissionArray.length;
        for (let i = 0; i < length; i++) {
          const admissionEnquiry = admissionArray[i];
          retVal.push(
            <tr >
              <td>
                <input onClick={(e: any) => this.onClickCheckbox(i, e)} checked={admissionEnquiry.isChecked} type="checkbox" name="" id={"chk"+admissionEnquiry.id} />
              </td>
              <td>{admissionEnquiry.id}</td>
              <td>{admissionEnquiry.studentName}</td>
              <td>{admissionEnquiry.mobileNumber}</td>
              <td>{admissionEnquiry.status}</td>
              <td>{admissionEnquiry.strEnquiryDate}</td>
              <td><span className="btn btn-primary">Details</span></td>
            </tr>
          );
        }
      }
      return retVal;
    }

    onClick = (e: any) => {
      const { mutate } = this.props;
      const { admissionEnquiryData } = this.state;
      e.preventDefault();
      let btn : any = document.querySelector("#btnFind");
      btn.setAttribute("disabled", true);
      return mutate({
        variables: { 
            branchId: admissionEnquiryData.branch.id,
            admissionApplicationId: admissionEnquiryData.admissionApplication.id,
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
      const {
        admissionEnquiryData
      } = this.state;
      return (   
      <section className="border">
       <div className="inDashboard p-1">
         <div className="invoiceDashboard">
          <div className="invoiceHeader">
          <h6 className="center">Total Enquiry</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalAdmissions}</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
        </div>
        <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Follow Up</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalFollowup}</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Declined</h6>
          <a href=""><span className="ti-close m-r-1 "></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-orange"><strong>{this.props.data.getAdmissionData.totalDeclined}</strong></h2>
        <h6 className="center btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Converted</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>{this.props.data.getAdmissionData.totalConverted}</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
    </div>
    <div className="m-b-1 dflex bg-heading">
                  <h4 className="ptl-06"></h4>
                  <button className="btn btn-primary max-width-13" id="btnFind" name="btnFind"  onClick={this.onClick} >Search</button>
               </div>
       <div className="col-md-12">
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
  </section>
);
  }
}


export default widthAdmissionDataloader(
  compose(
    graphql<AdmissionEnquiryQuery,AdmissionDataRootProps>(AdmissionEnquiryListQueryGql,{
      name:"mutate"
    })
  )
  (AdmissionEnquiryPage) as any
  );