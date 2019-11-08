import gql from 'graphql-tag';

export const ADD_DOCUMENT = gql`
  mutation addDocuments($input: AddDocumentsInput!) {
    addDocuments(input: $input) {
      documents {
        id
        documentName
        upload
      }
    }
  }
`;
