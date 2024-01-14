import React from 'react';
import "./Icon.css"
export const Icon =({name , source, handleclick, selectedIcon})=>{

    return(
        <>
        <div className='icon-prnt' >
            {/* <img src={source} onClick={()=>{handleclick(name)}}  alt='iconimg'/> */}
             <img className='w-full' src={source} onClick={()=>handleclick(name)} alt='iconimg'/>
        </div>
        </>
    )
}