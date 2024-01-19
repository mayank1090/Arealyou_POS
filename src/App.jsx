import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Graphdashboard from './Components/MaincontentPages/Frontdashboard/Graphdashboard'
import Saledashboardnavbar from './Components/MaincontentPages/Saledashboards/SaledashNavbar/Saledashboardnavbar'
import Saledashboard from './Components/MaincontentPages/Saledashboards/Saledashboard'
import Header from './Components/header/Header'
import Sidebar from './Components/sidebars/Mainsidebar/Mainsidebar'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Salessummary from './Components/MaincontentPages/Salessummary/Salessummary/Salessummary'
import Appointmentpage from './Components/MaincontentPages/Appointments/Appointmentpage/Appointmentpage'
function App() {
  return (
    <>
    <div className='finalparent h-screen flex flex-col overflow-hidden'>
      <Header/>
     <div className='parent w-full flex flex-1 overflow-hidden'>
      <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
      <Route path='/saledashboard/*' element={<Saledashboard/>}/>
      <Route path='/' index element={<Graphdashboard/>}/>
      <Route path='/salessummary' element={<Salessummary/>}/>
      <Route path='/appointment' element={<Appointmentpage/>}/>
      </Routes>
      </BrowserRouter>
     </div>
     <SpeedInsights/>
     </div>
    </>
  )
}

export default App
