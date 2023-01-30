require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const defineCurrentUser = require('./routes/defineuser')
const mealRoutes = require("./controllers/meals");
const userRoutes = require("./controllers/user");

var corsOptions= {
origin:'https://dine-diaryfe.herokuapp.com',
methods:"GET,PUT,POST,DELETE,PATCH",
changeOrigin:true, 
credentials:true
};
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(defineCurrentUser);

/*mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});*/

app.options('*',cors());
app.use("/auth",require('./controllers/auth'));
app.use("/user", userRoutes);
app.use("/meals",mealRoutes);

app.get('/', (req,res)=>{
  res.send(`Server running on port ${process.env.PORT}`)
})
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