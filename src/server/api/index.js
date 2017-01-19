const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('../models/Todo');

const API_PORT = 3001;
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/jobQuestAutumn2016');

app.get('/', (req, res) => {
  Todo.find((err, todos) => res.send(todos));
});

app.post('/', (req, res) => {
  const todo = new Todo(req.body);
  todo.save(() => {
    res.send({ message: 'Success' });
  });
});

app.delete('/:id', (req, res) => {
  Todo.remove({ _id: req.params.id }, () => {
    res.send({ message: 'deleted' });
  });
});

app.post('/:id/toggle', (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    Todo.findByIdAndUpdate(req.params.id, { done: !todo.done }, () => {
      res.send({ message: 'success' });
    });
  });
});

app.listen(API_PORT, () => {
  console.log(`[API] listening to port ${API_PORT}`);
});
