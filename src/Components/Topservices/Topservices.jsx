import React from 'react';
import './Topservices.css'; // Import the CSS for styling

const TopServicesCard = ({ services,heading, mainfield }) => {
  return (
    <div className="top-services-card flex flex-col px-9 py-7 float-start w-full text-start">
      <div className="card-header">
        <h2 className='servicehaed pb-12'>{heading}</h2>
      </div>
      <div className="card-content">
        <div className="card-row header">
          <div className="service-title servicebelowhaed">{mainfield}</div>
          <div className="service-count servicebelowhaed ">This month</div>
          <div className="service-count servicebelowhaed">Last month</div>
        </div>
        {services.map((service, index) => (
            <>
          <div className="card-row pt-6 pb-6" key={index}>
            <div className="service-title servicebelowli" key={service.name}>{service.name}</div>
            <div className="service-count servicebelowhaed" key={service.thisMonth}>{service.thisMonth}</div>
            <div className="service-count servicebelowhaed" key={service.lastMonth}>{service.lastMonth}</div>
          </div>
          <hr/>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopServicesCard;
