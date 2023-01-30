require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/user");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const mealRoutes = require("./controllers/meals");
const cors = require('cors');
const { METHODS } = require('http');



var corsOptions= {
origin:'https://dine-diaryfe.herokuapp.com',
methods:"GET, POST, DELETE, PUT, PATCH",
changeOrigin:true, 
credentials:true
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'))

/*mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});*/

app.options('*',cors());
app.use("/", userRoutes);
app.use("/meals",mealRoutes);
app.use("/auth",require('./controllers/auth'))
// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT || 5000}`);
});

/*
Access to fetch at 
'https://dinediary.herokuapp.com/auth/profile' 
from origin 'https://dine-diaryfe.herokuapp.com' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
header is present on the requested resource. 
If an opaque response serves your needs, 
set the request's mode to 'no-cors' to fetch 
the resource with CORS disabled */