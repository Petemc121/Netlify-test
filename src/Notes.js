import React from 'react'
import Note from './Note.js'

export default function Notes({technique, handleDeleteNote, editNote}) {

  console.log(technique)
    return (
        <div class="notesCon">
            {
            technique.notes.map(note => {
                return <Note key={note.noteID} editNote={editNote} handleDeleteNote={handleDeleteNote} technique={technique} note={note}/>;
            })
            }
        </div>
    )
        
}
