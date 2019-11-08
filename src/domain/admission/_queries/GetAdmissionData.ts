import gql from 'graphql-tag';

export const GET_ADMISSION_DATA = gql`
  query getAdmissionData($branchId: String) {
    getAdmissionData(branchId: $branchId) {
      totalAdmissions
      totalFollowup
      totalDeclined
      totalConverted
    }
  }
`;
