import gql from 'graphql-tag';

export const GET_ADMISSION_ENQUIRY_LIST = gql`
  query getAdmissionEnquiryList(
    $branchId: Long
    $academicYearId: Long
    $enquiryStatus: String
  ) {
    getAdmissionEnquiryList(
      branchId: $branchId
      academicYearId: $academicYearId
      enquiryStatus: $enquiryStatus
    ) {
      id
      studentName
      studentMiddleName
      studentLastName
      cellPhoneNo
      landLinePhoneNo
      emailId
      dateOfBirth
      gender
      highestQualification
      modeOfEnquiry
      comments
      branchId
      departmentId
      courseId
      semesterId
      batchId
      stateId
      cityId
      academicYearId
      enquiryStatus
      strDateOfBirth
      exitCode
      exitDescription
      strCreatedOn
      strUpdatedOn
    }
  }
`;
