import React from 'react';
import "../header/Header.css"
import Sidebar from '../sidebars/Mainsidebar/Mainsidebar';
const Header = () => {
    return (
        <>
        <div className='sampleparent flex flex-col'>
    <div className='headerone flex justify-between px-8 py-4 border-2 border-black'>
    <div className='lefticon'>
        <img src='./Assets/Images/Arealyou.svg' className='companylogo w-full' alt='logo'/>
    </div>
    <div className='rightmenu flex items-center gap-4'>
        <div className='processbar flex justify-between items-center  '>
            <div className='percentage-cicle flex items-center justify-center'><p className='completepercent'>100%</p></div>
            <p className='progress-text'>Complete Setup</p>
            <svg className='rightarrow' xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
<path d="M1 1L7 6.5L1 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>
        </div>
        <button className='navbarbtn'>
            <img  src='./Assets/Images/searchhead.svg' className='searchicon w-7 h-6' alt='search'/>
        </button>
        <button className='navbarbtn'>
            <img src='./Assets/Images/notification.svg' className='notification w-5 h-6' alt='notification'/>
        </button>
        <button className='navbarbtn'>
            <img src='./Assets/Images/ring.svg' className='ringone w-6 h-6' alt='ring'/>
        </button>
        <button className='userprofilebtn text-center '>
            <p className='userprofile'>A</p>
        </button>
    </div>
    </div>
    {/* <div className='seconddiv flex-1 '><Sidebar/></div> */}
    </div>
    </>
    );
}



export default Header;