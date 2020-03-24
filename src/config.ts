const graphqlUrl = 'http://100.81.5.25:9094';
const loggedInUserUrl = 'http://100.81.5.25:3000';
const ssmWorkflowUrl = 'http://100.81.5.25:8095';
const jsrOakUrl = 'http://100.81.5.25:8093';
const preferenceUrl = 'http://100.81.5.25:9091';
const backEndUrl = 'http://100.81.5.25:8080';

const ADMISSION_ENQUIRY_SSM =
  '{ "states" : [' +
  '{ "ssmId": "admenq-1", "name": "EnquiryReceived", "target": "PersonalInfo","event": "PersonalInfo","initial": true },' +
  '{ "ssmId": "admenq-1", "name": "EnquiryReceived", "target": "Lost","event": "LostFromEnquiryReceived" },' +
  '{ "ssmId": "admenq-1", "name": "PersonalInfo", "target": "AcademicInfo","event": "AcademicInfo" },' +
  '{ "ssmId": "admenq-1", "name": "PersonalInfo", "target": "EnquiryReceived","event": "BackToEnquiryReceived" },' +
  '{ "ssmId": "admenq-1", "name": "PersonalInfo", "target": "Lost","event": "LostFromPersonalInfo" },' +
  '{ "ssmId": "admenq-1", "name": "AcademicInfo", "target": "Documents","event": "Documents" },' +
  '{ "ssmId": "admenq-1", "name": "AcademicInfo", "target": "PersonalInfo","event": "BackToPersonalInfo" },' +
  '{ "ssmId": "admenq-1", "name": "AcademicInfo", "target": "Lost","event": "LostFromAcademicInfo" },' +
  '{ "ssmId": "admenq-1", "name": "Documents", "target": "AdmissionGranted","event": "GrantAdmission"  },' +
  '{ "ssmId": "admenq-1", "name": "Documents", "target": "AcademicInfo","event": "BackToAcademicInfo" },' +
  '{ "ssmId": "admenq-1", "name": "Documents", "target": "Lost","event": "LostFromDocuments" },' +
  '{ "ssmId": "admenq-1", "name": "AdmissionGranted", "event": "CompleteAdmission", "end": true },' +
  '{ "ssmId": "admenq-1", "name": "Lost", "event": "Lost", "end": true } ]}';

const ssmId = 'admenq-1';

export const config = {
  SSM_ID: ssmId,
  IS_MS_ONEDRIVE_STORAGE: 'YES',
  ADMISSION_ENQUIRY_SSM_JSON: ADMISSION_ENQUIRY_SSM,
  GRAPHQL_URL: graphqlUrl + '/graphql',
  LOGGED_IN_USER_URL: loggedInUserUrl + '/api/user',

  SSM_CREATE_URL: ssmWorkflowUrl + '/ssm/states/createByJson',
  SSM_CUR_STATE: ssmWorkflowUrl + '/ssm/states/currentState',
  SSM_LIST_STATES: ssmWorkflowUrl + '/ssm/states/listBySsmId',
  SSM_LIST_STATES_BY_MACHINE_ID: ssmWorkflowUrl + '/ssm/states/listStates',
  SSM_SEND_EVENT: ssmWorkflowUrl + '/ssm/states/sendEvent',
  JSR_OAK_URL: jsrOakUrl,

  PREF_GET_BATCH_URL: preferenceUrl + '/api/batch-by-filters',
  PREF_GET_SECTION_URL: preferenceUrl + '/api/section-by-filters',
  PREF_STATES_URL: preferenceUrl + '/api/states',
  PREF_CITY_URL: preferenceUrl + '/api/cities',

  BACKEND_GRANT_ADMISSION: backEndUrl + '/api/cms-grant-admission-to-student',
  BACKEND_CMS_DOCUMENTS_URL: backEndUrl + '/api/cmsdocuments',
  CMS_GLOBAL_CONFIG_URL: backEndUrl + '/api/cmssettings',
};
