import * as React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import AdmissionEnquiryPage from './EnquiryPage';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement> {
  [data: string]: any;
  totalRecords?: number | string;
  type?: string;
  source?: string;
  sourceOfApplication?: string;
  user?: any;
}

export class EnquiryGrid<T = {[data: string]: any}> extends React.Component<
  AdmissionEnquiryProps,
  any
> {
  constructor(props: AdmissionEnquiryProps) {
    super(props);
    this.state = {
      list: this.props.data,
      totalRecords: this.props.totalRecords,
      type: this.props.type,
      isModalOpen: false,
      enquiryObj: {},
      source: this.props.source,
      sourceOfApplication: this.props.sourceOfApplication,
      user: this.props.user,
    };
    this.updateEnquiryList = this.updateEnquiryList.bind(this);
  }

  showDetail(e: any, bShow: boolean, enquiryObj: any) {
    e && e.preventDefault();
    this.setState(() => ({
      isModalOpen: bShow,
      enquiryObj: enquiryObj,
      source: this.props.source,
      sourceOfApplication: this.props.sourceOfApplication,
    }));
  }

  createRows(objAry: any) {
    const {source} = this.state;
    console.log('createRows() - Enquiry list on Grid page:  ', objAry);
    if (objAry === undefined || objAry === null) {
      return;
    }
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let i = 0; i < mutateResLength; i++) {
      const admissionEnquiry = objAry[i];
      retVal.push(
        <tr>
          <td>{admissionEnquiry.id}</td>
          <td>
            {admissionEnquiry.studentName}&nbsp;{admissionEnquiry.studentMiddleName}&nbsp;
            {admissionEnquiry.studentLastName}{' '}
          </td>
          <td>{admissionEnquiry.cellPhoneNo}</td>
          <td>{admissionEnquiry.landLinePhoneNo}</td>
          <td>{admissionEnquiry.emailId}</td>
          <td>{admissionEnquiry.enquiryStatus}</td>
          <td>{admissionEnquiry.strCreatedOn}</td>
          <td>
            {admissionEnquiry.enquiryStatus !== 'CONVERTED_TO_ADMISSION' &&
              admissionEnquiry.enquiryStatus !== 'DECLINED' && (
                <button
                  className="btn btn-primary"
                  onClick={e => this.showDetail(e, true, admissionEnquiry)}
                >
                  {source !== 'ADMISSION_PAGE' ? 'Edit' : 'Convert To Admission'}
                </button>
              )}
          </td>
        </tr>
      );
    }
    return retVal;
  }

  async updateEnquiryList(updatedEnquiryList: any) {
    this.setState({
      list: updatedEnquiryList,
    });
  }

  render() {
    const {data} = this.props;
    const {
      list,
      totalRecords,
      type,
      isModalOpen,
      enquiryObj,
      source,
      sourceOfApplication,
      user,
    } = this.state;
    return (
      <main>
        <Modal isOpen={isModalOpen} className="react-strap-modal-container">
          <ModalHeader>
            {source !== 'ADMISSION_PAGE' ? 'Edit Admission Enquiry' : 'Grant Admission'}{' '}
          </ModalHeader>
          <ModalBody className="modal-content">
            <AdmissionEnquiryPage
              onSaveUpdate={this.updateEnquiryList}
              user={user}
              operationType={'EDIT'}
              enquiryObject={enquiryObj}
              origin={source}
              sourceOfApplication={sourceOfApplication}
            ></AdmissionEnquiryPage>
            <div
              className="text-center"
              style={{marginLeft: '140px', marginTop: '-35px'}}
            >
              <button
                className="btn btn-danger border-bottom"
                onClick={e => this.showDetail(e, false, {})}
              >
                Cancel
              </button>
            </div>
          </ModalBody>
        </Modal>
        <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
          {source !== 'ADMISSION_PAGE' && (
            <span style={{fontSize: '13px', color: 'Blue'}}>
              {type} : {totalRecords}
            </span>
          )}
        </div>
        <div
          style={{width: '100%', height: '250px', marginBottom: '10px', overflow: 'auto'}}
        >
          <table id="admissionEnquiryTable" className="striped-table fwidth bg-white p-2">
            <thead>
              <tr>
                <th>Enquiry Id</th>
                <th>Student Name</th>
                <th>Cell Phone No</th>
                <th>Land Line Phone No</th>
                <th>Email Id</th>
                <th>Status</th>
                <th>Enquiry Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{this.createRows(list)}</tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default EnquiryGrid;
