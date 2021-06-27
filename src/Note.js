import React, {useState, useRef} from 'react'


export default function Note({note}) {
   const [edit, setEdit] = useState("Your note will appear here.")
   const [editDisplay, setEditDisplay] = useState("block");
   const [noteDisplay, setNoteDisplay] = useState("none");
   const noteRef = useRef();
   const [updateDisplay, setUpdateDisplay] = useState("none");
        
    
 const updateNote = () => {
   let editValue = noteRef.current.value
   console.log(editValue)
       setEdit(editValue);
       setUpdateDisplay("none")
       setNoteDisplay("none")
       setEditDisplay("block")
       editValue = null;
    }

    const editNote = () =>
    {
        setEditDisplay("none")
        setNoteDisplay("block")
        setUpdateDisplay("block")
        console.log(updateDisplay)
        console.log(editDisplay)
    }





    return (
        <div>
            <h4>Note {note.noteID}:</h4>
            <div class="noteContain">
            <input ref={noteRef} style={{display: noteDisplay}} type="text" placeholder="Place your note here."></input>
            <div class="notesOut">{edit}</div>
            <button class="update" style={{display: updateDisplay}} onClick={updateNote}>Update</button> 
            <button class="edit" style={{display: editDisplay, margin:"10px 0px 10px 0px"}} onClick={editNote}>Edit</button> 
            </div>
        </div>
    )
}
