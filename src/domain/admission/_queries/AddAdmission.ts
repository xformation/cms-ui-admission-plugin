import gql from 'graphql-tag';

export const ADD_ADDMISSION = gql`
  mutation addAdmissionEnquiry($input: AddAdmissionEnquiryInput!) {
    addAdmissionEnquiry(input: $input) {
      admissionEnquiry {
        id
        studentName
        mobileNumber
        alternateMobileNumber
        email
        courseApplyingFor
        modeOfEnquiry
        status
        description
        enquiryDate
        updatedOn
        updatedBy
        branch {
          id
        }
        admissionApplication {
          id
        }
      }
    }
  }
`;
