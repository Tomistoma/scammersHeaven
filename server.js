const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://tomassvoboda2:Sesquiterpene1@cluster0.jzncc.mongodb.net/");
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));
app.use(express.json());


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for any GET request
app.get('/id=G8vK1zR4mTqN9Wyl', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const info = require('./routes/info.js');
app.use('/info/', info);


const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://www.steamgiftcards.cz', 'https://steamdelivery-cea04d2b57ab.herokuapp.com'],
  credentials: true,
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});


















/*const express = require('express');
const app = express();
//
////const path = require('path');

*/
/*
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:3000', "dev-zbydz5ck.us.auth0.com", 'http://localhost:3001', 'nirus.is.cuni.cz'],
  credentials: true,
  accessControlAllowCredentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions));
const posts = require('./routes/posts');
app.use('/posts/', posts);
*/
//var dir = path.join(__dirname, 'build');
//app.use(express.static(dir));


/*
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(3001, () => {
console.log("Server is running")
});
*/