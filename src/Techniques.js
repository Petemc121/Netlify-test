import React from 'react'
import Technique from './Technique'

export default function Techniques({techniques, handleDeleteTechnique, handleDeleteNote, editNote,addNote}) {
   
  

    return (
       
        <div id="bjjLogsCon">
            
           {techniques.map(technique => {

               return <Technique key={technique.id} editNote={editNote} addNote={addNote} handleDeleteTechnique={handleDeleteTechnique} handleDeleteNote={handleDeleteNote} technique={technique} />
           })}
           
        </div>
      
    )

    
}

