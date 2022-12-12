

const chalk =  require('chalk');
const validator = require('validator');
const { describe, string } = require('yargs');
const yargs = require('yargs');

const note = require('./notes');

  



// Create add command
yargs.command({
    command : "add",
    describe: "Add a new note",
    builder :{
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Note body",
            demandOption: true,
            type: 'string'
        },


    },
    handler(argv) {
     note.addNote(argv.title,argv.body)
    }
})
// Create remove command

yargs.command({
    command : "remove",
    describe: "Remove a  note",
    builder :{
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
       
    }
})
// Create read command
yargs.command({
    command : "read",
    describe: "Read a note",
    builder :{
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNotes(argv.title);
    }
})
// Create List command
yargs.command({
    command : "list",
    describe: "list of note",
    handler(argv) {
    note.listNotes();
    }
})
yargs.parse()
//  yargs.parse all the command
// console.log(yargs.argv);

