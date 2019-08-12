const fs = require("fs");
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'))
  } else {
    console.log(chalk.red.inverse('Note title taken!!!'))
  }
};

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter(note => note.title !== title)
    if(notes.length === newNotes.length) {
        console.log(chalk.red.inverse("No note found!"))
    } else {
        console.log(chalk.green.inverse("Note removed!"))
      saveNotes(newNotes)  
    }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.cyan("Your notes"));
  notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title)

  if(foundNote) {
    console.log(chalk.cyan.inverse(foundNote.title))
    console.log(foundNote.body)
  } else {
    console.log(chalk.red.inverse("Unable to find title or title doesn't exist!"))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
