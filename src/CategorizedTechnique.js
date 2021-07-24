
import React, {useState,useRef} from 'react'
import CatTechNotes from './CatTechNotes'

export default function CategorizedTechnique({editCatTechVideo, handleAddCatTechNote, category, handleEditCatTechNote, handleDeleteCatTechNote, catTechnique, handleDeleteCatTechnique}) {

    const addButton = useRef();
    const [expanded, setExpanded] = useState('none');
    const [editDisplay, setEditDisplay] = useState('block');
    const [updateDisplay, setUpdateDisplay] = useState('none');
    const [inputDisplay, setInputDisplay] = useState("none");
    const [videoDisplay, setVideoDisplay] = useState("none");
    const videoRef = useRef();

   
    

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
       editCatTechVideo(videoLink, catTechnique.id);
       setVideoDisplay('block')
      } else {
        editCatTechVideo(videoLink, catTechnique.id);
        setVideoDisplay('none')
        alert('Please use a valid Youtube link.')
      }

      }


      function expand() {


        if(expanded == 'none')
        {
          setExpanded('flex')
          if (catTechnique.video !== "")
          {
            setVideoDisplay('block')
          }
        } else
        {
          setExpanded('none')
        }
      }


    return (
        <div id={catTechnique.id}  onDrag={handleDragStart} onDragEnd={handleDragEnd} style={{backgroundColor: catTechnique.color}} class="log">
    
         <h3 onClick={expand}>{catTechnique.technique}</h3>
     <div style={{display:expanded}} class="videoContain">
         <h3>Video</h3> 
            <iframe class="videoFrame"
            title="Technique Video"
            src={catTechnique.video}
            allowFullScreen
            frameBorder="0"
            style={{display:videoDisplay}}
            >
            </iframe>

            <input style={{display:inputDisplay}} ref={videoRef}></input>
            <button onClick={handleEditVideo} style={{display:editDisplay}} class="noteModify">Add/Edit Video</button>
            <button onClick={handleUpdateVideo} style={{display:updateDisplay}} class="noteModify">Update</button>

       </div>

         <h4 style={{display:expanded}}>Notes</h4>

         <CatTechNotes style={{display:expanded}} expanded={expanded} key={catTechnique.id} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechNote={handleDeleteCatTechNote} catTechnique={catTechnique}/>

         <button style={{display:expanded}} ref={addButton} onClick={addCatTechNote} id="add">+</button>
         <button style={{display:expanded}} ref={addButton} onClick={() => handleDeleteCatTechnique(catTechnique.id, category.id)} id="delete">Delete</button>

     </div>
    )
}
