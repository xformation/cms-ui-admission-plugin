import { ApolloClient, createNetworkInterface } from 'react-apollo';


// 	http://dev.apollodata.com/react/initialization.html#creating-client
export const createGraphQLClient = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://18.209.4.2:8080/graphql'
    // uri: 'http://localhost:8080/graphql'
  });
  const client = new ApolloClient({
    networkInterface: networkInterface

  });

  return client;
};

