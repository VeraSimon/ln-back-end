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
				next(['h404', `The note with ID '${id}' was not found.`]);
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
		const newNote = { title, text_body: textBody, _id, __v: 0 };
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

router.put('/:id', (req, res, next) => {
	const _id = req.params.id;
	// so much nonsense __v.
	// can't reference req.body.__v directly, despite it conforming with javascript naming convention.
	// can't increment it in place.
	// all this just to keep functional parity with the original backend.
	// >.>
	// <.<
	if (req.body.title && req.body.textBody && typeof req.body['__v'] === 'number') {
		const { title, textBody } = req.body;
		console.log(req.body['__v']);
		let __v = req.body['__v'];
		__v += 1;
		console.log(__v);
		const updatedNote = { title, text_body: textBody, _id, __v };
		putNote(updatedNote)
			.then((updateCount) => {
				if (updateCount > 0) {
					res.status(200).json({ updateCount });
				} else {
					next(['h404', `The note with ID '${_id}' was not found!`]);
				}
			})
			.catch((err) => {
				next(['h500', err]);
			});
	} else {
		next(['h400', 'Missing note property!']);
	}
});

router.delete('/:id', (req, res, next) => {
	delNote(req.params.id)
		.then((deleteCount) => {
			if (deleteCount > 0) {
				res.status(200).json({ deleteCount });
			} else {
				next(['h404', 'Note not found!']);
			}
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

module.exports = router;
