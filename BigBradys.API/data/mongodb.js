const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://caseycrocamo:xdYuaUX9YdEicuI0dq@bigbradys.vu0p8.mongodb.net/bigbradys?retryWrites=true&w=majority";
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
exports.createForm = createForm