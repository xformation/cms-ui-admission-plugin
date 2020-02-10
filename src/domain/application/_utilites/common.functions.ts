export const commonFunctions = {
  getRequestOptions,
  validateEmail,
  phoneNumber,
  landlineNo,
  changeTextBoxBorderToError,
  restoreTextBoxBorderToNormal,
};

function getRequestOptions(type: any, extraHeaders: any, body: any) {
  let requestOptions: any = {};
  requestOptions = {
    method: type,
    headers: {
      ...extraHeaders,
    },
  };
  if (body) {
    requestOptions.body = body;
  }
  return requestOptions;
}

function validateEmail(emailId: any) {
  const regx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
  return regx.test(emailId);
}

function phoneNumber(cellPhoneNo: any) {
  const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return phoneno.test(cellPhoneNo);
}
function landlineNo(landLinePhoneNo: any) {
  const landlineno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
  return landlineno.test(landLinePhoneNo);
}

function changeTextBoxBorderToError(textBoxValue: any, objName: any) {
  if (textBoxValue.trim() === '') {
    const obj: any = document.querySelector('#' + objName);
    obj.className = 'gf-form-input fwidth input-textbox-error';
  }
  if (objName === 'emailId') {
    const obj: any = document.querySelector('#' + objName);
    obj.className = 'gf-form-input fwidth input-textbox-error';
  }
  if (objName === 'cellPhoneNo') {
    const obj: any = document.querySelector('#' + objName);
    obj.className = 'gf-form-input fwidth input-textbox-error';
  }
  if (objName === 'landLinePhoneNo') {
    const obj: any = document.querySelector('#' + objName);
    obj.className = 'gf-form-input fwidth input-textbox-error';
  }
}

function restoreTextBoxBorderToNormal(objName: any) {
  const obj: any = document.querySelector('#' + objName);
  obj.className = 'gf-form-input fwidth';
}
