// AppointmentCard.js
import React from 'react';
import './AppointmentCard.css'; // Make sure to create an AppointmentCard.css file for styles

const AppointmentCard = ({ date, time, status, services, therapist, duration }) => {
  return (
    <>
    <div className="appointment-card flex w-full justify-between pt-6 pb-6">
        <div className='leftdateprnt '>
            <p className='datenumber pt-1'>26</p>
            <p className='datemonth pt-2'> Dec</p>
        </div>
        <div className="pl-4 pr-4">
      <div className="appointment-date">
        <p>
        <span className="appointment-day">{date}</span>
        <span className="appointment-time">{time}</span>
        <span className={`appointmexznt-status pl-2 ${status.toLowerCase()}`}> {status}</span>
        </p>
      </div>
      <div className="appointment-details">
        <p className="appointment-services pt-2">{services}</p>
        <p className="appointment-therapist pt-1">{duration} with {therapist}</p>
      </div>
      </div>
      <div className='amontorfreeprnt flex items-center justify-center'>
        <p className='amountorfree'>Free</p>
      </div>
    </div>
    </>
  );
};

export default AppointmentCard;
