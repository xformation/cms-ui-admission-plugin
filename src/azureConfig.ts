export const azureConfig = {
  APP_NAME: 'cms-staff',
  MS_GRAPH_URL: 'https://graph.microsoft.com/v1.0/me/drive/items',
  REDIRECT_URL: 'http://localhost:3000/plugins/ems-admission/page/home',
  MS_CLOUD_PARENT_ID: '01YPZBAA56Y2GOVW7725BZO354PWSELRRZ',
  APP_ID: 'a66698fd-60ab-4b27-831a-fa4a402da563',
  CLIENT_ID: 'a66698fd-60ab-4b27-831a-fa4a402da563', // this is known as Application id as well
  TENANT_ID: 'dd742425-ee86-4b9b-92e8-6ea07ab72d0e', // this is known as Directory id as well
  CLIENT_SECRATE: 'c_g:@m.COyg30JQAPXntXRRdjd1LNsB0',
  scopes: [
    'User.Read',
    'Files.Read',
    'Files.Read.All',
    'Files.Read.Selected',
    'Files.ReadWrite',
    'Files.ReadWrite.All',
    'Files.ReadWrite.AppFolder',
    'Files.ReadWrite.Selected',
  ],
};
