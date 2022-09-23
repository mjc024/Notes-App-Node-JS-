const chalk= require('chalk')
const fs= require('fs')
const { title } = require('process')


const addNote=(title,body)=>{
          const notes=loadNotes()
        //   const duplicateN= notes.filter((note)=>note.title==title)
          const duplocateNote= notes.find((note)=>note.title==title)
          if(duplocateNote==undefined){
            notes.push({
                title:title,
                body:body
              })
              saveNotes(notes)
              console.log("New Note added")
          }
          else{
            console.log("Title aready taken!")
          }
          
}
const readNote=(title)=>{
    const notes= loadNotes()
    const findNote= notes.find((note)=>note.title==title)
    if(!findNote){
        console.log(chalk.inverse.red("No Note found"))
    }
    else{
        console.log(chalk.inverse("Title: "+findNote.title))
        console.log(chalk.grey(findNote.body))
    }

}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)

}

const removeNote=(title)=>{
    const notes=loadNotes()
    const updatedN=notes.filter((note)=>note.title!=title)
    
    if(notes.length!=updatedN.length){
        console.log(chalk.inverse.red("Note Removed"))
        saveNotes(updatedN)
    }
    else{
        console.log(chalk.inverse.green("Note Not Removed"))
    }
    console.log('Note removed Title: '+title)
}
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse.green("List of notes"))
    notes.forEach(element => {
        console.log("Title: "+element.title)
    });

}
const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e){
          return [];
    }

  
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
