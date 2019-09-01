
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('projects').insert([
        {'project_name': 'Lets do this', 'description': 'dont get caught', 'completed': false},
        {'project_name': 'Lets', 'description': 'dont eat', 'completed': false},
        {'project_name': 'Lets do ', 'description': 'dont fight', 'completed': false},
      ]);
    
};
