import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Product {
        id: ID!
        location: String!
        contries: Int!
        region: String!
        cost: Float!
    }
    type Cart {
        id: ID!
        prodId: ID!
        prodCost: Float!
    }
    type Query {
        getAllProducts: [Product!]!
        getCart: [Cart]! 
    }
    type Mutation {
        addInCart(prodId: ID!, prodCost: Float!): Cart!
        removeFromCart(id: ID!): [Cart]!
    }
`;

export default typeDefs;