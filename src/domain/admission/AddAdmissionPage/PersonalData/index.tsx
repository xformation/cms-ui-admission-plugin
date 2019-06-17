import * as React from 'react';

import { GrafanaInputFactory, GrafanaSelectInputFactory } from '../../../../components/form/FormElements';
import { NotEmpty } from '../../../../components/form/Constraints';
import PartialForm from '../../../../components/form/PartialForm';

const personalDataForm = [
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentName',
        label: 'Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentMiddleName',
        label: 'Middle Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentLastName',
        label: 'Last Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherName',
        label: 'Father Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherMiddleName',
        label: 'Father Middle Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'fatherLastName',
        label: 'Father Last Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherName',
        label: 'Mother Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherMiddleName',
        label: 'Mother Middle Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'motherLastName',
        label: 'mother Last Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'dateOfBirth',
        label: 'Date Of Birth',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    
    {
        elementComponentFactory: GrafanaSelectInputFactory,
        name: 'sex',
        label: 'Gender',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
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
        name: 'studentContactNumber',
        label: 'Student Contact Number',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'alternateContactNumber',
        label: 'Alternate Contact Number',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'studentEmailAddress',
        label: 'Student Email',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    
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
