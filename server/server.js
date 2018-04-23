const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route');

const app = express();
const PORT =  process.env.PORT || 5000;

// This will live in the database shortly
const recordCollection = require('./modules/record-collection');

// Set up the main page and body parser module
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// routes (get, post, put, delete requests)
app.use('/record', recordRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // "Are you still there?" - Turret

function loaded(name) {
    let message = 'Loaded';
    if (name) message += ` ${name}`;
    console.log(message);
}