import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    totalRecords?: number | string;
    type?: string;
}

export class AdmissionGrid<T = {[data: string]: any}> extends React.Component<AdmissionEnquiryProps, any> {
    constructor(props: AdmissionEnquiryProps) {
        super(props);
        this.state = {
            list: this.props.data,
            totalRecords: this.props.totalRecords,
            type: this.props.type,
            isModalOpen: false,
            enquiryObj: {}
        };
    }


    showDetail(e: any, bShow: boolean, enquiryObj: any) {
        e && e.preventDefault();
        this.setState(() => ({
            isModalOpen: bShow,
            enquiryObj: enquiryObj
        }));
    }

    createRows(objAry: any) {
        console.log("3 - Enquiry list ", objAry.getAdmissionEnquiryList);
        if(objAry === undefined || objAry === null) {
            return;
        }
        const mutateResLength = objAry.getAdmissionEnquiryList.length;
        const retVal = [];
          for (let i = 0; i < mutateResLength; i++) {
            const admissionEnquiry = objAry.getAdmissionEnquiryList[i];
            retVal.push(
              <tr >
                <td>{admissionEnquiry.id}</td>
                <td>{admissionEnquiry.studentName}&nbsp;{admissionEnquiry.studentMiddleName}&nbsp;{admissionEnquiry.studentLastName} </td>
                <td>{admissionEnquiry.cellPhoneNo}</td>
                <td>{admissionEnquiry.landLinePhoneNo}</td>
                <td>{admissionEnquiry.emailId}</td>
                <td>{admissionEnquiry.enquiryStatus}</td>
                <td>{admissionEnquiry.strCreatedOn}</td>
                <td>
                  <button className="btn btn-primary" onClick={e => this.showDetail(e, true, admissionEnquiry)}>Edit</button>
                </td>
    
              </tr>
            );
          }
        return retVal;
    }

    render() {
        const {data} = this.props
        const {list, totalRecords, type, isModalOpen, enquiryObj} = this.state;
        return (
            <main>
                <Modal isOpen={isModalOpen} className="react-strap-modal-container">
                    <ModalHeader>Edit Admission Enquiry</ModalHeader>
                    <ModalBody className="modal-content">
                        {/* <AdmissionApplicationPage operationType={"EDIT"} enquiryObject={enquiryObj}></AdmissionApplicationPage> */}
                        <div className="text-center" style={{marginLeft:'222px', marginTop:'-34px'}}>
                            <button className="btn btn-danger border-bottom" onClick={(e) => this.showDetail(e, false, {})}>Cancel</button>
                        </div>
                    </ModalBody>
                </Modal>
                <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
                    <span style={{ fontSize: "13px", color: "Blue"}}>{type} : {totalRecords}</span>
                </div>
                <div style={{width:'100%', height:'250px', overflow:'auto'}}>
                    <table id="admissionEnquiryTable" className="striped-table fwidth bg-white p-2">
                        <thead>
                            <tr>
                                <th>Admission No</th>
                                <th>Source of Application</th>
                                <th>Source ID</th>
                                <th>Application Date</th>
                                <th>Admission Granted Date</th>
                                <th>Status</th>
                                <th>Comments</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.createRows(list) }
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default AdmissionGrid;