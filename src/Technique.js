import React, {useState, useRef} from 'react'
import Notes from './Notes.js'

export default function Technique({technique, handleTouchDragStart, handleTouchDragEnd, editVideo, handleDeleteTechnique, handleDeleteNote, editNote, addNote}) {
    
    const videoRef = useRef();
    const [editDisplay, setEditDisplay] = useState('block');
    const [updateDisplay, setUpdateDisplay] = useState('none');
    const [inputDisplay, setInputDisplay] = useState("none");
    const [videoDisplay, setVideoDisplay] = useState("none");

  

    function handleAddNote() {
           
            const newNotes = [...technique.notes, {noteText:"Add note here.", noteID:technique.notes.length + 1, noteTitle:"Note " + (technique.notes.length + 1)}]
            addNote(newNotes, technique);

    }

    function handleDragStart(e) {
      
        e.target.classList.add('dragging');  // this / e.target is the source node.
        
      }
      
    function handleDragEnd(e) {
    
        e.target.classList.remove('dragging');  // this / e.target is the source node.
        
      }

      function handleEditVideo() 
      {
        setEditDisplay('none');
        setUpdateDisplay('block');
        setInputDisplay('block');
      }

     function handleUpdateVideo()
     {
      setEditDisplay('block');
      setUpdateDisplay('none');
      setInputDisplay('none');

     const videoLink = videoRef.current.value;

  
      if (videoLink.includes('https://www.youtube.com/'))
      {
       editVideo(videoLink, technique.id);
       setVideoDisplay('block')
      } else {
        editVideo(videoLink, technique.id);
        setVideoDisplay('none')
        alert('Please use a valid Youtube link.')
      }

      }


    return (
        <div draggable="true" id={technique.id} onTouchMove={handleTouchDragStart} onTouchEnd={handleTouchDragEnd} onDrag={handleDragStart} onDragEnd={handleDragEnd} onDragEnter={(event) => {event.preventDefault()}} style={{backgroundColor: technique.color}} class="log">

           <h3>{technique.technique}</h3> 
           <h3>Video</h3> 
            <iframe class="videoFrame"
            title="Technique Video"
            src={technique.video}
            allowFullScreen
            frameBorder="0"
            style={{display:videoDisplay}}
            >

            </iframe>
            <input style={{display:inputDisplay}} ref={videoRef}></input>
            <button onClick={handleEditVideo} style={{display:editDisplay}} class="noteModify">Add/Edit Video</button>
            <button onClick={handleUpdateVideo} style={{display:updateDisplay}} class="noteModify">Update</button>
            <h4>Notes</h4>

            <Notes key={technique.id} handleDeleteNote={handleDeleteNote} editNote={editNote} technique={technique}/>

            <button  onClick={handleAddNote} id="add">+</button>
            <button  onClick={() => handleDeleteTechnique(technique.id)} id="delete">Delete</button>

        </div>
    )
}