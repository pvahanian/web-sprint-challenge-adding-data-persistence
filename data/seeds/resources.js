
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource: 'Lawnmower' },
        {resource: 'Rake' },
        {resource: 'Weed Wacker',description:"best ever ziggsmain" }
      ]);
    });
};
