import React from 'react'
import Category from './Category';

export default function Categories({categories, editCatTechVideo, handleDeleteCategory, handleEditCatTechNote, handleAddCatTechNote, techniques, handleDeleteCatTechnique, handleDeleteCatTechNote, handleDrop}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleDeleteCatTechNote={handleDeleteCatTechNote} handleAddCatTechNote={handleAddCatTechNote} editCatTechVideo={editCatTechVideo} handleDeleteCategory={handleDeleteCategory} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} handleDrop={handleDrop} techniques={techniques} key={category.id} category={category} />;
            })}
        </div>
    )
}
