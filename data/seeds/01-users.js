
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, fName: 'Shannon', lName: 'Reed', email: 'shannon@gmail.com', password: 'shannon'},
        {id: 2, fName: 'Tatum', lName: 'Reed', email: 'tatum@gmail.com', password: 'tatum'},
        {id: 3, fName: 'Clementine', lName: 'Evans', email: 'clementine@gmail.com', password: 'clementine'},
        {id: 4, fName: 'Charity', lName: 'St. Louis', email: 'charity@gmail.com', password: 'charity'},
        {id: 5, fName: 'Clayton', lName: 'Jews', email: 'clayton@gmail.com', password: 'clayton'},
        {id: 6, fName: 'First', lName: 'Last', email: 'first@gmail.com', password:'first' }

      ]);
    });
};
