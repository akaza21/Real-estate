
import { gql, ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import mongoose from "mongoose";
const mongoString= 'mongodb://127.0.0.1:27017/'
const Book = require('../../db/models/Books')
mongoose.connect(mongoString,{useNewUrlParser:true}).then(()=>{
    console.log("db connected..");
    // return server.listen({port:5000})
}).then((res)=>{
    console.log('server running');
}).then(()=>{
    
})
let v = [
    {
        "id": 0,
        "name": "JavaScript for Dummies"
    }
  // ... Write a few more ...
]

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
  }
  input BookInput {
    name:String
    
  }
  type Query {
    getBooks: [Book]
  }
  type Mutation {
    createBook(bookInput : BookInput):Book!
  }
`;
const resolvers = {
    Query: {
        getBooks: async() => {
            
            let books= await Book.find().limit(10)
            console.log(books);
            return books
        }
    },
    Mutation:{
        async createBook(_, {bookInput:{name}}){
            const createBook = new Book({
              name:name
            })
      
      
            const res = await createBook.save()
            return {
              id:res.id,
              ...res._doc
            }
          }
    }
};
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};