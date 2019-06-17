export const StudentServices = {
  getStudentDepartments,
  getStudentYears,
  getStudentBranches,
  getStudentSections,
  getStudentTypes,
};

const url = 'http://18.234.66.133:8080/api/';

function getRequestOptions(method: any) {
  let requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return requestOptions;
}

function getStudentDepartments() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}departments`, requestOptions).then(response => response.json());
}

function getStudentYears() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}batches`, requestOptions).then(response => response.json());
}

function getStudentBranches() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}branches`, requestOptions).then(response => response.json());
}

function getStudentSections() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}sections`, requestOptions).then(response => response.json());
}

function getStudentTypes() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}studenttypes`, requestOptions).then(response => response.json());
}
