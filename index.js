const {ApolloServer, gql} = require ('apollo-server');

// define the data to populate the api

const books = [
  {
    title: 'O Click de 1 Bilhão de doláres',
    author: 'Raí Siqueira',
  },
  {
    title: 'A rede Social',
    author: 'Raí Siqueira',
  },
  {
    title: 'Olar',
    author: 'Raí Siqueira',
  },
];

// Here we define the schema from our types

const typeDefs = gql`
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`;

// The resolvers define the technique for fetching the types in the schema
// Here we retrive books query from the books array.

const resolvers = {
  Query: {
    books: () => books,
  },
};

// The Server instance receive two parameters: the type definitions and the resolvers
const server = new ApolloServer ({typeDefs, resolvers});

server.listen ().then (url => console.log (`🚀 running on localhost:4000`));
