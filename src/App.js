import React, { useState, useRef } from 'react';
import BJJLogs from './BJJLogs';


export default function App() {
   const [logs, setBJJLogs] = useState([]);
   const instructionalRef = useRef();
   const techniqueRef = useRef();
   let logNo = 0;
    function createLog(e) {
       const instructional =  instructionalRef.current.value;
       const technique = techniqueRef.current.value;
       const color = "#" + Math.floor(Math.random()*16777215).toString(16);
       if(technique === "")
       { alert("Please enter a technique.") 
       return;
        }
       setBJJLogs(prevLogs => {
           logNo++
           return [...prevLogs, {id: logNo, instructional:instructional, technique:technique, color:color}];
       })
       instructionalRef.current.value = null
       techniqueRef.current.value = null
    }

    
   

    return (
        <>
        <div id="header">BJJ NOTES</div>
        <div id="inContain">
        <label for="instructional">Instructional</label>    
        <input ref={instructionalRef} id="instructional" class="input" type="text"></input>
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} id="addNote" class="input">Add Technique</button>
        </div>
        <BJJLogs logs={ logs } />
        </>
    )
    
}


