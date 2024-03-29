const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const url = "mongodb+srv://uwc20:noname@cluster0.uzuscca.mongodb.net/uwc?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "425121b3-c1a6-4e75-9b4b-ef68f8614197" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Connected to MongoDB');
  
  // edit worker infor
  app.put('/uwc/worker/:id', async (req, res) => {
    const newData = req.body;
    if (req.body._id) delete req.body._id;
    
    try {
      const database = client.db('uwc');
      const collection = database.collection('worker');
      const result = await collection.updateOne({ _id:new ObjectId(req.params.id) }, { $set: newData });
  
      if (result.modifiedCount !== 1) {
        return res.sendStatus(404);
      }
  
      return res.sendStatus(200);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });
  
  // edit worker password
  app.put('/uwc/account/:id', async (req, res) => {
    const newData = {
      password: req.body.newPassword
    };
    
    try {
      const database = client.db('uwc');
      const collection = database.collection('account');
      const result = await collection.updateOne({ _id:new ObjectId(req.params.id) }, { $set: newData });
  
      if (result.modifiedCount !== 1) {
        return res.sendStatus(404);
      }
  
      return res.sendStatus(200);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });

  // get all collection from mongo
  app.get('/uwc/worker', async (req, res) => {
    console.log('Accessed /uwc/worker route'); // added line
    try {
      const database = client.db('uwc');
      const collection = database.collection('worker');
      const workers = await collection.find().toArray();
      // return res.json(workers);
      // console.log(workers);
      return res.send({ data: workers });

    } catch (err) {
      return res.sendStatus(500);
    }
  });

  app.get('/uwc/vehicle', async (req, res) => {
    console.log('Accessed /uwc/vehicle route'); // added line
    try {
      const database = client.db('uwc');
      const collection = database.collection('vehicle');
      const vehicle = await collection.find().toArray();
      return res.send({ data: vehicle });

    } catch (err) {
      return res.sendStatus(500);
    }
  });

  app.get('/uwc/mcps', async (req, res) => {
    console.log('Accessed /uwc/mcps route'); // added line
    try {
      const database = client.db('uwc');
      const collection = database.collection('mcps');
      const mcps = await collection.find().toArray();
      return res.send({ data: mcps });

    } catch (err) {
      return res.sendStatus(500);
    }
  });
  

  // get all collection from mongo
  app.get('/uwc/account', async (req, res) => {
    console.log('Accessed /uwc/account route'); // added line
    try {
      const database = client.db('uwc');
      const collection = database.collection('account');
      const account = await collection.find().toArray();
      // return res.json(workers);
      // console.log(workers);
      return res.send({ data: account });
      // console.log(data);

    } catch (err) {
      return res.sendStatus(500);
    }
  });

  // insert new user account
  app.post('/uwc/worker', async (req, res) => {
    const newAccount = req.body;
    
    try {
      await client.connect();
      const db = client.db('uwc');
      const result = await db.collection('worker').insertOne(newAccount);
      res.status(201).send(result.insertedId);
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong.');
    }
  });

  app.post('/uwc/account', async (req, res) => {
    const newAccount = req.body;
    
    try {
      await client.connect();
      const db = client.db('uwc');
      const result = await db.collection('account').insertOne(newAccount);
      res.status(201).send(result.insertedId);
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong.');
    }
  });

  // // get specify collection from mongo
  // app.get('/uwc/worker/:id', async (req, res) => {
  //   console.log('Accessed /uwc/worker route'); 
  //   try {
  //     const database = client.db('uwc');
  //     const collection = database.collection('worker');
  //     const account = await collection.findOne({ _id: ObjectId(req.params.id) });
  //     if (!account) {
  //       return res.status(404).send({ error: 'Worker not found' });
  //     }
  //     return res.send({ data: account });
  //   } catch (err) {
  //     console.error(err);
  //     return res.sendStatus(500);
  //   }
  // });
  

  // start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});