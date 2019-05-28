export type AdmissionQueryVariables = {
  admissionEnquiryId: number;
};

export type AdmissionQuery = {
  admissionEnquiry: {
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

export type AdmissionEnquiryFragment = {
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

export type AdmissionEnquiryDetailsFragment = {
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

export type AdmissionEnquirySummaryFragment = {
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

export type getAdmissionDataQuery = {
  getadmissiondata: {
    totalAdmissions: any;
    totalFollowup: any;
    totalDeclined: any;
    totalConverted: any;
  };
};

export type getAdmissionDataSummaryFragment = {
  totalAdmissions: any;
  totalFollowup: any;
  totalDeclined: any;
  totalConverted: any;
};

export type getAdmissionDataDetailsFragment = {
  totalAdmissions: any;
  totalFollowup: any;
  totalDeclined: any;
  totalConverted: any;
};
export type getAdmissionDataFragment = {
  totalAdmissions: any;
  totalFollowup: any;
  totalDeclined: any;
  totalConverted: any;
};

export type AdmissionEnquiryCountQueryType = {
  getAdmissionData: {
    totalAdmissions: number;
    totalFollowup: number;
    totalDeclined: number;
    totalConverted: number;
  };
};

export type AdmissionEnquiryQuery = {
  admissionEnquiryList: {
    id: number;
    studentName: string;
    mobileNumber: string;
    status: string;
    strEnquiryDate: string;
  };
};

export type GetAdmissionData = {
  totalAdmissions: number;
  totalFollowup: number;
  totalDeclined: number;
  totalConverted: number;
};

export type AdmissionEnquiryData = {
  id: number;
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
    branchName: any;
  };
  admissionApplication: {
    admissionStatus: any;
  };
};
/* tslint:enable */
