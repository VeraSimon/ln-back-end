const express = require('express');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');

const { getNotes, postNote, putNote, delNote } = require('../data/models/notesmodels');

const router = express.Router();

// uuidv5('Lambda Notes', uuidv4);

// router.get('/', (req, res, next) => res.status(200).json({ message: 'Hello, world!' }));

router.get('/', (req, res, next) => {
	getNotes()
		.then((notesList) => {
			res.status(200).json(notesList);
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

router.get('/:id', (req, res, next) => {});

router.post('/', (req, res, next) => {});

router.put('/:id', (req, res, next) => {});

router.delete('/:id', (req, res, next) => {});

module.exports = router;
