const Recipe = require('./models/Books')

module.exports = {
  Query:{
    async recipe(_,{ID}){
      return await Recipe.findById(ID) 
    }
    ,
    async getRecipes(_, {amount}){
      return await Recipe.find().sort({createdAt:-1}).limit(amount)
    }
  },
  Mutation:{
    async createRecipe(_, {recipeInput:{name}}){
      const createRecipe = new Recipe({
        name:name
      })


      const res = await createRecipe.save()
      return {
        id:res.id,
        ...res._doc
      }
    }
  }
}