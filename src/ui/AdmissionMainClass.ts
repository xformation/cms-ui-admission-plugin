import init from '../domain/application/TabApp';

export class AdmissionMainClass {
  static templateUrl = '/partials/admissionmain.html';
  constructor() {
    init();
  }
}
