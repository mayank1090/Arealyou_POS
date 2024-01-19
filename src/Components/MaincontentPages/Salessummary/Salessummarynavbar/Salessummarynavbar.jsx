import React, { useState } from "react";
import "./Salessummarynavbar.css";

const Salessummarynavbar = ({
  upperhead = "Daily Sales",
  belowcontent = "View, filter and export the transactions and cash movement for the day.",
  buttontext = "Export",
}) => {
  const [exportdisplay, setexportdisplay] = useState(false);
  return (
    <div className="flex justify-between flex-grow pt-14 px-10 ">
      <div className="leftsummaryupperhead pt-5">
        <p className="topsalessummaryhead">{upperhead}</p>
        <div className="belowleftsummary flex gap-12 py-2">
          <p className="leftupperblocksummary">{belowcontent}</p>
          <p className="rightknowmorelink">know more</p>
        </div>
      </div>
      <div className="rightsummaryupperhead">
        <button
          onClick={() => setexportdisplay(!exportdisplay)}
          className="exportbutn relative items-center gap-2 flex p-4"
        >
          {buttontext}
          <span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
          >
            <path
              d="M2 2L8 8L14 2"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </span>
        </button>
        
        {exportdisplay && (
          <div className="exportlist absolute">
            <ul>
              <li className="pdftype">PDF</li>
              <li className="pdftype">PDF</li>
              <li className="pdftype">PDF</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salessummarynavbar;
