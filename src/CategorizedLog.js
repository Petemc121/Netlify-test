import React from 'react'

export default function CategorizedLog(categorizedLog) {
    return (
        <div draggable="true" id={categorizedLog.id} onDrag={handleDragStart} style={{backgroundColor: log.color}} class="log">
        <h4>Technique</h4>
         {categorizedLog.technique}

         <h4>Notes</h4>

         <Notes key={categorizedLog.id} notes={notes}/>

         <button ref={addButton} onClick={handleAddNote} id="add">+</button>
         <button ref={addButton} onClick={() => handleDeleteLog(log.id)} id="delete">Delete Note</button>

     </div>
    )
}
