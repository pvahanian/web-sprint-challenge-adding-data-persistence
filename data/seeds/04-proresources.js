exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('proresources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('proresources').insert([
        { resource_id:1, project_id:1 },
        { resource_id:2, project_id:1 },
        { resource_id:3, project_id:1 },
        { resource_id:1, project_id:2 }
      ]);
    });
};

