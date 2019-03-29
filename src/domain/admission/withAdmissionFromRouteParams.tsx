import * as React from "react";
import { RouteComponentProps } from "react-router";
import { gql, graphql, QueryProps } from "react-apollo";

import * as AdmissionQueryGql from "./AdmissionQuery.graphql";
import { ReactFunctionOrComponentClass, AdmissionQuery, AdmissionDetailsFragment } from "../types";
import withLoadingHandler from "../../components/withLoadingHandler";

var queryString = require('query-string');

// Specifies the parameters taken from the route definition (/.../:admissionId)
type AdmissionPageRouteParams = {
  admissionId: any
};

// Specifies the Properties that are passed to
type AdmissionPageProps = RouteComponentProps<AdmissionPageRouteParams>;

// The "full set" of properties passed to the target component
// (that is with the properties from GraphQL including the loaded admission)
type AdmissionPageFullProps = AdmissionPageProps & {
  data: QueryProps & AdmissionQuery;
  admission: AdmissionDetailsFragment;
};

// this function takes a Component, that must have AdmissionPageProps-compatible properties.
// The function loads the Admission with the admissionId specified in the route params
// and passes the loaded admission to the specified Component
const withAdmissionFromRouteParams = (
  TheAdmissionComponent: ReactFunctionOrComponentClass<{
    admission: AdmissionDetailsFragment;
  }>
) => {
  const withAdmissionFromRouteParamsWrapper = (props: AdmissionPageFullProps) => <TheAdmissionComponent admission={props.data.admission} />;
  return graphql<AdmissionQuery, AdmissionPageProps, AdmissionPageFullProps>(AdmissionQueryGql, {
    options: ({ match }) => (
      {
        variables: {
          admissionId: queryString.parse(location.search).id
        }
      })
  })(withLoadingHandler(withAdmissionFromRouteParamsWrapper));
};

export default withAdmissionFromRouteParams;
