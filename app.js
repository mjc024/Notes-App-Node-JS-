 const chalk= require('chalk')
const notes = require('./notes.js')

const { argv, title } = require('process')
const { demandCommand, demandOption } = require('yargs')
const yargs =require('yargs/yargs')(process.argv.slice(2))

yargs.version('1.1.0')


//create add command
yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder:{
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe:'Note Body',
                demandOption:true,
                type:'string'
            }

        },
        handler(argv){
            notes.addNote(argv.title,argv.body)
        }
        }
)

//Removing a note
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe:"Removing Note",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
    }
)

//Listing All notes
//Removing a note
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler(){
        notes.listNotes()
    }
    }
)

//Removing a note
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder:{
        title:{
            describe:"Enter the title to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
    }
)
yargs.parse()
// console.log(yargs.argv )




// add remove read list












// import getNotes from './notes.js'
// console.log(chalk.bold.red('AHAHAHAHHA') )
// console.log(process.argv[2])

// const validator= require('validator')



//const add =require('./utils.js')

//const sum = getNotes()
// console.log(sum)

// console.log(validator.isEmail('exaxample.com'))