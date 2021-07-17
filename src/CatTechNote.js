import React, {useState, useRef} from 'react'

export default function CatTechNote({handleEditCatTechNote, expanded, catTechnique, handleDeleteCatTechNote,  catTechNote}) {

    const [editDisplay, setEditDisplay] = useState("block");
    const [noteDisplay, setNoteDisplay] = useState("none");
    const noteRef = useRef();
    const [updateDisplay, setUpdateDisplay] = useState("none");
         
     
  const handleUpdateCatTechNote = () => {
    let editValue = noteRef.current.value
    handleEditCatTechNote(editValue,catTechNote.noteID, catTechnique)
        setUpdateDisplay("none")
        setNoteDisplay("none")
        setEditDisplay("block")
        editValue = null;
     }
 
     const handleDisplayEditCatTechNote = () =>
     {
         setEditDisplay("none")
         setNoteDisplay("block")
         setUpdateDisplay("block")
         
     }
 
 

    return (
        <div>
               <h4 style={{display:expanded}} >Note {catTechNote.noteID}:</h4>
            <div style={{display:expanded}}  class="noteContain">
            <div class="buttonCon">
            <input ref={noteRef} style={{display: noteDisplay, textAlign:"center"}} type="text" placeholder="Place your note here."></input>
            <div class="notesOut">{catTechNote.noteText}</div>
           
            <button class="noteModify" style={{display: updateDisplay}} onClick={handleUpdateCatTechNote}>Update</button> 
            <button class="noteModify" style={{display: updateDisplay}} onClick={() => { handleDeleteCatTechNote(catTechNote.noteID, catTechnique.id)}}>Delete</button> 
            <button class="noteModify" style={{display: editDisplay, margin:"10px 0px 10px 0px"}} onClick={handleDisplayEditCatTechNote}>Edit</button> 
            </div>
            </div>
        </div>
    )
}
