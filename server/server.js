const express = require('express');
const app = express();
const PORT = 5000;

// This will live in the database shortly
const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));

// routes (get, post, put, delete requests)
app.get('/records', (req, res) => {
    loaded('/records');
    res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
    loaded('/add-record');
    res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // "Are you still there?" - Turret

function loaded(name) {
    let message = 'Loaded';
    if (name) message += ` ${name}`;
    console.log(message);
}