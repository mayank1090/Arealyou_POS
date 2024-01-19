import React, { useState } from "react";
import "./Checkoutsale.css";
import Salesearchbar from "../Salesearchbar/Salesearchbar";

// Mock data for appointments
const mockAppointments = {
  current: [
    {
      time: "11:15am - 12:20pm",
      day: "Friday",
      client: "Krishna Gupta",
      services: ["Full leg and hand wax", "Underarms", "..."],
    },
    // ... more appointments
  ],
  earlier: [
    {
      time: "11:15am - 2:20pm",
      day: "Friday",
      client: "Rajat Srivastava",
      services: ["Hair cut", "Wash & Blow dry", "..."],
    },
    // ... more appointments
  ],
  upcoming: [
    {
      time: "11:15am - 2:20pm",
      day: "Friday",
      client: "Rajat Srivastava",
      services: ["Hair cut", "Wash & Blow dry", "..."],
    },
  ],
};

const Cheakoutsale = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterAppointments = (appointments, searchTerm) => {
    const filtered = {};
    Object.keys(appointments).forEach((key) => {
      filtered[key] = appointments[key].filter((appointment) => {
        return (
          appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          appointment.services.some(service => 
            service.toLowerCase().includes(searchTerm.toLowerCase())
          )
          // Add additional conditions here if you have other fields to search by
        );
      });
    });
    return filtered;
  };

  const filteredAppointments = filterAppointments(appointments, searchTerm);

  const renderAppointmentItems = (appointmentsList) => {
    return appointmentsList.map((appointment, index) => (
      <div key={index} className="appointment-item pt-7 pb-7 flex">
        <div className="daytimeprnt w-1/4">
          <div className="appointment-time pt-1">{appointment.time}</div>
          <div className="appointment-day pt-1">{appointment.day}</div>
        </div>
        <div className="clientimfoprnt w-3/4 pl-6">
          <div className="appointment-client">{appointment.client}</div>
          <ul className="services-list">
            {appointment.services.map((service, serviceIndex) => (
              <li className="servicescheckoutli" key={serviceIndex}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="appointments-card flex-grow">
      <Salesearchbar handleSearch={handleSearch} />
      <div className="appointments-section current">
        <h2 className="checkouttimeheading">CURRENT</h2>
        {renderAppointmentItems(filteredAppointments.current)}
      </div>
      <div className="appointments-section earlier">
        <h2 className="checkouttimeheading">EARLIER TODAY</h2>
        {renderAppointmentItems(filteredAppointments.earlier)}
      </div>
      <div className="appointments-section upcoming">
        <h2 className="checkouttimeheading">UPCOMING TODAY</h2>
        {renderAppointmentItems(filteredAppointments.upcoming)}
      </div>
    </div>
  );
};

export default Cheakoutsale;
