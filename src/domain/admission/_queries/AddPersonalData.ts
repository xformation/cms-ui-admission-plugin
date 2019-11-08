import gql from 'graphql-tag';

export const ADD_PERSONAL_DATA = gql`
  mutation addAdmissionPersonaldetails($input: AddAdmissionPersonalDetailsInput!) {
    addAdmissionPersonaldetails(input: $input) {
      id
      studentName
      studentMiddleName
      studentLastName
      fatherName
      fatherMiddleName
      fatherLastName
      motherName
      motherMiddleName
      motherLastName
      contactNumber
      alternateMobileNumber
      dateOfBirth
      email
      sex
      country {
        id
      }
    }
  }
`;
