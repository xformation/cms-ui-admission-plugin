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
      landLinePhoneNo
      cellPhoneNo
      emailId
      enquiryStatus
      strEnquiryDate
    }
  }
`;
