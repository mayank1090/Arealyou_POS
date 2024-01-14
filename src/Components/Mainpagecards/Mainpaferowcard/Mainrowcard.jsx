import React from 'react';
const Mainrowcard = ({children}) => {
    return <div className='flex flex-col  lg:flex-row lg:gap-0   gap-8 items-center lg:items-start  justify-around w-full pb-8'>
    {children}
      </div>
    ;
}

export default Mainrowcard;