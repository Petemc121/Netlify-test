
import React, {useState,useRef} from 'react'
import CatTechNotes from './CatTechNotes'

export default function CategorizedTechnique({handleAddCatTechNote, category, handleEditCatTechNote, handleDeleteCatTechNote, catTechnique, handleDeleteCatTechnique}) {
    const addButton = useRef();
    const [expanded, setExpanded] = useState('none');
    

    function addCatTechNote() {

        const newNotes = [...catTechnique.notes, {noteText:"Add your note here.", noteID:catTechnique.notes.length + 1, noteTitle:"Note " + (catTechnique.notes.length + 1)}]
        handleAddCatTechNote(newNotes, catTechnique);

    }

    function handleDragStart(e) {
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }

      
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }

      function expand() {
        if(expanded == 'none')
        {
          setExpanded('block')
        } else
        {
          setExpanded('none')
        }
      }


    return (
        <div id={catTechnique.id}  onDrag={handleDragStart} onDragEnd={handleDragEnd} style={{backgroundColor: catTechnique.color}} class="log">
    
         <h3 onClick={expand}>{catTechnique.technique}</h3>

         <h4 style={{display:expanded}}>Notes</h4>

         <CatTechNotes style={{display:expanded}} expanded={expanded} key={catTechnique.id} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechNote={handleDeleteCatTechNote} catTechnique={catTechnique}/>

         <button style={{display:expanded}} ref={addButton} onClick={addCatTechNote} id="add">+</button>
         <button style={{display:expanded}} ref={addButton} onClick={() => handleDeleteCatTechnique(catTechnique.id, category.id)} id="delete">Delete</button>

     </div>
    )
}
