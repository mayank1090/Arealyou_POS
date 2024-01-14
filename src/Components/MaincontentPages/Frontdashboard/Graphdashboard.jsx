import React from 'react';
import Mainrowcard from '../../Mainpagecards/Mainpaferowcard/Mainrowcard';
import Subcolumncardofrow from '../../Mainpagecards/Mainpaferowcard/Subcolumncardofrow';
import Graphcard from '../../Graphcard/Graphcard';
import Salegraph from '../../Graphs/Salegraph';
import Appointmentactivity from '../../Appointment/Appointmentactivity';
import Calendercard from '../../Appointment/AppointmentCalender/Calendercard';
import TopServicesCard from '../../Topservices/Topservices';
import Bookinggraph from '../../Graphs/Bookinggraph';

const Graphdashboard = () => {

    const servicesData = [
        { name: 'Skin Health Nourishment(Moiat or Serum)', thisMonth: 68, lastMonth: 60 },
        { name: 'Beard Wash + Trimming', thisMonth: 67, lastMonth: 62 },
        { name: 'Skin Health Nourishment(Moiat or Serum)', thisMonth: 45, lastMonth: 62 },
        { name: 'Full Face SPA + De Tan / Facial', thisMonth: 14, lastMonth: 62 },
        // ... other services
      ];
    
      const teamData = [
        { name: 'Ravi Sen', thisMonth: "₹28134.81", lastMonth: "₹6346" },
        { name: 'Ravi Sen', thisMonth: "₹28134.81", lastMonth: "₹6346" },
        { name: 'Ravi Sen', thisMonth: "₹28134.81", lastMonth: "₹6346" },
        { name: 'Ravi Sen', thisMonth: "₹28134.81", lastMonth: "₹6346" },
        // ... other services
      ];
    
    return (
        <>
         <div className='parentbelow w-full flex flex-col overflow-y-auto pt-8'>
        <Mainrowcard>
        <Subcolumncardofrow>
        <Graphcard heading={"Recent Sales"} faded ={"Last 7 days"}maincontent={"₹54533.61"} lowerfade={"Appointments"} lowerbold={378}>
          <Salegraph/>
          </Graphcard>
          </Subcolumncardofrow>

         <Subcolumncardofrow>
        <Graphcard heading={"Upcoming appointments"} faded ={"Next 7 days"}maincontent={"116 booked"} lowerfade={"Confermed Appointments"} lowerbold={378}>
        <Bookinggraph/>
          </Graphcard>
          </Subcolumncardofrow>
          </Mainrowcard>

          <Mainrowcard>
        <Subcolumncardofrow>
        <Appointmentactivity/>
          </Subcolumncardofrow>

          <Subcolumncardofrow>
        <Calendercard/>
          </Subcolumncardofrow>
          </Mainrowcard>

          <Mainrowcard>
        <Subcolumncardofrow>
        <TopServicesCard services={servicesData} heading={"Top Services"} mainfield={"Service"}/>
          </Subcolumncardofrow>

          <Subcolumncardofrow>
        <TopServicesCard services={teamData} heading={"Top team members"} mainfield={"Team member"}/>
          </Subcolumncardofrow>
          </Mainrowcard>
      </div>
        </>
    )
    ;
}

export default Graphdashboard;