import React, {useRef} from 'react'
import Notes from './Notes.js'

export default function Technique({technique, handleDeleteTechnique, handleDeleteNote, editNote, addNote}) {
    

   

    function handleAddNote() {
           
            const newNotes = [...technique.notes, {noteText:"Your note will be displayed here.", noteID:technique.notes.length + 1, noteTitle:"Note " + (technique.notes.length + 1)}]
            addNote(newNotes, technique);

    }

    function handleDragStart(e) {
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }

      
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }

   


    return (
        <div draggable="true" id={technique.id} onDrag={handleDragStart} onDragEnd={handleDragEnd}  style={{backgroundColor: technique.color}} class="log">

           <h3>{technique.technique}</h3> 

            <h4>Notes</h4>

            <Notes key={technique.id} handleDeleteNote={handleDeleteNote} editNote={editNote} technique={technique}/>

            <button  onClick={handleAddNote} id="add">+</button>
            <button  onClick={() => handleDeleteTechnique(technique.id)} id="delete">Delete</button>

        </div>
    )
}
