import React from 'react';
import './Calendercard.css'; // Import the CSS for styling

const Calendercard = () => {
  return (
    <div className="no-appointments-card">
        <p className='appoint-head pb-6 w-full '>Today’s next Appointment</p>
        <div className='prntpfnocalender flex-1 justify-center items-center flex flex-col'>
      <div className="icon-container">
        {/* Replace with actual icon */}
        <img src='./Assets/Images/nocalender.png' alt='calendericon'/>
      </div>
      <h2 className='noh2 pt-9 '>No Appointments Today</h2>
      <p className=' pt-9 '>
        Visit the <a href="/calendar">Calendar</a> section to add some appointments
      </p>
      </div>
    </div>
  );
};

export default Calendercard;
