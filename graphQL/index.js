const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios').default

const url = 'https://localhost:3000/api/'
let units = []

const typeDefs = gql`
    enum TIPOS {
        persona
        empresa
    }
    type AllCredit {
        saldo_total: String!
    }
    type Entitie {
        id: ID!
        name: String!
        type: String!
    }
    type Account {
        id: ID!
        owner_id: ID!
        credit: String!
        creation_date: String!
    }
    type Transference{
        id: ID!
        entity_id: ID!
        from_account: ID!
        to_account: ID!
        Transfered: String!
        date: String!
    }
    type Mutation {
        "Transferir dinero"
        transferCredit(
            entity_id: ID!
            from_account: String!
            to_account: String!
        ): Transference
    }
    type Query {
        getAllEntityCredit(entity:String): AllCredit!
        getAllAccounts: [Account!]!
    }
`

const resolvers = {
    Query: {
        getAllEntityCredit: async (root,args) => {
            const { data } = await axios(`${url}saldo_total/${args.entity}`)
            console.log(args.entity)
            return {saldo_total:data.saldo_total}
        },
        getAllAccounts: async () => {
            const { data } = await axios(`${url}/cuentas`)
            const res = await data.data.map((account) => {
                return {
                    id: account.id,
                    owner_id: account.owner_id,
                    credit: account.credit,
                    creation_date: account.creation_date
                }
            })
            return res
        },
    },
    Mutation: {
        transferCredit: (root, args) => {
            const newUnit =  {
                entity_id: "",
                from_account: "",
                to_account: ""
            }
            units.push(newUnit)
            return newUnit
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
