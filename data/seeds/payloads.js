const notesPayload = [
	{ _id: 'cc2cc3e9-5e20-5fbe-83e8-2ff155a7b993', title: 'rowValue1', textBody: 'rowValue1', __v: 0 },
	{ _id: 'b573109c-02ed-5389-b402-9d5c06863183', title: 'rowValue2', textBody: 'rowValue2', __v: 2 },
	{ _id: '4b947927-a164-5657-aac6-47b4d3697d03', title: 'rowValue3', textBody: 'rowValue3', __v: 7 },
	{
		_id: '9b7fe816-3341-5742-8926-f51075153acb',
		title: 'aaaaAAAaaaaaaaaA aaa',
		textBody: 'body text! body text! radioactive body text!',
		__v: 7
	}
];

const tagsPayload = [{ tag: 'tag 1' }, { tag: 'tag 3' }, { tag: 'dgdrgdsbdtgerg' }];

const noteTagsPayload = [
	{ note_id: 'cc2cc3e9-5e20-5fbe-83e8-2ff155a7b993', tag_id: 2 },
	{ note_id: '4b947927-a164-5657-aac6-47b4d3697d03', tag_id: 3 },
	{ note_id: 'b573109c-02ed-5389-b402-9d5c06863183', tag_id: 1 },
	{ note_id: 'b573109c-02ed-5389-b402-9d5c06863183', tag_id: 3 }
];

module.exports = {
	notesPayload,
	tagsPayload,
	noteTagsPayload
};
