import gql from 'graphql-tag';

export const SAVE_ADMISSION_APPLICATION = gql`
  mutation saveAdmissionApplication($input: AdmissionApplicationInput) {
    saveAdmissionApplication(input: $input) {
      cmsAdmissionApplicationVo {
        exitCode
        exitDescription
        id
        branchId
        academicYearId
        strCreatedOn
        strUpdatedOn
        admissionEnquiryId
        admissionNo
        dataList {
          id
          branchId
          academicYearId
          strCreatedOn
          strUpdatedOn
          admissionEnquiryId
          admissionNo
        }
        enquiryList {
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
