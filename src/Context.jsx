import React from 'react';

export const PlatoContext = React.createContext();

const Platos = (props) => {
    const [Plato, setPlato] = React.useState('');
    
    return <PlatoContext.Provider value={{Plato, setPlato}}>{props.children}</PlatoContext.Provider>
    
}

export default Platos;


