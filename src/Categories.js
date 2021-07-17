import React from 'react'
import Category from './Category';

export default function Categories({categories, handleDeleteCategory, handleEditCatTechNote, handleAddCatTechNote, techniques, handleDeleteCatTechnique, handleDeleteCatTechNote, handleDrop}) {
    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category handleDeleteCatTechNote={handleDeleteCatTechNote} handleAddCatTechNote={handleAddCatTechNote} handleDeleteCategory={handleDeleteCategory} handleEditCatTechNote={handleEditCatTechNote} handleDeleteCatTechnique={handleDeleteCatTechnique} handleDrop={handleDrop} techniques={techniques} key={category.id} category={category} />;
            })}
        </div>
    )
}
