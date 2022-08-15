import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({setCategoria}) => {    

    const [info, setInfo] = useState("");

    const handleAgregar = (e) => {
        e.preventDefault()
        if(info.trim().length > 1){
            setCategoria(x => [...x, info]);
            setInfo("");
        }
            
    }

    const handleChange = (e) => {
        setInfo(e.target.value);        
    }

    return (
        <>
           <form onSubmit={handleAgregar}>
                <input
                    id='categoria'
                    type="text"
                    value={info}
                    onChange={handleChange}                    
                    placeholder="Agregar categoria..."
                ></input>     
            </form>       
        </>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
//9

export default AddCategory;


