const db = require('../dbconfig');

const getNotes = (id) => {
	if (id) {
		return db('note_tags')
			.select('notes.id', 'notes.title', 'notes.text_body', 'tags.tag')
			.innerJoin('notes', 'notes.id', 'note_tags.note_id')
			.innerJoin('tags', 'tags.id', 'note_tags.tag_id')
			.where('notes.id', id)
			.first();
	} else {
		return db('notes_tags')
			.select('notes.id', 'notes.title', 'notes.text_body', 'tags.tag')
			.innerJoin('notes', 'notes.id', 'note_tags.note_id')
			.innerJoin('tags', 'tags.id', 'note_tags.tag_id')
			.orderBy('notes.id');
	}
};

const postNote = (newNote) => {};

const putNote = (updatedNote) => {};

const delNote = (id) => {};

module.exports = {
	getNotes,
	postNote,
	putNote,
	delNote
};