import React, { useState } from "react"
// import PropTypes from "prop-types"

const CounterApp = props => {

    const [ cuenta, setCuenta ] = useState(0);
    
    

    const handleClickAumentar = (e) => {
        setCuenta(cuenta + 1);
    }

    const handleClickDisminuir = e => {
        setCuenta(x => x > 0 ? x - 1 : 0);
    }

    const handleClickReiniciar = e => {
        setCuenta(0);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{cuenta}</h2>

            <div>
                <button onClick={handleClickDisminuir}>Disminuir</button>
                <button onClick={handleClickAumentar}>Aumentar</button>                
            </div>
            <button onClick={handleClickReiniciar}>Reiniciar</button>
        </>
    )
}

export default CounterApp;