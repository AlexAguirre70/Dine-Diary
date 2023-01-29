require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/user.js");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const mealRoutes = require("./controllers/meals");
const cors = require('cors');
const { METHODS } = require('http');



var corsOptions= {
origin:'https://serene-mesa-48537.herokuapp.com/',
methods:"GET, POST, DELETE, PUT",
changeOrigin:true, 
credentials:true
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});


app.use("/", userRoutes);
app.use("/meals",mealRoutes);
app.use("/auth",require('./utils/auth.js'))
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
