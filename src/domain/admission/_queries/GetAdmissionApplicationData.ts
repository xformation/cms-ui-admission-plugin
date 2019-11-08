import gql from 'graphql-tag';

export const GET_ADMISSIONAPPLICATION_DATA = gql`
  # query getAdmissionData( $branchId:String)
  # {
  #   getAdmissionData(branchId:$branchId)
  #   {
  #     totalAdmissions,
  #     totalFollowup,
  #     totalDeclined,
  #     totalConverted
  #   }
  # }

  query getAdmissionApplicationData($academicyearId: String) {
    getAdmissionApplicationData(academicyearId: $academicyearId) {
      totalReceived
      totalInprocess
      totalDeclined
      totalAccepted
    }
  }
`;
