import gql from 'graphql-tag';

export interface QueryResponse {
  allPosts
}

export const getAllPets = gql`{
  allPosts {
    description,
    createdAt,
    image,
    pet{
      name
      owner {
        name
      }
    }
  }
}`;