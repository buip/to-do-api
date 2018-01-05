//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    //delete Todos

    db.collection('Todos')
      .deleteMany({text: 'Something to do'})
      .then((result) => {
        console.log(result);
      })

    db.collection('Todos')
      .deleteOne({text: 'Eat to do '})
      .then((result) => {
        console.log(result);
      });

    db.collection('Todos')
      .findOneAndDelete({completed: true})
      .then((res) => {
        console.log(res);
      })

    // delete Users
    db.collection('Users')
      .deleteMany({name: 'Phuong'})

    db.collection('Users')
      .findOneAndDelete({name: 'Preston'})
      .then((res) => {
        console.log(res);
      })

    // client.close();
  }
});
