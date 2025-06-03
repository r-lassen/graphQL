const {gql, ApolloServer} = require ( "apollo-server")

/**
 * Scalar types
 * INT
 * FLOAT
 * String
 * Boolean
 * ID
 */


const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`;

const resolvers = {};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen("4000").then(({url}) => {

    console.log(`🚀 Server ready at ${url}`);
})
