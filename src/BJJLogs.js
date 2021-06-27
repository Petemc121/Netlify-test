import React from 'react'
import Log from './Log'

export default function BJJLogs({logs}) {

    return (
       
        <div id="bjjLogsCon">
            
           {logs.map(log => {
               return <Log key={log.id} log={log} />
           })}
           
        </div>
      
    )
}

