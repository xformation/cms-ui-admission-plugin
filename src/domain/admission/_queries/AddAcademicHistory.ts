import gql from 'graphql-tag';

export const ADD_ACD_HISTORY = gql`
  mutation addAcademicHistory($input: AddAcademicHistoryInput!) {
    addAcademicHistory(input: $input) {
      academicHistory {
        id
        qualification
        yearOfPassing
        institution
        university
        enrollmentNo
        score
        percentage
      }
    }
  }
`;
