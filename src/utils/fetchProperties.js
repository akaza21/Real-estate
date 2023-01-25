const axios = require("axios");
const endpoint = "http://localhost:3000/api/graphql";
const headers = {
  "content-type": "application/json",
  Authorization: "<token>",
};
const graphqlQuery = `query Query{
        getProperties{
            price
            
          description
        }
      }`
  


const fetchProperties = async () => {

    try{
        let resp = await axios({
            url: endpoint,
            method: 'post',
            data: {
              query: graphqlQuery
              
            }
          })
          console.log("resp", resp.data.data.getProperties);
          return resp.data.data.getProperties
    }catch(err){
        console.log(err);

    }
 
};


module.exports = fetchProperties
// console.log(response.data); // data
// console.log(response.errors); // errors if any
