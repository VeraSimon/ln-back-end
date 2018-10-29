const express = require('express');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');

const { getNotes, postNote, putNote, delNote } = require('../data/models/notesmodels');

const router = express.Router();

// uuidv5('Lambda Notes', uuidv4);

router.get('/', (req, res, next) => res.status(200).json({ message: 'Hello, world!' }));

module.exports = router;
