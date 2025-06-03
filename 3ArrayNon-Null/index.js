const {gql, ApolloServer} = require ( "apollo-server")

/**
 * Scalar types
 * INT
 * FLOAT
 * String
 * Boolean
 * ID
 * 
 * ArrayNon-null - 
 * valor null é um problema colocar "!" na quary em typeDefs
 * 
 */


const typeDefs = gql` 
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID

        tecnologias: [String!]!
    }
`;

const resolvers = {
    Query: {
        tecnologias() {
            return ["graphql", "JavaScript", "Python", "Java", "C++"];
        },
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

    console.log(`🚀 ok rodando arrayNon-Null ${url}`);
})
