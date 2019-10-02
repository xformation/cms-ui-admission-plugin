    
import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as GetAdmissionDataGql from './GetAdmissionData.graphql';
import { ReactFunctionOrComponentClass, AdmissionEnquiryCountQueryType } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withAdmissionCountPageDataLoaderProps = RouteComponentProps<{
  branchId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & AdmissionEnquiryCountQueryType;
};

const withAdmissionDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  const params = new URLSearchParams(location.search);
  let bId = params.get('bid') ;
  if(bId == null || bId == undefined) {
    bId = "0";
  } 
  return graphql<AdmissionEnquiryCountQueryType, withAdmissionCountPageDataLoaderProps, TargetComponentProps>(GetAdmissionDataGql, {
    options: ({ match }) => ({
      variables: {
        branchId: bId //1851
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withAdmissionDataloader;