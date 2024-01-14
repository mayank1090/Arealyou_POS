import React from 'react';
import "./Subcolumncard.css"

const Subcolumncardofrow = ({children}) => {
    return <div className='onecolumnsection flex'  style={{borderRadius: "0.75rem",border: "1px solid #646464"}}>{children}</div>;
}


export default Subcolumncardofrow;