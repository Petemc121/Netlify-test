import React, {useRef} from 'react'

export default function CategoryKey({categoryKey, handleDrop}) {



    const div = useRef();

    const brighten = () =>
    {
        div.current.style.filter = "brightness(110%)"
    }

    const revert = (e) =>
    {
        div.current.style.filter = "brightness(100%)"
    }

    const handleDragOver = (e) =>
    {   e.preventDefault();
        e.target.style.filter = "brightness(200%)";
        console.log(categoryKey)
    }

    
 
    const handleDragLeave = (e) =>
    {
        e.target.style.filter = "brightness(100%)";
    }

    

    return (
        <a onMouseOver={brighten} onMouseOut={revert} href={`#${categoryKey.id}`} style={{textDecoration:"none"}} >
        <div id={categoryKey.id + "key"} onDrop={(e) => handleDrop(e, categoryKey)} onDragOver={handleDragOver} onDragLeave={handleDragLeave} droppable="true"  ref={div}  class="categoryKeys" style={{backgroundColor:categoryKey.color}}>
            {categoryKey.category}
        </div>
        </a>
    )
}
