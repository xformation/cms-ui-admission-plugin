
import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as GetAdmissionApplicationDataGql from './GetAdmissionApplicationData.graphql';
import { ReactFunctionOrComponentClass, AdmissionApplicationCountQueryType } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withAdmissionCountPageDataLoaderProps = RouteComponentProps<{
  academicyearId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & AdmissionApplicationCountQueryType;
};

const withAdmissionDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<AdmissionApplicationCountQueryType, withAdmissionCountPageDataLoaderProps, TargetComponentProps>(GetAdmissionApplicationDataGql, {
    options: ({ match }) => ({
      variables: {
        academicyearId: 1004
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withAdmissionDataloader;