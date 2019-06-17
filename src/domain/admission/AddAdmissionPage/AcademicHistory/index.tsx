import * as React from 'react';

import { GrafanaInputFactory, GrafanaSelectInputFactory } from '../../../../components/form/FormElements';
import { NotEmpty } from '../../../../components/form/Constraints';
import PartialForm from '../../../../components/form/PartialForm';

const academicHistoryDataForm = [
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'qualification',
        label: 'Highest Qualification',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'yearOfPassing',
        label: 'Year',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'institution',
        label: 'Institution',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'university',
        label: 'Board/University',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'enrollmentNo',
        label: 'Enrollment No',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'testName',
        label: 'Exam Name',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'testScore',
        label: 'Score',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
];

const AcademicHistoryData = ({ modelData, onChange }: any) => {
    return (
        <PartialForm
            formElements={academicHistoryDataForm}
            modelData={modelData}
            className="gf-form-inline"
            onChange={onChange}
        />
    );
};

export default AcademicHistoryData;
