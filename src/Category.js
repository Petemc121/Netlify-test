import React, {useState} from 'react'
import CategorizedTechniques from './CategorizedTechniques';


export default function Category({category, handleDeleteCategory, handleEditCatTechNote, editCatTechVideo, handleAddCatTechNote, handleDeleteTechnique, handleDeleteCatTechnique, handleDrop, handleDeleteCatTechNote}) {

     


    const handleDragOver = (e) =>
    {   e.preventDefault();
        e.target.style.filter = "brightness(200%)";
    }

    
 
    const handleDragLeave = (e) =>
    {
        e.target.style.filter = "brightness(100%)";
    }

  

    return (
        <div id={category.id} onDrop={(e) => handleDrop(e ,category)} onDragOver={handleDragOver}  onDragLeave={handleDragLeave} droppable="true" style={{backgroundColor:category.color}} class="category">
            <h1 class="categoryHeaders">{category.category }</h1>
            <p style={{fontFamily:'"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>Click the technique name to expand or contract.</p>
            <CategorizedTechniques editCatTechVideo={editCatTechVideo} category={category} handleDeleteCatTechNote={handleDeleteCatTechNote} handleAddCatTechNote={handleAddCatTechNote} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} catTechniques={category.catTechniques} handleDeleteTechnique={handleDeleteTechnique}/>
            <button class="categoryButtons" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
        </div>
    )
}
