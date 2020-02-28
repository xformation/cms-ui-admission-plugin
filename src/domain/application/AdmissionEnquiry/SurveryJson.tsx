
const ADMISSION_STATE_FORM =
{
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "studentName",
        "title": "Student First Name",
        "isRequired": true,
        "requiredErrorText": "Student first name required",
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
        "valueName": "studentLastName",
        "isRequired": true,
        "requiredErrorText": "Student last name required",
        "maxLength": 255
       }
      ],
      "title": "Personal Informaion"
     },
     {
      "name": "page2",
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
      "name": "page3",
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