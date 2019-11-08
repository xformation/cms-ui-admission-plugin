import gql from 'graphql-tag';

export const GET_ADMISSIONAPPLICATION_DATA = gql`
  query getAdmissionApplicationData($academicyearId: String) {
    getAdmissionApplicationData(academicyearId: $academicyearId) {
      totalReceived
      totalInprocess
      totalDeclined
      totalAccepted
    }
  }
`;
