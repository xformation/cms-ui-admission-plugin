import * as React from 'react';

import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps } from 'react-apollo';

import * as AdmissionEnquiryQueryGql from './AdmissionEnquiryQuery.graphql';
import { AdmissionEnquiryQuery, AdmissionSummaryFragment } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

const AdmissionRow = ({ admission }: { admission: AdmissionSummaryFragment }) => (
  <tr key={admission.id}>
    <td>{admission.studentName}</td>
    <td>{admission.status}</td>
    <td>{admission.studentName}</td>
    <td>{admission.mobileNumber}</td>
    <td>{admission.status}</td>
    <td>{admission.enquiryDate}</td>
    <td>{admission.enquiryDate}</td>
  </tr>
);

const AdmissionsTable = ({ admissions }: { admissions: AdmissionSummaryFragment[] }) => (
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
    <h5 className="bg-heading p-1">Received Info</h5>
    <table id="studentlistpage" className="striped-table fwidth bg-white">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Enquiry ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span className="border adminP-5">01</span></td>
          <td><span className="border adminP-5">A2PF2</span></td>
          <td><span className="border adminP-5">Warner</span></td>
          <td><span className="border adminP-5">8925364798</span></td>
          <td><span className="border adminP-5">Follow Up</span></td>
          <td><span className="border adminP-5">1-2-19</span></td>
          <td><span className="btn btn-primary border">Details</span></td>
        </tr>
        {/* {admissions.map(admission => <AdmissionRow key={admission.id} admission={admission} />)} */}
      </tbody>
    </table>
  </section>
);

type AdmissionEnquiryPageOwnProps = RouteComponentProps<{}>;
type AdmissionEnquiryPageProps = {
  data: QueryProps & AdmissionEnquiryQuery;
};

const AdmissionEnquiryPage = ({ data: { admissions } }: AdmissionEnquiryPageProps) => (
  <section className="customCss">
    <div className="m-b-1 dflex bg-heading">
      <h4 className="ptl-06">Class Setup</h4>
      <div>
        <a className="btn btn-primary" style={w180}>
          Create New Admission
        </a>
        <a className="btn btn-primary">Save</a>
      </div>
    </div>
    <AdmissionsTable admissions={admissions} />
    {/* <AdmissionsTable admissions={admissions} /> */}
  </section>
);

export default graphql<AdmissionEnquiryQuery, AdmissionEnquiryPageOwnProps, AdmissionEnquiryPageProps>(
  AdmissionEnquiryQueryGql
)(withLoadingHandler(AdmissionEnquiryPage));
