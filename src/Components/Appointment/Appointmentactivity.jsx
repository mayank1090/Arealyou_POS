import React from 'react';
import AppointmentCard from './Appointmentcard';
import "./Appointactivity.css"

const Appointmentactivity = () => {
    return <div className='flex flex-col px-9 py-7 float-start w-full text-start'>
        <p className='appoint-head pb-6 '>Appointment Activity</p>
        <AppointmentCard
  date="Tue, 26 Dec 2023 "
  time="8:45pm"
  status="BOOKED"
  services="Hair + Beard + Wash & Cut + Trim + De Tan Facial + Hair SPA + [Free Beard + Facial SPA: Deep Hair & Beard Nourishment (Serum or Oil)]"
  therapist="Arafat Hussain K. R."
  duration="20min"
/>
<hr/>
        <AppointmentCard
  date="Tue, 26 Dec 2023 "
  time="8:45pm"
  status="BOOKED"
  services="Hair + Beard + Wash & Cut + Trim + De Tan Facial + Hair SPA + [Free Beard + Facial SPA: Deep Hair & Beard Nourishment (Serum or Oil)]"
  therapist="Arafat Hussain K. R."
  duration="20min"
/>
<hr/>

        <AppointmentCard
  date="Tue, 26 Dec 2023 "
  time="8:45pm"
  status="BOOKED"
  services="Hair + Beard + Wash & Cut + Trim + De Tan Facial + Hair SPA + [Free Beard + Facial SPA: Deep Hair & Beard Nourishment (Serum or Oil)]"
  therapist="Arafat Hussain K. R."
  duration="20min"
/>
<hr/>
    </div>;
}

export default Appointmentactivity;