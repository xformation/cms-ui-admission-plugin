import { ApolloClient, createNetworkInterface } from 'react-apollo';


// 	http://dev.apollodata.com/react/initialization.html#creating-client
export const createGraphQLClient = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://18.234.66.133:8080/graphql'
  });
  const client = new ApolloClient({
    networkInterface: networkInterface

  });

  return client;
};

