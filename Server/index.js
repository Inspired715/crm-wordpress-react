const express = require('express');
const bodyParser = require('body-parser');
const client = require('./Routes/client');
const admin = require('./Routes/admin');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
const corsOpts = {
    origin: '*'
};
  
app.use(cors(corsOpts));

app.use('/', client);
app.use('/admin', admin);

app.use(express.json());

app.listen(4000, () => {
    console.log(`Server is running on ${3001}`)
})
