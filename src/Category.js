import React, {useState} from 'react'
import CategorizedLogs from './CategorizedLogs'


export default function Category({category, logs}) 
{

    const [catLogs, setCatLogs] = useState([])

    const handleAddTechnique = () => {
 
        
     setCatLogs(prevCatTechniques => {
        
         return [...prevCatTechniques, {} ]
         
     })
    }

    return (
        <div droppable="true" onDrop={handleAddTechnique} style={{backgroundColor:category.color}} class="category">
            <h1>{category.category + ":"}</h1>
            <CategorizedLogs />
        </div>
    )
}
