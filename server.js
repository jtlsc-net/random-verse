const http = require('http');
const express = require('express');
const path = require('path');const app = express();
const API_KEY = '69046020591553883e007be21a631c25';
app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use('/', function(req,res){
    let versePath = require('./express/verses.json');
    res.sendFile(path.join(__dirname+'/express/index.html'));
    res.send(JSON.stringify(versePath));
    //__dirname : It will resolve to your project folder.
  });const server = http.createServer(app);
const port = 3000;
server.listen(port);console.debug('Server listening on port ' + port);
