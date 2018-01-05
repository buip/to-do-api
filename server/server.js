const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
});

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

let newTodo = new Todo({
  text: '   Play chess   '
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

let newUser = new User({
  email: '   buip@beloit.edu   '
})

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (error) => {
  console.error(error);
})
