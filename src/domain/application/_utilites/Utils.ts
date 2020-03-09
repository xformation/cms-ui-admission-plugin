import axios from 'axios';
import {config} from '../../../config';
import * as moment from 'moment';

export const Utils: any = {
  getFileNodePath,
  getSSMachineId,
  addAtIndex,
  firstLatterCapital,
  getReactTableColObj,
  getStatesSet,
  arrayItemHasKeyValue,
  arrayHasObject,
  getObjectById,
  postReq,
  getReq,
  createNodeInOak,
  sendSsmEvent,
  getInput,
};

function getFileNodePath(asignId: any, subId: any, studentId: any) {
  let path = '/synectiks/cms/assignments/' + asignId;
  if (subId) {
    path += '/sub/' + subId;
  }
  if (studentId) {
    path += '/student/' + studentId;
  }
  return path;
}

function getSSMachineId(ssmid: any, enqId: any) {
  const msId = ssmid + ':' + enqId;
  console.log('Machine id ::: ', msId);
  return msId;
}

function addAtIndex(arr: any, index: any, item: any) {
  arr.splice(index, 0, item);
}

function firstLatterCapital(str: any) {
  return str.replace(/^\w/, (c: any) => c.toUpperCase());
}

function getReactTableColObj(key: any, acesor: any) {
  const upper = firstLatterCapital(key);
  return {
    Header: upper,
    accessor: acesor,
    sortable: true,
    filterable: true,
  };
}

function getStatesSet(stateData: any) {
  const arr: any = [];
  console.log('input: ', stateData);
  stateData.forEach((item: any) => {
    if (item.initial) {
      addAtIndex(arr, 0, item);
    } else {
      let indx = arrayItemHasKeyValue(arr, 'name', item.target);
      if (indx >= 0) {
        addAtIndex(arr, indx, item);
      } else {
        arr.push(item);
      }
    }
  });
  console.log('output: ', arr);
  return arr;
}

function arrayItemHasKeyValue(arr: any, key: any, val: any) {
  const res = {res: -1};
  arr.map((item: any, indx: any) => {
    if (item[key] === val) {
      res.res = indx;
    }
    return item;
  });
  console.log('Res: ', res.res);
  return res.res;
}

function arrayHasObject(arr: any, obj: any) {
  const res = {res: false};
  arr.map((item: any) => {
    if (item.Header === obj.Header) {
      res.res = true;
    }
    return item;
  });
  console.log('Res: ', res.res);
  return res.res;
}

function getObjectById(arr: any, val: any) {
  const obj: any = {};
  arr.forEach((s: any) => {
    if (s.id === val) {
      obj.item = s;
    }
  });
  return obj.item;
}

function postReq(url: any, data: any, opts = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, opts)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error('POST Err: ', error);
        reject(error);
      });
  });
}

function getReq(url: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error('GET Err: ', error);
        reject(error);
      });
  });
}

function createNodeInOak(url: any, nodePath: any, file: any, sPath: any) {
  const data = new FormData();
  data.append('parentPath', nodePath);
  if (file && sPath) {
    file.path = sPath;
    data.append('json', JSON.stringify(file));
    data.append('cls', 'com.synectiks.commons.entities.oak.OakFileNode');
  } else {
    data.append('json', file);
  }
  data.append('nodeName', nodePath.substring(nodePath.lastIndexOf('/') + 1));
  postReq(url, data, {})
    .then((res: any) => {
      console.log('Successfully created node: ', res.data);
    })
    .catch(err => {
      console.error('Failed to fetch ' + url, err);
    });
}

async function sendSsmEvent(ssmEventId: any, enqId: any) {
  const machineId = getSSMachineId(config.SSM_ID, enqId);
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var formdata = new FormData();
  formdata.append('machineId', machineId);
  formdata.append('event', ssmEventId);

  await postReq(config.SSM_SEND_EVENT, formdata)
    .then((res: any) => {
      console.log('Send Event - current State: ', res.data);
    })
    .catch((err: any) => {
      console.error('Send Event - Failed to fetch ', err);
    });
}

function getInput(
  srcObject: any,
  branchId: any,
  departmentId: any,
  objId: any,
  admissionNo: any,
  academicYearId: any
) {
  let inputObj = {
    id: objId,
    studentName: srcObject.getQuestionByName('studentName').questionValue,
    studentMiddleName: srcObject.getQuestionByName('studentMiddleName').questionValue,
    studentLastName: srcObject.getQuestionByName('studentLastName').questionValue,
    fatherName: srcObject.getQuestionByName('fatherName').questionValue,
    fatherMiddleName: srcObject.getQuestionByName('fatherMiddleName').questionValue,
    fatherLastName: srcObject.getQuestionByName('fatherLastName').questionValue,
    motherName: srcObject.getQuestionByName('motherName').questionValue,
    motherMiddleName: srcObject.getQuestionByName('motherMiddleName').questionValue,
    motherLastName: srcObject.getQuestionByName('motherLastName').questionValue,
    // studentAadharNo: srcObject.getQuestionByName("studentAadharNo").questionValue,
    // studentPanNo: srcObject.getQuestionByName("studentPanNo").questionValue,
    // studentSocialSecurityNo: srcObject.getQuestionByName("studentSocialSecurityNo").questionValue,
    // studentTaxReferenceNo: srcObject.getQuestionByName("studentTaxReferenceNo").questionValue,
    // studentBplNo: srcObject.getQuestionByName("studentBplNo").questionValue,
    // studentDrivingLicenseNo: srcObject.getQuestionByName("studentDrivingLicenseNo").questionValue,
    // studentPassportNo: srcObject.getQuestionByName("studentPassportNo").questionValue,
    placeOfBirth: srcObject.getQuestionByName('placeOfBirth').questionValue,
    religion: srcObject.getQuestionByName('religion').questionValue,
    caste: srcObject.getQuestionByName('caste').questionValue,
    subCaste: srcObject.getQuestionByName('subCaste').questionValue,
    sex:
      srcObject.getQuestionByName('sex').questionValue === ''
        ? null
        : srcObject.getQuestionByName('sex').questionValue,
    studentLocalAddress: srcObject.getQuestionByName('studentLocalAddress').questionValue,
    studentPermanentAddress: srcObject.getQuestionByName('studentPermanentAddress')
      .questionValue,
    city: srcObject.getQuestionByName('city').questionValue,
    state: srcObject.getQuestionByName('state').questionValue,
    pinCode: srcObject.getQuestionByName('pinCode').questionValue,
    studentPrimaryCellNumber: srcObject.getQuestionByName('studentPrimaryCellNumber')
      .questionValue,
    studentAlternateCellNumber: srcObject.getQuestionByName('studentAlternateCellNumber')
      .questionValue,
    studentLandLinePhoneNumber: srcObject.getQuestionByName('studentLandLinePhoneNumber')
      .questionValue,
    studentPrimaryEmailId: srcObject.getQuestionByName('studentPrimaryEmailId')
      .questionValue,
    studentAlternateEmailId: srcObject.getQuestionByName('studentAlternateEmailId')
      .questionValue,
    relationWithStudent: srcObject.getQuestionByName('relationWithStudent').questionValue,
    emergencyContactName: srcObject.getQuestionByName('emergencyContactName')
      .questionValue,
    // emergencyContactMiddleName: srcObject.getQuestionByName("emergencyContactMiddleName").questionValue,
    // emergencyContactLastName: srcObject.getQuestionByName("emergencyContactLastName").questionValue,
    emergencyContactCellNumber: srcObject.getQuestionByName('emergencyContactCellNumber')
      .questionValue,
    // emergencyContactLandLinePhoneNumber: srcObject.getQuestionByName("emergencyContactLandLinePhoneNumber").questionValue,
    emergencyContactEmailId: srcObject.getQuestionByName('emergencyContactEmailId')
      .questionValue,
    // studentImagePath: srcObject.getQuestionByName("studentImagePath").questionValue,
    admissionNo: admissionNo,
    // enrollmentNo: srcObject.getQuestionByName("enrollmentNo").questionValue,
    // rollNo: srcObject.getQuestionByName("rollNo").questionValue,
    studentType: srcObject.getQuestionByName('studentType').questionValue,
    fatherCellNumber: srcObject.getQuestionByName('fatherCellNumber').questionValue,
    fatherEmailId: srcObject.getQuestionByName('fatherEmailId').questionValue,
    // fatherOccupation: srcObject.getQuestionByName("fatherOccupation").questionValue,
    // fatherOfficeEmailId: srcObject.getQuestionByName("fatherOfficeEmailId").questionValue,
    // fatherOfficeAddress: srcObject.getQuestionByName("fatherOfficeAddress").questionValue,
    // fatherOfficeCellNumber: srcObject.getQuestionByName("fatherOfficeCellNumber").questionValue,
    // fatherOfficeLandLinePhoneNumber: srcObject.getQuestionByName("fatherOfficeLandLinePhoneNumber").questionValue,
    // fatherAadharNo: srcObject.getQuestionByName("fatherAadharNo").questionValue,
    // fatherPanNo: srcObject.getQuestionByName("fatherPanNo").questionValue,
    // fatherSocialSecurityNo: srcObject.getQuestionByName("fatherSocialSecurityNo").questionValue,
    // fatherTaxReferenceNo: srcObject.getQuestionByName("fatherTaxReferenceNo").questionValue,
    // fatherBplNo: srcObject.getQuestionByName("fatherBplNo").questionValue,
    // fatherDrivingLicenseNo: srcObject.getQuestionByName("fatherDrivingLicenseNo").questionValue,
    // fatherPassportNo: srcObject.getQuestionByName("fatherPassportNo").questionValue,
    // fatherImagePath: srcObject.getQuestionByName("fatherImagePath").questionValue,
    motherCellNumber: srcObject.getQuestionByName('motherCellNumber').questionValue,
    motherEmailId: srcObject.getQuestionByName('motherEmailId').questionValue,
    // motherOccupation: srcObject.getQuestionByName("motherOccupation").questionValue,
    // motherOfficeEmailId: srcObject.getQuestionByName("motherOfficeEmailId").questionValue,
    // motherOfficeAddress: srcObject.getQuestionByName("motherOfficeAddress").questionValue,
    // motherOfficeCellNumber: srcObject.getQuestionByName("motherOfficeCellNumber").questionValue,
    // motherOfficeLandLinePhoneNumber: srcObject.getQuestionByName("motherOfficeLandLinePhoneNumber").questionValue,
    // motherAadharNo: srcObject.getQuestionByName("motherAadharNo").questionValue,
    // motherPanNo: srcObject.getQuestionByName("motherPanNo").questionValue,
    // motherSocialSecurityNo: srcObject.getQuestionByName("motherSocialSecurityNo").questionValue,
    // motherTaxReferenceNo: srcObject.getQuestionByName("motherTaxReferenceNo").questionValue,
    // motherBplNo: srcObject.getQuestionByName("motherBplNo").questionValue,
    // motherDrivingLicenseNo: srcObject.getQuestionByName("motherDrivingLicenseNo").questionValue,
    // motherPassportNo: srcObject.getQuestionByName("motherPassportNo").questionValue,
    // motherImagePath: srcObject.getQuestionByName("motherImagePath").questionValue,
    // guardianName: srcObject.getQuestionByName("guardianName").questionValue,
    // guardianMiddleName: srcObject.getQuestionByName("guardianMiddleName").questionValue,
    // guardianLastName: srcObject.getQuestionByName("guardianLastName").questionValue,
    // guardianAddress: srcObject.getQuestionByName("guardianAddress").questionValue,
    // guardianCellNumber: srcObject.getQuestionByName("guardianCellNumber").questionValue,
    // guardianLandLinePhoneNumber: srcObject.getQuestionByName("guardianLandLinePhoneNumber").questionValue,
    // guardianEmailId: srcObject.getQuestionByName("guardianEmailId").questionValue,
    // guardianOccupation: srcObject.getQuestionByName("guardianOccupation").questionValue,
    // guardianOfficeEmailId: srcObject.getQuestionByName("guardianOfficeEmailId").questionValue,
    // guardianOfficeAddress: srcObject.getQuestionByName("guardianOfficeAddress").questionValue,
    // guardianOfficeCellNumber: srcObject.getQuestionByName("guardianOfficeCellNumber").questionValue,
    // guardianOfficeLandLinePhoneNumber: srcObject.getQuestionByName("guardianOfficeLandLinePhoneNumber").questionValue,
    // guardianImagePath: srcObject.getQuestionByName("guardianImagePath").questionValue,
    // isGuardianSponsorAgency: srcObject.getQuestionByName("isGuardianSponsorAgency").questionValue,
    // sponsorAgencyName: srcObject.getQuestionByName("sponsorAgencyName").questionValue,
    // sponsorAgencyRegistrationNo: srcObject.getQuestionByName("sponsorAgencyRegistrationNo").questionValue,
    // sponsorAgencyAddress: srcObject.getQuestionByName("sponsorAgencyAddress").questionValue,
    // sponsorAgencyCellNumber: srcObject.getQuestionByName("sponsorAgencyCellNumber").questionValue,
    // sponsorAgencyLandLineNumber: srcObject.getQuestionByName("sponsorAgencyLandLineNumber").questionValue,
    // sponsorAgencyEmailId: srcObject.getQuestionByName("sponsorAgencyEmailId").questionValue,
    // sponsorAgencyAppointeeName: srcObject.getQuestionByName("sponsorAgencyAppointeeName").questionValue,
    // sponsorAgencyAppointeeDesignation: srcObject.getQuestionByName("sponsorAgencyAppointeeDesignation").questionValue,
    // sponsorAgencyAppointeeCellNumber: srcObject.getQuestionByName("sponsorAgencyAppointeeCellNumber").questionValue,
    // sponsorAgencyAppointeeLandLineNumber: srcObject.getQuestionByName("sponsorAgencyAppointeeLandLineNumber").questionValue,
    // sponsorAgencyAppointeeEmailId: srcObject.getQuestionByName("sponsorAgencyAppointeeEmailId").questionValue,
    // sponsorAgencyAppointeeOfficeAddress: srcObject.getQuestionByName("sponsorAgencyAppointeeOfficeAddress").questionValue,
    // isPhysicallyChallenged: srcObject.getQuestionByName("isPhysicallyChallenged").questionValue,
    // detailsOfDisability: srcObject.getQuestionByName("detailsOfDisability").questionValue,
    // disabilityCertificateNo: srcObject.getQuestionByName("disabilityCertificateNo").questionValue,
    // disabilityCertificateIssueAuthority: srcObject.getQuestionByName("disabilityCertificateIssueAuthority").questionValue,
    // disabilityCertificateIssueDate: srcObject.getQuestionByName("disabilityCertificateIssueDate").questionValue,
    // percentagOfDisability: srcObject.getQuestionByName("percentagOfDisability").questionValue,
    // bloodGroup: srcObject.getQuestionByName("bloodGroup").questionValue,
    // vaccinationDetails: srcObject.getQuestionByName("vaccinationDetails").questionValue,
    // otherMedicalDetails: srcObject.getQuestionByName("otherMedicalDetails").questionValue,
    status: 'ACTIVE',

    // comments: srcObject.getQuestionByName("comments").questionValue,
    departmentId: departmentId,
    batchId: srcObject.getQuestionByName('batchId').questionValue,
    sectionId: srcObject.getQuestionByName('sectionId').questionValue,
    branchId: branchId,
    academicYearId: academicYearId,
    // strDisabilityCertificateIssueDate: srcObject.getQuestionByName("strDisabilityCertificateIssueDate"),
    strDateOfBirth:
      srcObject.getQuestionByName('dateOfBirth').questionValue !== null &&
      srcObject.getQuestionByName('dateOfBirth').questionValue !== undefined &&
      srcObject.getQuestionByName('dateOfBirth').questionValue !== ''
        ? moment(srcObject.getQuestionByName('dateOfBirth').questionValue).format(
            'DD-MM-YYYY'
          )
        : null,
  };
  return inputObj;
}
