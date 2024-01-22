import React from 'react'
import Salessummarynavbar from '../../Salessummary/Salessummarynavbar/Salessummarynavbar'
import searchicon from "/Assets/Images/search.svg"
import filtericon from"/Assets/Images/filter.svg"
import datefiltericon from"/Assets/Images/date.svg"
import "./Appointmentnavbar.css"

export default function Appointmentnavbar() {

  const demodata=[
    {
      ref: "#C89E43",
      client: "Mansi Paliwal",
      service: "Hair Health SPA Nourishment Fee",
      createdBy: "Online",
      createdDate: "22 Dec 2023, 7:53pm",
      scheduledDate: "29 Dec 2023, 3:30pm",
      duration: "30min",
      teamMember: "Dimple",
      price: "₹0.0",
      status: "Booked"
    },
    {
      ref: "#B1E1OF",
      client: "Nitesh Rav",
      service: "Deep Hair And Beard-Nourishment Serum or Oil Free",
      createdBy: "Seema",
      createdDate: "28 Dec 2023, 7:53pm",
      scheduledDate: "29 Dec 2023, 3:30pm",
      duration: "5min",
      teamMember: "Ravi Sen",
      price: "₹0.0",
      status: "Booked"
    },
  ];
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

      <div className='upperappointmentdisplaybar py-3'>
        <ul className='upperulprntforappointment px-5 py-6 flex justify-between'>
          <li className="Refli">Ref#</li>
          <li className="Clientappoinement">Client</li>
          <li className="Serviceappointment">Service</li>
          <li className="Createsbyappoinement">Creates By</li>
          <li className="Createddateappoinemment">Created Date</li>
          <li className="Scheduleddatedateaapoientment"> Scheduled Date</li>
          <li className="Durationappointment">Duration</li>
          <li className="Teammemberappointment">Team Member</li>
          <li className="Priceappointment">Price</li>
          <li className="Statusappoinemnet">Status</li>
        </ul>
        <hr/>
        {demodata.map((appointment)=>{
         return (
          <ul className='appoinelistprntul px-5 py-6 flex justify-between'>
          <li className="Refli">{appointment.ref}</li>
          <li className="Clientappoinement">{appointment.client}</li>
          <li className="Serviceappointment"><p>{appointment.service}</p></li>
          <li className="Createsbyappoinement">{appointment.createdBy}</li>
          <li className="Createddateappoinemment">{appointment.createdDate}</li>
          <li className="Scheduleddatedateaapoientment">{appointment.scheduledDate}</li>
          <li className="Durationappointment">{appointment.duration}</li>
          <li className="Teammemberappointment">{appointment.teamMember}</li>
          <li className="Priceappointment">{appointment.price}</li>
          <li className="Statusappoinemnet">{appointment.status}</li>
          </ul>
         )
        })}
      </div>
      </div>
    </div>
  )
}
