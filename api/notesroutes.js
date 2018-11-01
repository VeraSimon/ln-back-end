const express = require('express');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');
require('dotenv').config();

const { getNotes, postNote, putNote, delNote } = require('../data/models/notesmodels');

const router = express.Router();
const uuidName = process.env.UUID_NAME || '00000000-0000-0000-0000-000000000000';
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;

router.get('/get/all', (req, res, next) => {
	getNotes()
		.then((notesList) => {
			if (debugging === true) console.log('notesList:', notesList);
			res.status(200).json(notesList);
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

router.get('/get/:id', (req, res, next) => {
	const { id } = req.params;
	getNotes(id)
		.then((note) => {
			if (debugging === true) console.log('note:', note);
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

router.post('/create', (req, res, next) => {
	if (req.body.title && req.body.textBody) {
		const { title, textBody } = req.body;
		if (debugging === true) console.log('title:', title, '\n', 'textBody:', textBody);
		const _id = uuidv5(uuidName, uuidv4());
		if (debugging === true) console.log('_id:', _id);
		const newNote = { title, textBody, _id, __v: 0 };
		postNote(newNote)
			.then((id) => {
				if (debugging === true) console.log('id:', id);
				if (id[0] >= 0 || id.rowCount > 0) {
					res.status(201).json({ success: _id });
				} else {
					next([
						'h500',
						'Not sure what happened to the database here. Maybe it went down? Contact the systems administrator with the approximate time you got this message.',
						{ message: 'Something is wrong with the database. Let the DB administrator know about when this happened.' }
					]);
				}
			})
			.catch((err) => {
				next(['h500', err]);
			});
	} else {
		next(['h400', 'Missing note properties']);
	}
});

router.put('/edit/:id', (req, res, next) => {
	const _id = req.params.id;
	if (req.body.title && req.body.textBody && req.body.tags) {
		const { title, textBody } = req.body;
		if (debugging === true) console.log('title:', title, '\n', 'textBody:', textBody);
		// using getNotes(id) in lieu of having a DB that can auto-increment a column on update
		getNotes(_id)
			.then((note) => {
				if (debugging === true) console.log('note:', note);
				if (note !== undefined) {
					let __v = note['__v'];
					__v += 1;
					const updatedNote = { title, textBody, _id, __v };
					// here's the putNote(editedNote)!
					putNote(updatedNote)
						.then((updateCount) => {
							if (debugging === true) console.log('updateCount:', updateCount);
							res.status(200).json({ updateCount });
						})
						.catch((err) => {
							next(['h500', err]);
						});
				} else {
					next(['h404', `The note with ID '${_id}' was not found!`]);
				}
			})
			.catch((err) => next(['h500', err]));
	} else {
		next(['h400', 'Missing note property!']);
	}
});

router.delete('/delete/:id', (req, res, next) => {
	const id = req.params.id;
	delNote(id)
		.then((deleteCount) => {
			if (debugging === true) console.log('deleteCount:', deleteCount);
			if (deleteCount > 0) {
				res.status(200).json({ success: `Note '${id}' was deleted successfully!` });
			} else {
				next(['h404', 'Note not found!', { message: `Note '${id}' not found!` }]);
			}
		})
		.catch((err) => {
			next(['h500', err]);
		});
});

module.exports = router;
