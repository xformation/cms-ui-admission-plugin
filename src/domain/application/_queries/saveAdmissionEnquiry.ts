import gql from 'graphql-tag';

export const SAVE_ADMISSION_ENQUIRY = gql`
  query getAdmissionEnquiryStaticData {
    getAdmissionEnquiryStaticData {
      genderList
      modeOfEnquiryList
      enquiryStatusList
    }
  }
`;
