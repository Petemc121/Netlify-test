import React from 'react'
import CategoryKey from './CategoryKey.js'

export default function CategoryKeys({categoryKeys, handleDrop}) {
    return (
        <div id="categoryKeyContain">
            {categoryKeys.map(categoryKey => {
                return <CategoryKey key={categoryKey.id} handleDrop={handleDrop} categoryKey={categoryKey}/> 
            })}
        </div>
    )
}
