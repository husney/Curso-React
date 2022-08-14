import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) =>{    

    return (
        <>
            <h1>{saludo}</h1>
            <p>Mensaje......</p>
        </>
    );    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo : "Saludo por defecto"
}

export default PrimeraApp;

