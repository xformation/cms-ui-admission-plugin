
const ADMISSION_STATE_FORM =
{
    "pages": [
     {
      "name": "PersonalInfo",
      "elements": [
       {
        "type": "file",
        "name": "question3",
        "imageHeight": "100",
        "imageWidth": "100",
        "maxSize": 0,
        "needConfirmRemoveFile": true
       },
       {
        "type": "dropdown",
        "name": "batchId",
        "startWithNewLine": false,
        "title": "Year",
        "isRequired": true,
        "requiredErrorText": "Please select year",
        "choices": [
         "item1",
         "item2",
         "item3"
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
         "item1",
         "item2",
         "item3"
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
        "type": "html",
        "name": "dateOfBirth",
        "isRequired": true,
        "html": "<label>Date of Birth</lable><input type=\"date\"/>"
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
         "item1",
         "item2",
         "item3"
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
         "item1",
         "item2",
         "item3"
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
        "name": "question4",
        "startWithNewLine": false
       }
      ],
      "title": "Personal Informaion"
     },
     {
      "name": "AcademicInfo",
      "elements": [
       {
        "type": "text",
        "name": "Address",
        "isRequired": true,
        "requiredErrorText": "Please enter address",
        "maxLength": 255
       }
      ],
      "title": "Academic Information"
     },
     {
      "name": "Documents",
      "elements": [
       {
        "type": "file",
        "name": "Document 1",
        "maxSize": 0
       }
      ],
      "title": "Documents"
     }
    ]
   };

   export const SurveyJson = {
    ADMISSION_STATE_FORM
   }