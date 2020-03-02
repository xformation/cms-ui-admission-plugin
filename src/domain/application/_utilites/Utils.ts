import axios from 'axios';
import {config} from '../../../config';

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
