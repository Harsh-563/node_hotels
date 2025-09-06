const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = 'mongodb://localhost:27017/hotels'
// const mongoURL = 'mongodb+srv://harshraj_hotels:hello_world@cluster1.ow62ak4.mongodb.net/'
//const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('connected', () => {
  console.log("connected to MongoDB server");
});
db.on('error', (err) => {
  console.log(" MongoDB error");
});
db.on('disconnected', () => {
  console.log(" MongoDB disconnected");
});
module.export = db;