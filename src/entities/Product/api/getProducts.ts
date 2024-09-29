import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
  query GetProductId($id: ID!){
    product(id: $id) {
      id
      title
      description
      images(first: 1) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }
      }
  }}
`;
export const GET_PRODUCTS = gql`
 query getProduct($sortBy:ProductSortKeys!,$reverse:Boolean!){
    products(first: 20, sortKey:$sortBy ,reverse:$reverse) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

