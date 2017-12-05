//main starting point of application
const express = require('express')
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//instance of express
const app = express();
const router = require('./server/router');
const mongoose = require('mongoose');

//DB setup
// mongoose.connect('mongodb://localhost/trivia', {useMongoClient:true});
var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
//app setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

//server setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
