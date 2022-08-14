
import { createRoot } from 'react-dom/client'
// import PrimeraApp from './Pruebas/PrimerApp';
import CounterApp from "./Componentes/CounterApp";
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CounterApp/>);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimerApp';
// import './index.css'

// const divRoot = document.getElementById('root');

// ReactDOM.render(<PrimeraApp />, divRoot);
