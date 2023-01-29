require("dotenv").config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;


// Connect to MongoDB
async function main(){
await mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true,
    });
};
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/mealtrackerDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );


module.exports = main;
