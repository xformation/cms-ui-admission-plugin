export const AdmissionServices = {
  getAdmissionDepartments,
  getAdmissionYears,
  getAdmissionBranches,
  getAdmissionStates,
  getAdmissionCities,
  getAdmissionCourses,
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

function getAdmissionDepartments() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}departments`, requestOptions).then(response => response.json());
}

function getAdmissionYears() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}batches`, requestOptions).then(response => response.json());
}

function getAdmissionBranches() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}branches`, requestOptions).then(response => response.json());
}

function getAdmissionStates() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}states`, requestOptions).then(response => response.json());
}

function getAdmissionCities() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}cities`, requestOptions).then(response => response.json());
}

function getAdmissionCourses() {
  let requestOptions = getRequestOptions('GET');
  return fetch(`${url}courses`, requestOptions).then(response => response.json());
}
