    
import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as GetAdmissionDataGql from './GetAdmissionData.graphql';
import { ReactFunctionOrComponentClass, AdmissionEnquiryCountQueryType } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withAdmissionCountPageDataLoaderProps = RouteComponentProps<{
  branchId: string;
  admissionApplicationId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & AdmissionEnquiryCountQueryType;
};

const withAdmissionDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<AdmissionEnquiryCountQueryType, withAdmissionCountPageDataLoaderProps, TargetComponentProps>(GetAdmissionDataGql, {
    options: ({ match }) => ({
      variables: {
        branchId: 1851,
        admissionApplicationId: 4501
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withAdmissionDataloader;