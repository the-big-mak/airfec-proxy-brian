const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');
const app = express();
const PORT = 8081;

app.use('/rooms/:id', express.static(path.join(__dirname, '../client')));

app.use('/reviews', proxy({target: "http://ec2-54-173-131-192.compute-1.amazonaws.com"}));
app.use('/description', proxy({target: 'http://http://airfec-env.tdt2hxkqtm.us-east-1.elasticbeanstalk.com'}));
app.use('/Photos/:id', proxy({target: 'http://localhost:3003'}));
app.use('/reservations/:id', proxy({target: 'http://ec2-18-208-163-155.compute-1.amazonaws.com'}));

app.listen(PORT, () => console.log('Listening to port: ', PORT));