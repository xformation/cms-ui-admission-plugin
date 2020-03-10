
const ADMISSION_STATE_FORM =
{
    "showQuestionNumbers": "off",
    "showCompletedPage": false,
    "pages": [
     {
        
      "name": "PersonalInfo",
      "elements": [
       {
        "type": "dropdown",
        "name": "studentType",
        "title": "Student Type",
        "isRequired": true,
        "requiredErrorText": "Please select student type",
        "choices": [
         {
          "value": "REGULAR",
          "text": "REGULAR"
         },
         {
          "value": "STAFF_CONCESSION",
          "text": "STAFF CONCESSION"
         },
         {
          "value": "BENEFITS",
          "text": "BENEFITS"
         },
         {
          "value": "SCHOLARSHIP",
          "text": "SCHOLARSHIP"
         }
        ]
       },
       {
        "type": "file",
        "name": "studentImage",
        "title": "Student Image",
        "imageHeight": "100",
        "imageWidth": "100",
        "maxSize": 0,
        "needConfirmRemoveFile": true,
        "storeDataAsText": false,
        "showPreview": true,
       },
       {
        "type": "dropdown",
        "name": "batchId",
        "startWithNewLine": false,
        "title": "Year",
        "isRequired": true,
        "requiredErrorText": "Please select year",
        "choices": [
         
        ]
       },
       {
        "type": "dropdown",
        "name": "sectionId",
        "startWithNewLine": false,
        "title": "Section",
        "isRequired": true,
        "requiredErrorText": "Please select section",
        "choices": [
         
        ]
       },
       {
        "type": "text",
        "name": "studentName",
        "title": "Student Name",
        "isRequired": true,
        "requiredErrorText": "Please select student name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentMiddleName",
        "startWithNewLine": false,
        "title": "Student Middle Name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentLastName",
        "startWithNewLine": false,
        "title": "Student Last Name",
        "isRequired": true,
        "requiredErrorText": "Please select student last name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "fatherName",
        "title": "Father Name",
        "isRequired": true,
        "requiredErrorText": "Please select father's name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "fatherMiddleName",
        "startWithNewLine": false,
        "title": "Father Middle Name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "fatherLastName",
        "startWithNewLine": false,
        "title": "Father Last Name",
        "isRequired": true,
        "requiredErrorText": "Please select father's last name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "motherName",
        "title": "Mother Name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "motherMiddleName",
        "startWithNewLine": false,
        "title": "Mother Middle Name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "motherLastName",
        "startWithNewLine": false,
        "title": "Mother Last Name",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "dateOfBirth",
        "title": "Date of Birth",
        "isRequired": true,
        "requiredErrorText": "Please select date of birth",
        "inputType": "date",
        "maxLength": 10
       },
       {
        "type": "dropdown",
        "name": "sex",
        "startWithNewLine": false,
        "title": "Gender",
        "isRequired": true,
        "requiredErrorText": "Please select gender",
        "choices": [
         {
          "value": "MALE",
          "text": "MALE"
         },
         {
          "value": "FEMALE",
          "text": "FEMALE"
         },
         {
          "value": "OTHER",
          "text": "OTHER"
         }
        ]
       },
       {
        "type": "text",
        "name": "placeOfBirth",
        "startWithNewLine": false,
        "title": "Place Of Birth",
        "maxLength": 255
       },
       {
        "type": "dropdown",
        "name": "religion",
        "title": "Religion",
        "isRequired": true,
        "requiredErrorText": "Please select religion",
        "choices": [
         {
          "value": "HINDU",
          "text": "HINDU"
         },
         {
          "value": "MUSLIM",
          "text": "MUSLIM"
         },
         {
          "value": "CHRISTIAN",
          "text": "CHRISTIAN"
         },
         {
          "value": "SIKH",
          "text": "SIKH"
         },
         {
          "value": "BUDH",
          "text": "BUDH"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "caste",
        "startWithNewLine": false,
        "title": "Caste",
        "isRequired": true,
        "requiredErrorText": "Please select caste",
        "choices": [
         {
          "value": "GENERAL",
          "text": "GENERAL"
         },
         {
          "value": "OBC",
          "text": "OTHER BACKWARD CASTE"
         },
         {
          "value": "SC",
          "text": "SCHEDULED CASTE"
         },
         {
          "value": "ST",
          "text": "SCHEDULED TRIBE"
         }
        ]
       },
       {
        "type": "text",
        "name": "subCaste",
        "startWithNewLine": false,
        "title": "Sub Caste",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentLocalAddress",
        "title": "Local Address",
        "isRequired": true,
        "requiredErrorText": "Please select local address",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentPermanentAddress",
        "startWithNewLine": false,
        "title": "Permanent Address",
        "isRequired": true,
        "requiredErrorText": "Please select permanent address",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "pinCode",
        "startWithNewLine": false,
        "title": "Pin Code",
        "maxLength": 255
       },
       {
        "type": "dropdown",
        "name": "state",
        "title": "State",
        "isRequired": true,
        "requiredErrorText": "Please select state",
        "choices": [
         
        ]
       },
       {
        "type": "dropdown",
        "name": "city",
        "startWithNewLine": false,
        "title": "City",
        "isRequired": true,
        "requiredErrorText": "Please select city",
        "choices": [
         
        ]
       },
       {
        "type": "text",
        "name": "studentPrimaryCellNumber",
        "startWithNewLine": false,
        "title": "Student Primary Cell Number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentAlternateCellNumber",
        "title": "Student Alternate Cell Number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentLandLinePhoneNumber",
        "startWithNewLine": false,
        "title": "Land Line Phone Number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentPrimaryEmailId",
        "startWithNewLine": false,
        "title": "Primary Email Id",
        "isRequired": true,
        "requiredErrorText": "Please select primary email id",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "studentAlternateEmailId",
        "title": "Alternate Email Id",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "fatherCellNumber",
        "startWithNewLine": false,
        "title": "Father's Cell Number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "fatherEmailId",
        "startWithNewLine": false,
        "title": "Father's Email Id",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "motherCellNumber",
        "title": "Mother's Cell Number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "motherEmailId",
        "startWithNewLine": false,
        "title": "Mother's Email Id",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "emergencyContactName",
        "startWithNewLine": false,
        "title": "Emergency Contact Person",
        "isRequired": true,
        "requiredErrorText": "Please select emergency contact person",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "emergencyContactCellNumber",
        "title": "Emergency Contact Cell Number",
        "isRequired": true,
        "requiredErrorText": "Please select emergency contact cell number",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "emergencyContactEmailId",
        "startWithNewLine": false,
        "title": "Emergency Contact Email Id",
        "validators": [
         {
          "type": "email"
         }
        ],
        "maxLength": 255
       },
       {
        "type": "dropdown",
        "name": "relationWithStudent",
        "startWithNewLine": false,
        "title": "Emergency Contact Relation With Student",
        "isRequired": true,
        "requiredErrorText": "Please select emergency contact relation with student",
        "choices": [
         {
          "value": "FATHER",
          "text": "FATHER"
         },
         {
          "value": "MOTHER",
          "text": "MOTHER"
         },
         {
          "value": "GUARDIAN",
          "text": "GUARDIAN"
         }
        ]
       }
      ],
      "title": "Personal Informaion"
     },
     {
      "name": "AcademicInfo",
      "elements": [
       {
        "type": "text",
        "name": "qualification",
        "title": "Highest Qualification",
        "isRequired": true,
        "requiredErrorText": "Please select highest qualification",
        "maxLength": 255
       },
       {
        "type": "text",
        "name": "yearOfPassing",
        "startWithNewLine": false,
        "title": "Year of Passing",
        "isRequired": true,
        "requiredErrorText": "Please select year of passing",
        "validators": [
         {
          "type": "numeric"
         }
        ],
        "maxLength": 4,
        "placeHolder": "YYYY"
       },
       {
        "type": "text",
        "name": "percentage",
        "startWithNewLine": false,
        "title": "Percentage of Last Qualification",
        "isRequired": true,
        "requiredErrorText": "Please select last percentage",
        "validators": [
         {
          "type": "numeric"
         }
        ],
        "maxLength": 3
       },
       {
        "type": "text",
        "name": "institution",
        "title": "Last College Attended",
        "isRequired": true,
        "requiredErrorText": "Please select last attended college name ",
        "maxLength": 255
       }
      ],
      "title": "Academic Information"
     },
     {
      "name": "Documents",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "uploadDocuments",
        "title": "Upload Documents",
        "templateElements": [
        //  {
        //   "type": "text",
        //   "name": "question3",
        //   "title": "Document Name",
        //   "maxLength": 255
        //  },
         {
          "type": "file",
          "name": "selectFile",
          "startWithNewLine": false,
          "title": "Select File",
          "isRequired": false,
          "requiredErrorText": "Please select a file",
          "showPreview": false,
          "allowImagesPreview": false,
          "maxSize": 0,
          "needConfirmRemoveFile": true,
          "storeDataAsText": false
         }
        ]
       }
      ],
      "title": "Documents"
     }
    ]
   };

   export const SurveyJson = {
    ADMISSION_STATE_FORM
   }