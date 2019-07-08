import init from '../domain/application/AdmissionApplicationPage/AdmissionsApp';

export class ApplicationsPage {
  static templateUrl = '/partials/applications.html';
  constructor() {
    init();
  }
}
