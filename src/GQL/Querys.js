import gql from "graphql-tag";

export const GET_CAPITULOS = gql`
  query {
    characters {
      id
      name
      actor
      description
      photo
    }
  }
`;

export const GET_PERSONAJE = gql`
  query characterQuery($Id: ID!) {
    character(id: $Id) {
      id
      name
      actor
      photo
      total_episodes
      description
      url
    }
  }
`;
