const db = require('../dbconfig');

const getNotes = (id) => {
	if (id) {
		// return db('note_tags')
		// 	.select('notes.id', 'notes.title', 'notes.text_body', 'tags.tag')
		// 	.innerJoin('notes', 'notes.id', 'note_tags.note_id')
		// 	.innerJoin('tags', 'tags.id', 'note_tags.tag_id')
		// 	.where('notes.id', id)
		// 	.first();
		return db('notes')
			.where('_id', id)
			.first();
	} else {
		// 	return db('notes_tags')
		// 		.select('notes.id', 'notes.title', 'notes.text_body', 'tags.tag')
		// 		.innerJoin('notes', 'notes.id', 'note_tags.note_id')
		// 		.innerJoin('tags', 'tags.id', 'note_tags.tag_id')
		// 		.orderBy('notes.id');
		return db('notes');
	}
};

const postNote = (newNote) => {
	// newNote.tags.forEach((tag) => {
	//     db('tags')
	//     .insert(tag)
	//     .into('tags');
	// });

	return db('notes')
		.insert(newNote)
		.into('notes');
};

const putNote = (updatedNote) => {
	const { title, textBody, _id, __v } = updatedNote;
	return db('notes')
		.where({ _id })
		.update(title, (text_body = textBody), _id, __v);
};

const delNote = (_id) => {
	return db('notes')
		.where({ _id })
		.del();
};

module.exports = {
	getNotes,
	postNote,
	putNote,
	delNote
};
