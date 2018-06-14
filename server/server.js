const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use('/rooms/:id', express.static(path.join(__dirname, '../client')));



app.listen(PORT, () => console.log('Listening to port: ', PORT));