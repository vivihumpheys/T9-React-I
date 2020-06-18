import React from 'react';

function SectionName (props) {
    let valor = 'digite algo';
    return (
        <>
        <input type='text' onChange = {(e) => console.log(e.target.value) }></input>
        <p>{valor}</p>
        </>
    )
   
}

export default SectionName;