import * as React from 'react';

import { GrafanaInputFactory, GrafanaSelectInputFactory } from '../../../../components/form/FormElements';
import { NotEmpty } from '../../../../components/form/Constraints';
import PartialForm from '../../../../components/form/PartialForm';

const documentDataForm = [
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'documentName',
        label: 'DocumentName',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
    {
        elementComponentFactory: GrafanaInputFactory,
        name: 'upload',
        label: 'Upload',
        constraint: NotEmpty,
        className: 'gf-form--grow form-control-container',
    },
];

const DocumentData = ({ modelData, onChange }: any) => {
    return (
        <PartialForm
            formElements={documentDataForm}
            modelData={modelData}
            className="gf-form-inline"
            onChange={onChange}
        />
    );
};

export default DocumentData;
