import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';

import * as AdmissionEnquiryListQueryGql from './AdmissionQuery.graphql';
import { AdmissionEnquiryQuery,AdmissionEnquiryCountQueryType} from '../../types';
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
       mutateResult: []
      }
      };
      this.createAdmissionForm = this.createAdmissionForm.bind(this);
    }

    createAdmissionForm(objAry: any) {
      const mutateResLength = objAry.length;
      const retVal = [];
      for(let x=0; x< mutateResLength; x++){
        const tempObj = objAry[x];
        const admissionArray = tempObj.data.admissionEnquiryList;
        const length = admissionArray.length;
        for (let i = 0; i < length; i++) {
          const admissionEnquiry = admissionArray[i];
          retVal.push(
            <form>
              {admissionEnquiry.id}
              {admissionEnquiry.studentName}
              {admissionEnquiry.mobileNumber}
              {admissionEnquiry.alternateMobileNumber}
              {admissionEnquiry.email}
              {admissionEnquiry.courseApplyingFor}
             {admissionEnquiry.status}
              {admissionEnquiry.branch.branchName}
             {admissionEnquiry.branch.city.cityName}
             {admissionEnquiry.branch.state.stateName}
              {admissionEnquiry.branch.state.country.countryName}
              </form>
          );
        }
      }
      return retVal;
    }



    onForm = (e: any) => {
      const { mutate } = this.props;
      const { admissionEnquiryData } = this.state;
      e.preventDefault();
      let dataSavedMessage: any = document.querySelector(".data-saved-message");
      dataSavedMessage.style.display = "none";
      return mutate({
        variables: { 
            branchId: admissionEnquiryData.branch.id
          },
      }).then(data => {
        dataSavedMessage.style.display = "inline-block";
        const aet = data;
        admissionEnquiryData.mutateResult = [];
        admissionEnquiryData.mutateResult.push(aet);
        this.setState({
          admissionEnquiryData: admissionEnquiryData
        });
        console.log('Admission result :  ', admissionEnquiryData.mutateResult);
      }).catch((error: any) => {
        dataSavedMessage.style.display = "inline-block";
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
       <div className="col-md-12">
     <h5 className="bg-heading p-1 m-0">Details</h5>
     
     <form id="admissionlistpage" className="striped-table fwidth bg-white p-2">

     <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="">Enquiry ID</label>
                <input name="id" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-4">
              <div>
                <label htmlFor="">Student Name</label>
                <input name="studentName" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Mobile Number</label>
                <input name="mobileNumber" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Alternate Mobile Number</label>
                <input name="alternateMobileNumber" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Email</label>
                <input name="email" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="">Class Applying For</label>
                <input name="courseApplyingFor" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Status</label>
                <input name="status" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Campus</label>
                <input name="branchName" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">State</label>
                <input name="stateName" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">City</label>
                <input name="cityName" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
              <div className="col-md-4">
              <div>
                <label htmlFor="">Country</label>
                <input name="countryName" onChange={this.createAdmissionForm} onSubmit={this.onForm} className="fwidth" />
              </div>
              </div>
   </div>
     
    
</form>
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