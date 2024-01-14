import React from "react";
import "./Graphcard.css"

const Graphcard = ({heading,faded,maincontent,lowerfade,lowerbold,children}) => {
    return <div className="flex flex-col px-9 py-7 float-start w-full text-start">
     <p className="card-heading">{heading}</p>
     <p className="faded-heading">{faded}</p>
     <p className="lower-blackhead">{maincontent}</p>
     <p className="sublowerfaded">{lowerfade} <span className="lowerbold">{lowerbold}</span></p>
     <p className="sublowerfaded">{lowerfade} <span className="lowerbold">{lowerbold}</span></p>
    <div className="pt-6 flex-grow">{children}</div>
    </div>;
}



export default Graphcard;