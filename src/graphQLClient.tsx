import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const networkInterface = createNetworkInterface({
  // uri: 'http://100.81.3.25:8080/graphql'
  uri: 'http://localhost:9094/graphql'
});
export const gQLClient = new ApolloClient({
  networkInterface: networkInterface
});