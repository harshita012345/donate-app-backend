const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const volunteersRoute = require('./routers/volunteersRoute');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config');

app.use('/api', volunteersRoute);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
