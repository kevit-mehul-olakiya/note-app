const chalk = require('chalk')
const fs = require('fs')
const { title } = require('process')
const getNote = () => {
    return "Your Note..."
}

const addNote = (title, body) => {
    try {
        const notes = loadNotes()
    // const duplicatenotes = notes.filter((note) => note.title === title)
    // alternative of filter
    const duplicatenote = notes.find((note) => note.title === title)
    debugger


    if (!duplicatenote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.bgGreen("New Note Added.."));
    } else {
        console.log(chalk.bgRed("Note has Already Added..."))
    }

    saveNote(notes)
    } catch (error) {
        console.trace(error);
        console.log(error);
    }

}
const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
    catch (error) {
        return []
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes()
    const matchNote = notes.filter((note) => note.title !== title)
    if (notes.length > matchNote.length) {
        saveNote(matchNote)
        console.log(chalk.bgGreen("Note Removed..."));
    } else {
        console.log(chalk.bgRed("No Note found..."));
    }

}

const listNotes = () =>{
   
  console.log(chalk.yellow.inverse("Your Note!"));
  const notes = loadNotes()
//   console.log(notes);
//  notes.forEach((note)=>{
//     console.log(note.title);
//  });
// alternative forEach
// My Change code 
 notes.map((note)=>{
    console.log(note.title);
 });
}
const readNotes = (title) =>{
    const notes = loadNotes()
   const note = notes.find((note)=>note.title === title);
    if (note) {
        console.log(chalk.blue.inverse(title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Title Not Found!"));
    }
   

}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
};