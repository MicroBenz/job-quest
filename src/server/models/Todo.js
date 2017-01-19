const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
