const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

let id = '5a5049e8434ba7168ff9f563';
let userID = '5a4faee4bcda846c3d3392fc';

Todo.remove({}).then((result) => {
  console.log(result);
});

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5a52365ebfe572547908084f').then((todo) => {
  console.log(todo);
})
