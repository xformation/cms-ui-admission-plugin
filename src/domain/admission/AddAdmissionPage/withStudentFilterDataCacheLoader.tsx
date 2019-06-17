import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as LoadStudentFilterDataCacheQueryGql from './LoadStudentFilterDataCacheQuery.graphql';
import {ReactFunctionOrComponentClass, LoadStudentFilterDataCacheType} from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';


type withStudentFiltreDataCachePageDataLoaderProps = RouteComponentProps<{
  collegeId: string;
  academicYearId:  string;
  }>;

type TargetComponentProps = {
    data: QueryProps & LoadStudentFilterDataCacheType ;
};

const withStudentFilterDataCacheLoader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
    return graphql<LoadStudentFilterDataCacheType, withStudentFiltreDataCachePageDataLoaderProps, TargetComponentProps>(LoadStudentFilterDataCacheQueryGql, {
      options: ({ match }) => ({
        variables: {
          // collegeId: match.params.collegeId,
          // academicYearId: match.params.academicYearId,
          
          collegeId: 1801,
          academicYearId: 1701
        }
      })
    })(withLoadingHandler(TargetComponent));
};

export default withStudentFilterDataCacheLoader 


