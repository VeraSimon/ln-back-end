const express = require('express');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');

const { getNotes, postNote, putNote, delNote } = require('../data/models/notesmodels');

const router = express.Router();
const uuidName = process.env.UUID_NAME || '00000000-0000-0000-0000-000000000000';

router.get('/', (req, res, next) => {
	getNotes()
		.then((notesList) => {
			res.status(200).json(notesList);
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	getNotes(id)
		.then((note) => {
			if (note !== undefined) {
				res.status(200).json(note);
			} else {
				next(['h404', `Note with ID ${id} not found.`]);
			}
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

router.post('/', (req, res, next) => {
	const { title, textBody } = req.body;
	if (title && textBody) {
		const _id = uuidv5(uuidName, uuidv4());
		const newNote = { title: title, text_body: textBody, _id: _id, __v: 0 };
		postNote(newNote)
			.then((note) => {
				res.status(201).json({ id: note });
			})
			.catch((err) => {
				next(['h500', err]);
			});
	} else {
		next(['h400', 'Missing note properties']);
	}
});

router.put('/:id', (req, res, next) => {});

router.delete('/:id', (req, res, next) => {});

module.exports = router;
