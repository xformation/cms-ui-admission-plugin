import * as React from 'react';

import { GrafanaInputFactory, GrafanaSelectInputFactory,DateInputFactory } from '../../../../components/form/FormElements';
import { NotEmpty } from '../../../../components/form/Constraints';
import PartialForm from '../../../../components/form/PartialForm';

const personalDataForm = [
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentName',
        label: 'Student Name *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentMiddleName',
        label: 'Student Middle Name',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentLastName',
        label: 'Student Last Name *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherName',
        label: 'Father Name *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherMiddleName',
        label: 'Father Middle Name',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherLastName',
        label: 'Father Last Name *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherCellNumber',
        label: 'Father Cell Number',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherEmailId',
        label: 'Father Email Id',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherAadharNo',
        label: 'Father Aadhar No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherPassportNo',
        label: 'Father Passport No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherName',
        label: 'Mother Name',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherMiddleName',
        label: 'Mother Middle Name',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherLastName',
        label: 'Mother Last Name',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },

    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherCellNumber',
        label: 'Mother Cell Number',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherEmailId',
        label: 'Mother Email Id',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherAadharNo',
        label: 'Mother Aadhar No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherPassportNo',
        label: 'Mother Passport No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentAadharNo',
        label: 'Adhar No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentDrivingLicenseNo',
        label: 'Driving License No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentPassportNo',
        label: 'Passport No',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'dateOfBirth',
        label: 'Date Of Birth *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'placeOfBirth',
        label: 'Place Of Birth',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaSelectInputFactory,
        name: 'religion',
        label: 'Religion',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
        options: [
            {
                id: "HINDU",
                name: "HINDU"
            },
            {
                id: "MUSLIM",
                name: "MUSLIM"
            },
            {
                id: "CHIRSTIAN",
                name: "CHIRSTIAN"
            },
            {
                id: "SIKH",
                name: "SIKH"
            },
            {
                id: "BUDH",
                name: "BUDH"
            }
        ]
    },
    {
        elementComponentFactory: GrafanaSelectInputFactory,
        name: 'caste',
        label: 'Caste *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
        options: [
            {
                id: "GENERAL",
                name: "GENERAL"
            },
            {
                id: "OBC",
                name: "OTHER BACKWARD CASTES"
            },
            {
                id: "SC",
                name: "SCHEDULED CASTE"
            },
            {
                id: "ST",
                name: "SCHEDULED TRIBE"
            }
        ]
    },
    {
        elementComponentFactory: GrafanaSelectInputFactory,
        name: 'sex',
        label: 'Gender *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
        options: [
            {
                id: "MALE",
                name: "MALE"
            },
            {
                id: "FEMALE",
                name: "FEMALE"
            },
            {
                id: "OTHER",
                name: "OTHER"
            }
        ]
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentLocalAddress',
        label: 'Local Address',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentPermanentAddress',
        label: 'Permanent Address *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'pinCode',
        label: 'Pin/ZIP Code',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentPrimaryCellNumber',
        label: 'Primary CellPhone Number',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentAlternateCellNumber',
        label: 'Alternate CellPhone Number',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentLandLinePhoneNumber',
        label: 'Land Line Phone Number',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentPrimaryEmailId',
        label: 'Primary Email Id *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentAlternateEmailId',
        label: 'Alternate Email Id',
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
    },
    {
        elementComponentFactory: GrafanaSelectInputFactory,
        name: 'studentType',
        label: 'Student Type *',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container m-l-1 m-r-1',
        options: [
            {
                id: "REGULAR",
                name: "REGULAR"
            },
            {
                id: "STAFF_CONCESSION",
                name: "STAFF CONCESSION"
            },
            {
                id: "BENEFITS",
                name: "BENEFITS"
            },
            {
                id: "SCHOLARSHIP",
                name: "SCHOLARSHIP"
            }
        ]
    }
];

const PersonalData = ({ modelData, onChange }: any) => {
    return (
        <PartialForm
            formElements={personalDataForm}
            modelData={modelData}
            className="gf-form-inline"
            onChange={onChange}
        />
    );
};

export default PersonalData;
