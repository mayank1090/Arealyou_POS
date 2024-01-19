import React from 'react'
import Salessummarynavbar from '../../Salessummary/Salessummarynavbar/Salessummarynavbar'
import searchicon from "/Assets/Images/search.svg"
import filtericon from"/Assets/Images/filter.svg"
import datefiltericon from"/Assets/Images/date.svg"
import "./Appointmentnavbar.css"

export default function Appointmentnavbar() {
  return (
    <div>
      <Salessummarynavbar/>
      <div className=' pl-10 pr-6 py-7'>
      <div className="Appointmentsearchbarprnt flex justify-between py-5 px-4">
        <div className='searchbarprntforappointment flex lg:basis-1/3 gap-3'>
          <img src={searchicon} alt='saerchicon'/>
          <input className=' flex-grow outline-none' placeholder='Search by reference or clint' type='text'/>
        </div>

        <div className="monthtodateappointment">
          <p className='monthtodateaapoinmenttext'>Month to Date</p>
        </div>

        <div className="filterbuttnappointmentprnt flex justify-between gap-3">
          <p className='filterfrappoinment'>Filter</p>
          <img src={filtericon} alt='siltericon'/>
        </div>

        <div className="newestfiltersec flex gap-3 lg:basis-1/3 ">
         <p className="newestfiltertext">Scheduled date (Newest first)</p>
         <img src={datefiltericon} alt='filternewest'/>
        </div>
      </div>
      </div>
    </div>
  )
}
