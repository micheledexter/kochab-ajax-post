const express = require('express');
const router = express.Router();

const recordCollection = require('../modules/record-collection');

router.get('/', (req, res) => {
    console.log('GET: /record'); // Loaded message
    res.send(recordCollection);
});

router.post('/add', (req, res) => { // AKA '/record/add'
    console.log('POST: /record'); // Loaded message
    recordCollection.push(req.body);
    res.sendStatus(201);
});

module.exports = router;