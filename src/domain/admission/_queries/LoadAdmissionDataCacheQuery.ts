import gql from 'graphql-tag';

export const CREATE_ADMISSION_DATA_CACHE = gql`
  query {
    createAdmissionDataCache {
      branches {
        id
        branchName
        college {
          id
        }
      }
      departments {
        id
        name
        branch {
          id
        }
      }
      batches {
        id
        batch
        department {
          id
        }
      }
      states {
        id
        stateName
        country {
          id
        }
      }
      cities {
        id
        cityName
        state {
          id
        }
      }
      courses {
        id
        description
      }
    }
  }
`;
