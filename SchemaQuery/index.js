const {gql, ApolloServer} = require ( "apollo-server")

/**
 * Scalar types
 * INT
 * FLOAT
 * String
 * Boolean
 * ID
 * 
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

const resolvers = {
    Query: {
        idade(){ 
            return 30; 
        },
        salario() {
            return 5000.50;
        },
        nome() { 
            return "João"
        },
        ativo() {
            return true
        },
        id() {
            return "12345"
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen("4000").then(({url}) => {

    console.log(`🚀 ok rodando ${url}`);
})
