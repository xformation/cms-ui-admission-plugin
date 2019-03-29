/* tslint:disable */
//  This file was automatically generated and should not be edited.

/* Location */

export type locationListQuery = {
  locations: Array<{
    id: string;
    name: string;
    address: string;
    appliesTo: string;
  }>;
};

export type locationQueryVariables = {
  locationId: any;
};

export type locationQuery = {
  location: {
    id: any;
    name: string;
    address: string;
    appliesTo: string;
  };
};

export type locationDetailsFragment = {
  id: any;
  name: string;
  address: string;
  appliesTo: string;
};

export type locationSummaryFragment = {
  id: any;
  name: string;
  address: string;
  appliesTo: string;
};

/* Student */

export type AdmissionEnquiryQuery = {
  // Return all known Pet Institutes
  admissions: Array<{
    id: any;
    studentName: string;
    mobileNumber: string;
    alternateMobileNumber: string;
    email: string;
    courseApplyingFor: string;
    modeOfEnquiry: string;
    status: string;
    description: string;
    enquiryDate: string;
    updatedOn: string;
    updatedBy: string;
    branch: {
      branchName: string;
    };
    admissionApplication: {
      admissionStatus: string;
    };
  }>;
};

export type AdmissionQueryVariables = {
  admissionId: number;
};

export type AdmissionQuery = {
  admission: {
    id: any;
    studentName: string;
    mobileNumber: string;
    alternateMobileNumber: string;
    email: string;
    courseApplyingFor: string;
    modeOfEnquiry: string;
    status: string;
    description: string;
    enquiryDate: string;
    updatedOn: string;
    updatedBy: string;
    branch: {
      branchName: string;
    };
    admissionApplication: {
      admissionStatus: string;
    };
  };
};

export type AdmissionFragment = {
  id: any;
  studentName: string;
  mobileNumber: string;
  alternateMobileNumber: string;
  email: string;
  courseApplyingFor: string;
  modeOfEnquiry: string;
  status: string;
  description: string;
  enquiryDate: string;
  updatedOn: string;
  updatedBy: string;
  branch: {
    branchName: string;
  };
  admissionApplication: {
    admissionStatus: string;
  };
};

export type AdmissionDetailsFragment = {
  id: any;
  studentName: string;
  mobileNumber: string;
  alternateMobileNumber: string;
  email: string;
  courseApplyingFor: string;
  modeOfEnquiry: string;
  status: string;
  description: string;
  enquiryDate: string;
  updatedOn: string;
  updatedBy: string;
  branch: {
    branchName: string;
  };
  admissionApplication: {
    admissionStatus: string;
  };
};

export type AdmissionSummaryFragment = {
  id: any;
  studentName: string;
  mobileNumber: string;
  alternateMobileNumber: string;
  email: string;
  courseApplyingFor: string;
  modeOfEnquiry: string;
  status: string;
  description: string;
  enquiryDate: string;
  updatedOn: string;
  updatedBy: string;
  branch: {
    branchName: string;
  };
  admissionApplication: {
    admissionStatus: string;
  };
};

/* tslint:enable */
