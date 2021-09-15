import React from 'react'
import Technique from './Technique'

export default function Techniques({techniques, handleTouchDragStart, handleTouchDragEnd, editVideo, handleDeleteTechnique, handleDeleteNote, editNote,addNote}) {
   
  

    return (
       
        <div id="bjjLogsCon">
            
           {techniques.map(technique => {

               return <Technique key={technique.id} handleTouchDragStart={handleTouchDragStart} handleTouchDragEnd={handleTouchDragEnd} editNote={editNote} editVideo={editVideo} addNote={addNote} handleDeleteTechnique={handleDeleteTechnique} handleDeleteNote={handleDeleteNote} technique={technique} />
           })}
           
        </div>
      
    )

    
}

