
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('fName', 128).notNullable();
      tbl.string('lName', 128).notNullable();
      tbl.string('email', 128).unique().notNullable();
      tbl.string('password').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  
