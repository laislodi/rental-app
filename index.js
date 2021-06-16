import { ApolloServer, gql }  from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Apartment" type defines the queryable fields for every apartment in our data source.
  type Apartment {
    number: String
    text: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "apartments" query returns an array of zero or more Apartments (defined above).
  type Query {
    apartments: [Apartment]
  }
`;

const allApartmentsExample = [
  {
    number: '201',
    text: 'Kate Chopin',
  },
  {
    number: '202',
    text: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    allApartments: () => allApartmentsExample,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
