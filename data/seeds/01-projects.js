exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Maintain My lawn' , description:"Complete landscape of my lawn",completed:false },
        { name: 'Mow neighbors yard' , description:"Help Neighbor mow lawn",completed:false },
      ]);
    });
};
