import React from 'react';
import "./Saledashboardnavbar.css"
import { Link } from 'react-router-dom';
const Saledashboardnavbar = () => {
    return <div className='saledashnav-prnt w-full'>
        <p className='navbarheadprnt pb-5 pl-2'>New Sale</p>
        <div className='Sublulistofnavbar'>
            <ul className='ul-listofsalenav flex justify-between flex-wrap'>
            <Link to="/saledashboard/"><li className='saleitemli '>Quick sale</li></Link>
            <Link to="/saledashboard/checkoutsale"> <li className='saleitemli '>To check out</li></Link>
            <Link to="/saledashboard/products"><li className='saleitemli '>products</li></Link>
            <Link to="/saledashboard/service"><li className='saleitemli '>Services</li></Link>
            <Link to="/saledashboard/menbership"><li className='saleitemli '>Memberships</li></Link>
            <Link to="/saledashboard/giftcard"><li className='saleitemli '>Gift cards</li></Link>
            </ul>
        </div>
    </div>;
}

export default Saledashboardnavbar;