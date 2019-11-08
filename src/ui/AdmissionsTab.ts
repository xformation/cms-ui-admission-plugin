import init from '../domain/admission/admissionstab/AdmissionsTabApp';

export class AdmissionsTab {
  static templateUrl = '/partials/admissionstab.html';
  constructor() {
    init();
  }
}
