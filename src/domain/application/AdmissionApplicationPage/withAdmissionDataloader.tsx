
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
  const params = new URLSearchParams(location.search);
  let ayId = params.get('ayid') ;
  if(ayId == null || ayId == undefined) {
    ayId = "0";
  } 
  return graphql<AdmissionApplicationCountQueryType, withAdmissionCountPageDataLoaderProps, TargetComponentProps>(GetAdmissionApplicationDataGql, {
    options: ({ match }) => ({
      variables: {
        academicyearId: ayId
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withAdmissionDataloader;