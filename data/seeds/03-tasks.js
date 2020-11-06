exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task: 'Mow Lawn' , notes:"hurry up", description:"Mow all of my yard with lawnmower",completed:false, project_id:1, resource_id:1},
        { task: 'Trim hedges' , description:"Trim my hedges",completed:false, project_id:1 , resource_id:3},
        { task: 'Mow Neighbors Lawn' , notes:"hurry up", description:"Mow all of my neighbors yard with lawnmower",completed:false, project_id:2,resource_id:1}
      ]);
    });
};
