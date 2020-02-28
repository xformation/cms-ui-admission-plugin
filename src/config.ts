const graphqlUrl = 'http://localhost:9094';
const loggedInUserUrl = 'http://localhost:3000';
const ssmWorkflowUrl = 'http://localhost:8095';
const jsrOakUrl = 'http://localhost:8093';

const ADMISSION_ENQUIRY_SSM =
  '{ "states" : [' +
  '{ "ssmId": "admenq-1", "name": "EnquiryReceived", "target": "PersonalInfo","event": "SubmitAdmEnq","initial": true },' +
  '{ "ssmId": "admenq-1", "name": "EnquiryReceived", "target": "Lost","event": "LostFromEnquiryReceived" },' +
  '{ "ssmId": "admenq-1", "name": "PersonalInfo", "target": "AcademicInfo","event": "SubmitPi" },' +
  '{ "ssmId": "admenq-1", "name": "PersonalInfo", "target": "Lost","event": "LostFromPersonalInfo" },' +
  '{ "ssmId": "admenq-1", "name": "AcademicInfo", "target": "Documents","event": "SubmitAi" },' +
  '{ "ssmId": "admenq-1", "name": "AcademicInfo", "target": "Lost","event": "LostFromAcademicInfo" },' +
  '{ "ssmId": "admenq-1", "name": "Documents", "target": "GrantAdmission","event": "Grant", "end": true },' +
  '{ "ssmId": "admenq-1", "name": "Documents", "target": "Lost","event": "LostFromDocuments" },' +
  '{ "ssmId": "admenq-1", "name": "Lost", "event": "Lost", "end": true } ]}';

const ssmId = 'admenq-1';

export const config = {
  SSM_ID: ssmId,
  ADMISSION_ENQUIRY_SSM_JSON: ADMISSION_ENQUIRY_SSM,
  GRAPHQL_URL: graphqlUrl + '/graphql',
  LOGGED_IN_USER_URL: loggedInUserUrl + '/api/user',

  SSM_CREATE_URL: ssmWorkflowUrl + '/ssm/states/createByJson',
  SSM_CUR_STATE: ssmWorkflowUrl + '/ssm/states/currentState',
  SSM_LIST_STATES: ssmWorkflowUrl + '/ssm/states/listBySsmId',
  SSM_LIST_STATES_BY_MACHINE_ID: ssmWorkflowUrl + '/ssm/states/listStates',
  SSM_SEND_EVENT: ssmWorkflowUrl + '/ssm/states/sendEvent',
  JSR_OAK_URL: jsrOakUrl,
};
