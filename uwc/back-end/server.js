// const { MongoClient } = require('mongodb');
// const express = require('express');
// const { connect } = require('http2');

// const app = express();

// var uri = "mongodb+srv://uwc20:noname@cluster0.uzuscca.mongodb.net/uwc?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// async function addDocument() {
//   try {
//     await client.connect();
//     const database = client.db('uwc');
//     const collection = database.collection('worker');

//     const document = { name: 'John Doe', age: 30 };
//     const result = await collection.insertOne(document);
//     console.log(`Document inserted with ID: ${result.insertedId}`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// addDocument();


const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb+srv://uwc20:noname@cluster0.uzuscca.mongodb.net/uwc?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Connected to MongoDB');
  
  // define endpoint to update a document
  app.put('/uwc/worker/', async (req, res) => {
    const userID = req.query.userID;
    const newData = req.body;

    try {
      const database = client.db('uwc');
      const collection = database.collection('worker');

      const result = await collection.updateOne({ userID: userID }, { $set: newData });

      if (result.modifiedCount !== 1) {
        res.sendStatus(404);
        return;
      }
  
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
  // start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});