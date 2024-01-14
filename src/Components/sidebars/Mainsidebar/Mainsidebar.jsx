// Sidebar.js
import React, { useState } from 'react';
import SecondarySidebar from '../Extrasidebar/Extrasidebar';
import './Mainsidebar.css'; // Import your Sidebar CSS
import { Icon } from '../../Icon/Icon';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [secondarySidebar, setSecondarySidebar] = useState(false);
  const [selectedIcon, setSelectedicon] =useState("")

  const home="./Assets/Images/home.png";
  const stat="./Assets/Images/stat.png";
  const smile="./Assets/Images/smile.png";
  const threeline="./Assets/Images/linethree.png";
  const profile="./Assets/Images/profile.png";
  const kyc="./Assets/Images/kyc.png"; 
  const graph="./Assets/Images/graph.png";
  const setting="./Assets/Images/setting.png";
  const headphone="./Assets/Images/headphone.png";


  const handleIconClick = (iconname) => {
    // Toggle the visibility of the secondary sidebar
    setSecondarySidebar(!secondarySidebar);
    setSelectedicon(iconname)

    if(iconname!==selectedIcon){
      setSecondarySidebar(true)
    }
  };

  return (
    <div className='sidebar-container'>
    <div className="sidebar gap-4">
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="home" source={home} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/saledashboard"><Icon name="stat" source={stat} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="smile" source={smile} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="threeline" source={threeline} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="profile" source={profile} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="kyc" source={kyc} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="graph" source={graph} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="setting" source={setting} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
       <Link className=' w-11 h-11' to="/salegraphs"><Icon name="headphone" source={headphone} handleclick={handleIconClick} selectedIcon={selectedIcon}/></Link>
    </div>
    {secondarySidebar && <SecondarySidebar />}
    </div>
  );
};

export default Sidebar;
