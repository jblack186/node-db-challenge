
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'dont stop working', notes: 'read the bible', completed: false, project_id: 1},
        {description: 'your day off of work is on Saturdays', notes: 'meditate on the word', completed: false, project_id: 1},
        {description: 'keep the commandments', notes: 'love your brother', completed: false, project_id: 1}
      ]);
    
};
