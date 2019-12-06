import * as React from 'react';

export interface AdmissionEnquiryProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    totalRecords?: number | string;
    type?: string;
}

export class EnquiryGrid<T = {[data: string]: any}> extends React.Component<AdmissionEnquiryProps, any> {
    constructor(props: AdmissionEnquiryProps) {
        super(props);
        this.state = {
            list: this.props.data,
            totalRecords: this.props.totalRecords,
            type: this.props.type
        };
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
                <td>{admissionEnquiry.studentName}</td>
                <td>{admissionEnquiry.landLinePhoneNo}</td>
                <td>{admissionEnquiry.cellPhoneNo}</td>
                <td>{admissionEnquiry.emailId}</td>
                <td>{admissionEnquiry.enquiryStatus}</td>
                <td>{admissionEnquiry.strEnquiryDate}</td>
                <td>
                  {/* <button className="btn btn-primary" onClick={e => this.showDetail(admissionEnquiry)}>Details</button> */}
                </td>
    
              </tr>
            );
          }
        return retVal;
    }

    render() {
        const {data} = this.props
        const {list, totalRecords, type} = this.state;
        return (
            <main>
                <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
                    <span style={{ fontSize: "13px", color: "Blue"}}>{type} : {totalRecords}</span>
                </div>
                <div style={{width:'100%', height:'250px', overflow:'auto'}}>
                    <table id="admissionEnquiryTable" className="striped-table fwidth bg-white p-2">
                        <thead>
                            <tr>
                                <th>Enquiry Id</th>
                                <th>Name</th>
                                <th>Land Line No</th>
                                <th>Cell No</th>
                                <th>Email Id</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Details</th>
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

export default EnquiryGrid;