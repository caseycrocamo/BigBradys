const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://caseycrocamo:xdYuaUX9YdEicuI0dq@bigbradys.vu0p8.mongodb.net/bigbradys?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});