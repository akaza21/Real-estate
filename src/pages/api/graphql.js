
import { gql, ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import mongoose from "mongoose";
import resolvers from "../../db/resolvers";
import typeDefs from "../../db/typedefs";
const mongoString= 'mongodb+srv://shayan:SHAY%40n2002@cluster0.co5eavw.mongodb.net/test'


mongoose.connect(mongoString,{useNewUrlParser:true}).then(()=>{
    console.log("db connected..");
    // return server.listen({port:5000})
}).then((res)=>{
    console.log('server running');
}).then(()=>{
    
})




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