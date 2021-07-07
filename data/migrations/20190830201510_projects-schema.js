
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('description', 200)
        tbl.boolean('completed', false).notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 300).notNullable();
        tbl.string('notes', 120)
        tbl.boolean('completed', false).notNullable();
        tbl.integer('project_id ')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable();
        tbl.string('description', 300)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tasks')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')


};
