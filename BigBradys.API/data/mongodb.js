const { MongoClient } = require('mongodb');
// Use MONGOPASSWORD from environment variable (Fly secret)
const password = process.env.MONGOPASSWORD;
const uri = `mongodb+srv://caseycrocamo:${password}@bigbradys.ru8200c.mongodb.net/?appName=BigBradys`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const createForm = async (form) => {
  console.log(form);
  let response = {
    successful: false,
    data: null
  }
  try{
    await client.connect();
    const result = await client.db('bigbradys').collection('contactFormSubmissions').insertOne(form);
    response.successful = true;
    response.data = result;
    return response;
  }
  catch(e){
    console.error(e);
    response.data = e;
    return response;
  }
}
const getForms = async () => {
  let response = {
    successful: false,
    data: null
  }
  try{
    await client.connect();
    const result = await client
      .db('bigbradys')
      .collection('contactFormSubmissions')
      .find({})
      .sort({ _id: -1 })
      .toArray();
    response.successful = true;
    response.data = result;
    return response;
  }
  catch(e){
    console.error(e);
    response.data = e;
    return response;
  }
}
exports.createForm = createForm
exports.getForms = getForms
