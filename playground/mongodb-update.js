//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    db.collection('Todos')
      .findOneAndUpdate({
        _id: new ObjectID('5a4f0f85f62c515f249cd196')
      }, {
        $set: {
          completed: true
        }
      }, {
        returnOriginal: false
      })
      .then((res) => {
        console.log(res);
      })

    db.collection('Users')
      .findOneAndUpdate({
        _id: new ObjectID('5a4d9d6e26624165c9b28f5a')
      }, {
        $set: {
          name: 'Preston'
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      })
      .then((res) => {
        console.log(res);
      })


    // client.close();
  }
});
