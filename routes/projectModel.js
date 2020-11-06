const db = require('../data/db-config');

module.exports={
    getAllProjects() {
        return db("projects")
    }, 
    getResources() {
        return db("resources")
    },
    getProjectById(id){
            return db('projects')
        .where({ id : id }).first();
    },  
    getTasks(){
        return db('tasks')
    },
    // add(scheme):
    // Expects a scheme object.
    // Inserts scheme into the database.
    // Resolves to the newly inserted scheme, including id.
    addResource(resource){
    return db('resources').insert(resource)
        .then((id) => {
            return db('resources')
            .where({ id : id }).first();
            })
    },  
    addProject(project){
    return db('projects').insert(project)
        .then((id) => {
            return db('projects')
            .where({ id : id }).first();
            })
    },
    addTask(task){
    return db('tasks').insert(task)
        .then((id) => {
            return db('tasks')
            .where({ id : id }).first();
        })
    }
} 

    // getProjectById(id){
    //         return db('projects')
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
