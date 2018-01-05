const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
      type: String
    },
    completed: {
      type: Boolean
    },
    completedAt: {
      type: Number
    }
});

let newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (error) => {
  console.log(error);
});

let otherTodo = new Todo({
  text: 'Play game',
  completed: true,
  completedAt: 123
})

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.log(error);
})
