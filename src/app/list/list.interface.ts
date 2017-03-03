import gql from 'graphql-tag';

export interface QueryResponse {
  allPets
}

export const getAllPets = gql`{
  allPets{
    name
  }
}`;