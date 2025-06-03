const {gql, ApolloServer} = require ( "apollo-server")

/**
 * ->Schema
 * ->Schema DefinititionLanguage (SDL) ->> Linguegem de definição de esquema
 * 
 * na consulta precisa colocar o tipo de dado no localhost:4000
 * 
 * crido listas de produtos e usuarios 
 */

const usuarios = [
    {
        idade: 30,
        salario: 5000.50,
        nome: "João",
        ativo: true,
        id: "1"
    },
    {
        idade: 28,
        salario: 6000.50,
        nome: "Ingrid",
        ativo: true,
        id: "2"
    },
    {
        idade: 22,
        salario: 1500.50,
        nome: "Ramon",
        ativo: false,
        id: "3"
    }
];


const produtos = [
    {
        nome: "celular",
        preco: 4000.50,
        estoque: 15,
        id: "1"
    },
    {
        nome: "computador",
        preco: 1000.50,
        estoque: 10,
        id: "2"
    },
    {
        nome: "tv",
        preco: 2500.50,
        estoque: 10,
        id: "3"
    }
];

const typeDefs = gql` 
     type Produto {
        nome: String
        preco: Float
        estoque: Int
        id: Int
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID

    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
    }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },

        produtos() {
            return produtos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen("4000").then(({url}) => {

    console.log(`🚀 ok rodando ObjectTypes-Fields ${url}`);
})
