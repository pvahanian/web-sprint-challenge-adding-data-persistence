const db = require('../data/db-config');

module.exports={
    getAllProjects() {
        return db("projects")
    },
    // getShoppingList(id){
    //         return db('Steps')
    //     .where({ "Steps.recipe_id" : id })
    //     .join('Ingredients', "Ingredients.id", "=", "Steps.Ingredient_id")
    //     .select('Steps.quantity', 'Ingredients.Ingredient_Name')
    // },
    // getInstructions(id){
    //   return db('Steps')
    //   .select('Steps.step','steps.instruction')
    //   .where({ "Steps.recipe_id" : id })
    //   .orderBy('Steps.step','asc')
    // }
  }