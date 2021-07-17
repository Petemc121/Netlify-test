import React from 'react'
import CategorizedTechnique from './CategorizedTechnique';

export default function CategorizedTechniques({category, handleAddCatTechNote, handleEditCatTechNote, handleDeleteCatTechNote, catTechniques, handleDeleteCatTechnique}) {
 
    return (
       <div id="categorizedLogsCon">
           {catTechniques.map(catTechnique => {
             return  <CategorizedTechnique category={category} handleAddCatTechNote={handleAddCatTechNote} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechNote={handleDeleteCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} key={catTechnique.id} catTechnique={catTechnique} />
           })}
       </div>
    )
}
