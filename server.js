const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})



server.post('/api/projects', (req, res) => {
    db('projects').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('projects')
        .where({ id })
        .first()
      .then(projects => {
        res.status(201).json(projects);
      });
    })
    .catch(error => {
        console.log(error)
      res.status(500).json(error);
    });
  });


server.get('/api/tasks', (req, res) => {
    db('tasks as t')
    .leftJoin('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.description', 'p.project_name')
    .then(tasks => {
        res.status(200).json(tasks);
      })
      .catch(error => {
          console.log(error);
        res.status(500).json(error);
      });
    
});

server.post('/api/tasks', (req, res) => {
    db('tasks').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('tasks')
        .where({ id })
        .first()
      .then(tasks => {
        res.status(201).json(tasks);
      });
    })
    .catch(error => {
        console.log(error)
      res.status(500).json(error);
    });
  });


  server.get('/api/resources', (req, res) => {
    db('resource as r')
    .leftJoin('tasks as t', 't.id', 'r.task_id')
    .select('r.id', 'r.resource_name',)
    .then(resources => {
        res.status(200).json(resources);
      })
      .catch(error => {
          console.log(error);
        res.status(500).json(error);
      });
    
});

  server.post('/api/resources', (req, res) => {
    db('resources').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('resources')
        .where({ id })
        .first()
      .then(resources => {
        res.status(201).json(resources);
      });
    })
    .catch(error => {
        console.log(error)
      res.status(500).json(error);
    });
  });

module.exports = server;