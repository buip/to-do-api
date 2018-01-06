const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

let id = '5a5049e8434ba7168ff9f563';
let userID = '5a4faee4bcda846c3d3392fc';

if(!ObjectID.isValid()) {
  console.log('Id is not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if(!user) {
    console.log('User not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
