const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */
router.get('/', (req, res) => {
res.send('api works');
});

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var db;
MongoClient.connect('mongodb://user:abc123@ds221003.mlab.com:21003/testone', { useNewUrlParser: true }, (err, database) => {
if (err) return console.log(err)
db = database.db('testone');
});
// Get all posts

module.exports = router;