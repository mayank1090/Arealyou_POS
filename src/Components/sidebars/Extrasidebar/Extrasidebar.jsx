// SecondarySidebar.js
import React from 'react';
import './Extrasidebar.css'; // Import your SecondarySidebar CSS

const SecondarySidebar = ({mainhead="Sales",subhead1=["new sales","new sales summary"],subhead2=["new sales","new sales summary"],subhead3=["giftcard","membership"]}) => {
  return (
    <div className="secondary-sidebar overflow-auto scrollbar-hide">
      <div className='uppersubheadprnt'>
      <h2 className='sidebarheading'>{mainhead}</h2>
      {subhead1.map((stringvalue)=>{
        return <p key={stringvalue} className='subheadp'>{stringvalue}</p>
      })}
      </div>

      <div className='uppersubmidprnt'>
      {subhead1.map((stringvalue)=>{
        return <p key={stringvalue} className='subheadp'>{stringvalue}</p>
      })}
      </div>

      <div className='uppersubmlastdprnt'>
      {subhead3.map((stringvalue)=>{
        return <p key={stringvalue} className='subheadp'>{stringvalue}</p>
      })}
      </div>
    </div>
  );
};

export default SecondarySidebar;
