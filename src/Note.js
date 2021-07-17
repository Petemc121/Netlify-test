import React, {useState, useRef} from 'react'


export default function Note({note, technique, handleDeleteNote, editNote}) {
   const [editDisplay, setEditDisplay] = useState("block");
   const [noteDisplay, setNoteDisplay] = useState("none");
   const noteRef = useRef();
   const [updateDisplay, setUpdateDisplay] = useState("none");
        
    
 const handleUpdateNote = () => {
   let editValue = noteRef.current.value
   editNote(editValue,note.noteID, technique)
       setUpdateDisplay("none")
       setNoteDisplay("none")
       setEditDisplay("block")
       editValue = null;
    }

    const handleEditNote = () =>
    {
        setEditDisplay("none")
        setNoteDisplay("block")
        setUpdateDisplay("block")
        
    }

   

    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} style={{display: noteDisplay}} type="text" placeholder="Place your note here."></input>
            <div class="notesOut"><span>{note.noteText}</span></div>
            <button class="noteModify" style={{display: updateDisplay}} onClick={handleUpdateNote}>Update</button> 
            <button class="noteModify" style={{display: updateDisplay}} onClick={() => { handleDeleteNote(note.noteID, technique.id)}} >Delete</button> 
            <button class="noteModify" style={{display: editDisplay, margin:"10px 0px 10px 0px"}} onClick={handleEditNote}>Edit</button> 
            </div>
        </div>
    )
}
