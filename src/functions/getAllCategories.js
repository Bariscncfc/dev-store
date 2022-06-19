import { gql } from "graphql-request";


const GET_CATEGORIES = gql`
  query GetCategories {
    categories(where: {})
  }
`;