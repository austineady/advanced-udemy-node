const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');

        return JSON.parse(notesString);
    }
    catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        id: notes.length + 1,
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((note) => note.title === title);

    return filteredNote.length === 0 ? null : filteredNote[0];
};

var removeNoteByTitle = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return filteredNotes.length !== notes.length;
};

var removeNoteById = (id) => {
    var notes = fetchNotes();
    notes.splice(id - 1, 1);
    saveNotes(notes);

    return true;
};

var logNote = (title, note) => {
    console.log('---');
    console.log(title);
    console.log('---');
    console.log(`Title: ${ note.title }`);
    console.log(`Body: ${ note.body }`);
    console.log('---');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNoteByTitle,
    removeNoteById,
    logNote
};