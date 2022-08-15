import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

const GifExpertApp = props => {

    
    const [categories, setCategories] = useState(['One punch', 'One piece', 'Dragon ball', 'Naruto']);


    return(
        <>
            <h2>GifExpertApp</h2>
            <select id={`categorias${Date.now}`}>
                { categories.map((x, i) => {
                   return <option key={i}>{x}</option>
                }) }
            </select>
            <AddCategory setCategoria={setCategories} />
        </>
    )
}

export default GifExpertApp;
