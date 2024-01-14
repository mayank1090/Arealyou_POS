import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Graphdashboard from './Components/MaincontentPages/Frontdashboard/Graphdashboard'
import Saledashboardnavbar from './Components/MaincontentPages/Saledashboards/SaledashNavbar/Saledashboardnavbar'
import Saledashboard from './Components/MaincontentPages/Saledashboards/Saledashboard'
import Header from './Components/header/Header'
import Sidebar from './Components/sidebars/Mainsidebar/Mainsidebar'
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
      <Route path='/' element={<Graphdashboard/>}/>
      </Routes>
      </BrowserRouter>
     </div>
     </div>
    </>
  )
}

export default App
