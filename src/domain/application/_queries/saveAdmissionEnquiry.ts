import gql from 'graphql-tag';

export const SAVE_ADMISSION_ENQUIRY = gql`
  mutation saveAdmissionEnquiry($input: AdmissionEnquiryInput) {
    saveAdmissionEnquiry(input: $input) {
      cmsAdmissionEnquiryVo {
        exitCode
        exitDescription
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
        enquiryDate
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
        strEnquiryDate
        dataList {
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
          enquiryDate
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
          strEnquiryDate
        }
      }
    }
  }
`;
