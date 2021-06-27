import React from 'react'
import Note from './Note.js'

export default function Notes({notes}) {

  

    return (
        <div class="notesCon">
            {notes.map(note => {
                return <Note key={note.noteID} note={note}/>;
            })}
        </div>
    )
}
