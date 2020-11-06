const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description').notNullable()
        tbl.boolean('completed').notNullable()
      })      
      .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resource', 128).notNullable()
        tbl.string('description')
    })
      .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task', 128).notNullable()
        tbl.string('notes', 128)
        tbl.string('description').notNullable()
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE') // 'RESTRICT'   
        tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE') // 'RESTRICT'
      })
     .createTable("proresources", (tbl) => {
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE") // 'RESTRICT'
          .onUpdate("CASCADE"); // 'RESTRICT'
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE") // 'RESTRICT'
          .onUpdate("CASCADE"); // 'RESTRICT'
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("proresources")
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};