import gql from 'graphql-tag';

export const GET_STUDENT_LIST = gql`
  query getStudentList($branchId: Long, $academicYearId: Long) {
    getStudentList(branchId: $branchId, academicYearId: $academicYearId) {
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
