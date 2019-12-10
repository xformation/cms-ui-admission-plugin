export const commonFunctions = {
  getRequestOptions,
  validateEmail,
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
