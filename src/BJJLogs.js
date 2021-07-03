import React from 'react'
import Log from './Log'

export default function BJJLogs({logs, handleDeleteLog}) {
    const handleDragStart = (e) => {
        console.log('hello')
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
          card.style.opacity = '0.4';  // this / e.target is the source node.
          }

    return (
       
        <div id="bjjLogsCon">
            
           {logs.map(log => {

               return <Log key={log.id} id={log.id} onClick={handleDragStart} handleDeleteLog={handleDeleteLog} log={log} />
           })}
           
        </div>
      
    )

    
}

