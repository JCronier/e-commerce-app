const { gql } = require('apollo-server');


// String, Int, Float, Boolean, ID - Scalar types

// ! - can't be null, only type

const typeDefs = gql`
  type Query {
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String
    rating: Int!
  }

  input ProductsFilter {
    onSale: Boolean
  }
`;

module.exports = {
  typeDefs
}