
import { gql, ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import mongoose from "mongoose";
import Property from "@/db/models/Property";
const mongoString= process.env.MONGO_DB_URI
console.log(process.env);

mongoose.connect(mongoString,{useNewUrlParser:true}).then(()=>{
    console.log("db connected..");
    // return server.listen({port:5000})
}).then((res)=>{
    console.log('server running');
}).then(()=>{
    
})


const typeDefs = gql`
  type Property {
    price:Float
    description: String
    beds:Int
    bathroom:Int
    area:Float
    isLiked:Boolean
    isForSale:Boolean
    lat:Float
    lng:Float

  }
  input PropertyInpuit {
    price:Float
    description: String
    beds:Int
    bathroom:Int
    area:Float
    isLiked:Boolean
    isForSale:Boolean
    lat:Float
    lng:Float
    
  }
  type Query {
    getProperties: [Property]
  }
  type Mutation {
    createProperty(propertyInput : PropertyInpuit):Property!
  }
`;
const resolvers = {
    Query: {
      getProperties: async() => {
            
            let properties= await Property.find().limit(10)
            console.log(properties);
            return properties
        }
    },
    Mutation:{
        async createProperty(_, {propertInput:{price, description, beds, bathroom, area, isLiked, isForSale, lat, lng}}){
            const createProperty = new Property({
              price:price,
              description:description,
              beds:beds,
              bathroom:bathroom,
              area:area,
              isLiked:isLiked,
              isForSale:isForSale,
              lat:lat,
              lng:lng

            })
      
      
            const res = await createProperty.save()
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