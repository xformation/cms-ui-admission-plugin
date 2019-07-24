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
      student: {
        studentMiddleName: string;
        studentLastName: string;
        fatherName: string;
        fatherLastName: string;
        motherName: string;
        motherMiddleName: string;
        motherLastName: string;
        dateOfBirth: string;
        sex: string;
        alternateContactNumber: string;
      };
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
    student: {
      studentMiddleName: string;
      studentLastName: string;
      fatherName: string;
      fatherMiddleName: string;
      fatherLastName: string;
      motherName: string;
      motherMiddleName: string;
      motherLastName: string;
      dateOfBirth: string;
      sex: string;
      alternateContactNumber: string;
    };
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
    student: {
      studentMiddleName: string;
      studentLastName: string;
      fatherName: string;
      fatherLastName: string;
      motherName: string;
      motherMiddleName: string;
      motherLastName: string;
      dateOfBirth: string;
      sex: string;
      alternateContactNumber: string;
    };
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
    student: {
      studentMiddleName: string;
      studentLastName: string;
      fatherName: string;
      fatherLastName: string;
      motherName: string;
      motherMiddleName: string;
      motherLastName: string;
      dateOfBirth: string;
      sex: string;
      alternateContactNumber: string;
    };
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
      branch: any;
    };
    admissionApplication: {
      admissionApplication: any;
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

export type AdmissionApplicationCountQueryType = {
  getAdmissionApplicationData: {
    totalReceived: number;
    totalInprocess: number;
    totalDeclined: number;
    totalAccepted: number;
  };
};

export type SearchAdmissionApplicationOnTypeListType = {
  searchAdmissionApplicationOnType: {
    id: number;
    studentName: string;
    admissionStatus: string;
    course: string;
    comments: string;
    strAdmissionDate: string;
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
    admissionApplication: {
      admissionStatus: any;
      student: {
        studentMiddleName: string;
        studentLastName: string;
        fatherName: string;
        fatherLastName: string;
        motherName: string;
        motherMiddleName: string;
        motherLastName: string;
        dateOfBirth: string;
        sex: string;
        alternateContactNumber: string;
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
    student: {
      studentMiddleName: string;
      studentLastName: string;
      fatherName: string;
      fatherLastName: string;
      motherName: string;
      motherMiddleName: string;
      motherLastName: string;
      dateOfBirth: string;
      sex: string;
      alternateContactNumber: string;
    };
  };
};

export type AddAcademicHistoryInput = {
  id?: number | null;
  qualification?: string | null;
  yearOfPassing?: string | null;
  institution?: string | null;
  university?: string | null;
  enrollmentNo?: number | null;
  score?: number | null;
  percentage?: number | null;
};

export type AddAcademicHistoryMutationVariables = {
  input: AddAcademicHistoryInput;
};

export type AcademicHistoryAddMutationType = {
  addAcademicHistory: {
    academicHistory: {
      id: number;
      qualification: string;
      yearOfPassing: string;
      institution: string;
      university: string;
      enrollmentNo: number;
      score: number;
      percentage: number;
    };
  };
};

export type AddCompetitiveExamInput = {
  id?: number | null;
  testName?: string | null;
  testScore?: number | null;
  enrollmentNo?: number | null;
  rank?: number | null;
};

export type AddCompetitveMutationVariables = {
  input: AddCompetitiveExamInput;
};

export type CompetitiveAddMutationType = {
  addCompetitiveExam: {
    competitiveExam: {
      id: number;
      testName: string;
      testScore: number;
      enrollmentNo: number;
      rank: number;
    };
  };
};

export type AddDocumentsInput = {
  id?: number | null;
  documentName?: string | null;
  upload?: string | null;
};

export type AddDocumentMutationVariables = {
  input: AddDocumentsInput;
};

export type DocumentsAddMutationType = {
  addDocuments: {
    documents: {
      id: number;
      documentName: string;
      upload: string;
    };
  };
};

export type LoadAdmissionDataCacheType = {
  createAdmissionDataCache: {
    branches: Array<{
      id: number;
      branchName: string;
      college: {
        id: number;
      };
      state: {
        id: number;
      };
      city: {
        id: number;
      };
    }>;
    departments: Array<{
      id: number;
      name: string;
      branch: {
        id: number;
      };
      academicyear: {
        id: number;
      };
    }>;
    batches: Array<{
      id: number;
      batch: string;
      department: {
        id: number;
      };
    }>;
    states: Array<{
      id: number;
      stateName: string;
      country: {
        id: number;
      };
    }>;
    cities: Array<{
      id: number;
      cityName: string;
    }>;
    courses: Array<{
      id: number;
      description: string;
    }>;
  };
};

export type AddStudentInput = {
  id?: number | null;
  studentName?: string | null;
  fatherName?: string | null;
  fatherMiddleName?: string | null;
  fatherLastName?: string | null;
  motherName?: string | null;
  motherMiddleName?: string | null;
  motherLastName?: string | null;
  aadharNo?: number | null;
  dateOfBirth?: number | null;
  placeOfBirth?: string | null;
  religion?: string | null;
  caste?: string | null;
  subCaste?: string | null;
  age?: number | null;
  sex?: string | null;
  bloodGroup?: string | null;
  addressLineOne?: string | null;
  addressLineTwo?: string | null;
  addressLineThree?: string | null;
  town?: string | null;
  state?: string | null;
  country?: string | null;
  pincode?: number | null;
  studentContactNumber?: number | null;
  alternateContactNumber?: number | null;
  studentEmailAddress?: string | null;
  alternateEmailAddress?: string | null;
  relationWithStudent?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  contactNo?: number | null;
  emailAddress?: string | null;
  uploadPhoto?: string | null;
  admissionNo?: number | null;
  rollNo?: number | null;
  studentType?: string | null;
  batch: {
    batch?: any | null;
  };
  section: {
    section?: any | null;
  };
  branch: {
    branchName?: any | null;
  };
  department: {
    name?: any | null;
  };
};

export type AddStudentMutationVariables = {
  input: AddStudentInput;
};

export type AddStudentMutation = {
  addStudent: {
    student: {
      id: number;
      studentName: string;
      fatherName: string;
      fatherMiddleName: string;
      fatherLastName: string;
      motherName: string;
      motherMiddleName: string;
      motherLastName: string;
      aadharNo: number;
      dateOfBirth: number;
      placeOfBirth: string;
      religion: string;
      caste: string;
      subCaste: string;
      age: number;
      sex: string;
      bloodGroup: string;
      addressLineOne: string;
      addressLineTwo: string;
      addressLineThree: string;
      town: string;
      state: string;
      country: string;
      pincode: number;
      studentContactNumber: number;
      alternateContactNumber: number;
      studentEmailAddress: string;
      alternateEmailAddress: string;
      relationWithStudent: string;
      name: string;
      middleName: string;
      lastName: string;
      contactNo: number;
      emailAddress: string;
      uploadPhoto: string;
      admissionNo: number;
      rollNo: number;
      studentType: string;
      batch: {
        batch: any;
      };
      section: {
        section: any;
      };
      branch: {
        branchName: any;
      };
      department: {
        name: any;
      };
    };
  };
};

export type StudentData = {
  // id: string;
  studentName: string;
  fatherName: string;
  fatherMiddleName: string;
  fatherLastName: string;
  motherName: string;
  motherMiddleName: string;
  motherLastName: string;
  aadharNo: number;
  dateOfBirth: number;
  placeOfBirth: string;
  religion: string;
  caste: string;
  subCaste: string;
  age: number;
  sex: string;
  bloodGroup: string;
  addressLineOne: string;
  addressLineTwo: string;
  addressLineThree: string;
  town: string;
  state: string;
  country: string;
  pincode: number;
  studentContactNumber: number;
  alternateContactNumber: number;
  studentEmailAddress: string;
  alternateEmailAddress: string;
  relationWithStudent: string;
  emergencyContactName: string;
  emergencyContactMiddleName: string;
  emergencyContactLastName: string;
  emergencyContactNo: string;
  emergencyContactEmailAddress: string;
  uploadPhoto: string;
  admissionNo: number;
  rollNo: number;
  studentType: string;
  batch: {
    batch: any;
  };
  section: {
    section: any;
  };
  branch: {
    branchName: any;
  };
  department: {
    name: any;
  };
};

/* tslint:enable */
