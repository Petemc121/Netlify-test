import React from 'react'
import Category from './Category';

export default function Categories({categories}) {

 

    return (
        <div id="categoriesCon">
            {categories.map(category => {
                return <Category key={category.id} category={category} />;
            })}
        </div>
    )
}
