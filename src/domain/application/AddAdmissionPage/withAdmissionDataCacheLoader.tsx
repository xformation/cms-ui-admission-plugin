import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as LoadAdmissionDataCacheQueryGql from './_queries/LoadAdmissionDataCacheQuery.graphql';
import {ReactFunctionOrComponentClass, LoadAdmissionDataCacheType} from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';


type withAdmissionDataCachePageDataLoaderProps = RouteComponentProps<{
  }>;

type TargetComponentProps = {
    data: QueryProps & LoadAdmissionDataCacheType ;
};

const withAdmissionDataCacheLoader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
    return graphql<LoadAdmissionDataCacheType, withAdmissionDataCachePageDataLoaderProps, TargetComponentProps>(LoadAdmissionDataCacheQueryGql, {
      options: ({ match }) => ({
        variables: {
          // collegeId: match.params.collegeId,
          // academicYearId: match.params.academicYearId,
        }
      })
    })(withLoadingHandler(TargetComponent));
};

export default withAdmissionDataCacheLoader 


