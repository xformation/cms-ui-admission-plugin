import * as React from 'react';

import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps } from 'react-apollo';

import * as AdmissionEnquiryListQueryGql from './AdmissionEnquiryQuery.graphql';
import { AdmissionEnquiryQuery, AdmissionEnquirySummaryFragment } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

const AdmissionRow = ({ admissionEnquiry }: { admissionEnquiry: AdmissionEnquirySummaryFragment }) => (
  <tr key={admissionEnquiry.id}>
    <td>
      <input type="checkbox" name="" id="" />
    </td>
    <td>{admissionEnquiry.id}</td>
    <td>{admissionEnquiry.studentName}</td>
    <td>{admissionEnquiry.mobileNumber}</td>
    <td>{admissionEnquiry.status}</td>
    <td>{admissionEnquiry.enquiryDate}</td>
    <td><span className="btn btn-primary">Details</span></td>
  </tr>
);

const AdmissionsTable = ({ admissionEnquiries }: { admissionEnquiries: AdmissionEnquirySummaryFragment[] }) => (
  <section className="border">
    <div className="inDashboard p-1">
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Total Enquiry</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>20</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Follow Up</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>15</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Declined</h6>
          <a href=""><span className="ti-close m-r-1 "></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-orange"><strong>20</strong></h2>
        <h6 className="center btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
      <div className="invoiceDashboard">
        <div className="invoiceHeader">
          <h6 className="center">Converted</h6>
          <a href=""><span className="ti-close m-r-1"></span></a>
          <a href=""><span className="ti-download"></span></a>
        </div>
        <h2 className="fee-red"><strong>5</strong></h2>
        <h6 className="btn btn-primary w50 p05 remainder">View Info</h6>
      </div>
    </div>
    <h5 className="bg-heading p-1 m-0">Received Info</h5>
    <table id="admissionlistpage" className="striped-table fwidth bg-white p-2">
      <thead>
        <tr>
          <th>
            <input type="checkbox" value="checkedall" name="" id="" />
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
        {admissionEnquiries.map(admissionEnquiry => <AdmissionRow key={admissionEnquiry.id} admissionEnquiry={admissionEnquiry} />)}
      </tbody>
    </table>
  </section>
);

type AdmissionEnquiryPageOwnProps = RouteComponentProps<{}>;
type AdmissionEnquiryPageProps = {
  data: QueryProps & AdmissionEnquiryQuery;
};

const AdmissionEnquiryPage = ({ data: { admissionEnquiries } }: AdmissionEnquiryPageProps) => (
  <section className="customCss">
    <h3 className="bg-heading p-1">
      <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true"></i> Admin - Admission
        </h3>
    <div className="m-b-1 dflex bg-heading justify-Content">
      <h4 className="ptl-06">Enquiry</h4>
      <div>
        <a className="btn btn-primary" style={w180}>
          Create New Enquiry
        </a>
        {/* <a className="btn btn-primary">Save</a> */}
      </div>
    </div>
    <AdmissionsTable admissionEnquiries={admissionEnquiries} />
    {/* <AdmissionsTable admissions={admissions} /> */}
  </section>
);

export default graphql<AdmissionEnquiryQuery, AdmissionEnquiryPageOwnProps, AdmissionEnquiryPageProps>(
  AdmissionEnquiryListQueryGql
)(withLoadingHandler(AdmissionEnquiryPage));
