import React from 'react';
import "./Nocontent.css"

const Nocontent = ({imgpath,uppertext,lowertext}) => {
    return <div className='quicksaleprnt  mt-8 pt-8 pb-8 flex-grow w-full justify-center flex items-center'>
          <div className='whennoquicksaledata flex-grow flex items-center flex-col text-center'>
            <img src={imgpath} alt='nosale' className='nosaleimge w-9  '/>
            <p className='belownosale'>{uppertext}</p>
            <p className='lastnosale'>{lowertext}</p>
          </div>
        </div> ;
}


export default Nocontent;