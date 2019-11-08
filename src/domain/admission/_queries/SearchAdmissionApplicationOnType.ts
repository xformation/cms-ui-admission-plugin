import gql from 'graphql-tag';

export const SEARCH_ADMISSION_APLICATION = gql`
  mutation searchAdmissionApplicationOnType(
    $admissionApplicationType: String
    $academicyearId: Long
  ) {
    searchAdmissionApplicationOnType(
      admissionApplicationType: $admissionApplicationType
      academicyearId: $academicyearId
    ) {
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
      email
      sex
      admissionStatus
      course
      comments
      strAdmissionDate
      academicHistory {
        id
        qualification
        yearOfPassing
        institution
        university
        enrollmentNo
        score
      }
      batch {
        batch
      }
      department {
        name
      }
      branch {
        branchName
        city {
          cityName
        }
        state {
          stateName
          country {
            countryName
          }
        }
      }
    }
  }
`;
