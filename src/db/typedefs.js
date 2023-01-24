const { gql } = require("apollo-server");
module.exports = gql`
type Recipe{
  name:String
}

input RecipeInput {
  name:String
  
}

type Query {
  recipe(ID: ID! ):Recipe!
  getRecipes (amount: Int):[Recipe]
}

type Mutation {
  createBook(recipeInput : RecipeInput):Recipe!
}
`;
