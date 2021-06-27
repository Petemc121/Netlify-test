import React, {useState, useRef} from 'react'
import Notes from './Notes.js'

export default function Log({log}) {
    

    const addButton = useRef();
    const [notes, setNotes] = useState([])
    console.log(notes)
 


    function handleAddNote() {

       
        setNotes(notes => {
           
            return [...notes, {noteText:"", noteID:notes.length + 1, noteTitle:"Note " + (notes.length + 1)}]
            
        })


    }

   


    return (
        <div style={{backgroundColor: log.color}} class="log">
            <h4>Instructional</h4>
          {log.instructional}
           <h4>technique</h4>
            {log.technique}

            <h4>Notes</h4>

            <Notes key={log.id} notes={notes}/>

            <button ref={addButton} onClick={handleAddNote} id="add">+</button>

        </div>
    )
}
