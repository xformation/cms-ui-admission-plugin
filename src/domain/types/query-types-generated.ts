export type AddAdmissionInput = {
  studentName: string | null;
  mobileNumber: string | null;
  alternateMobileNumber: string | null;
  email: string | null;
  courseApplyingFor: string | null;
  modeOfEnquiry: string | null;
  status: string | null;
  description: string | null;
  enquiryDate: Date | null;
  updatedOn: Date | null;
  updatedBy: Date | null;
  branch: {
    branchName?: any | null;
  };
  admissionApplication: {
    admissionApplication?: any | null;
  };
};

export type AddAdmissionMutationVariables = {
  input: AddAdmissionInput;
};

export type AddAdmissionMutation = {
  addAdmissionEnquiry: {
    admissionEnquiry: {
      id: number;
      studentName: string;
      mobileNumber: number;
      alternateMobileNumber: number;
      email: string;
      courseApplyingFor: string;
      modeOfEnquiry: string;
      status: string;
      description: string;
      enquiryDate: string;
      updatedOn: any;
      updatedBy: any;
      branch: {
        branchName: any;
      };
      admissionApplication: {
        admissionApplication: any;
      };
    };
  };
};

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
      city: {
        cityName: string;
      };
      state: {
        stateName: string;
        country: {
          countryName: string;
        };
      };
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
    city: {
      cityName: string;
    };
    state: {
      stateName: string;
      country: {
        countryName: string;
      };
    };
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
    city: {
      cityName: string;
    };
    state: {
      stateName: string;
      country: {
        countryName: string;
      };
    };
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
    city: {
      cityName: string;
    };
    state: {
      stateName: string;
      country: {
        countryName: string;
      };
    };
  };
  admissionApplication: {
    admissionStatus: string;
  };
};

export type AdmissionEnquiryQuery = {
  admissionEnquiryList: {
    id: number;
    studentName: string;
    mobileNumber: string;
    status: string;
    alternateMobileNumber: string;
    email: string;
    courseApplyingFor: string;
    strEnquiryDate: string;
    branch: {
      branchName: string;
      city: {
        cityName: string;
      };
      state: {
        stateName: string;
        country: {
          countryName: string;
        };
      };
    };
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

export type SearchAdmissionOnTypeListType = {
  searchAdmissionOnType: {
    id: number;
    studentName: string;
    mobileNumber: string;
    status: string;
    alternateMobileNumber: string;
    email: string;
    courseApplyingFor: string;
    strEnquiryDate: string;
    branch: {
      branchName: string;
      city: {
        cityName: string;
      };
      state: {
        stateName: string;
        country: {
          countryName: string;
        };
      };
    };
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
    branchName: string;
    city: {
      cityName: string;
    };
    state: {
      stateName: string;
      country: {
        countryName: string;
      };
    };
  };
  admissionApplication: {
    admissionStatus: any;
  };
};
/* tslint:enable */
