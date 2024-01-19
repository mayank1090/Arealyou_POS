import React from "react";
import Salessummarynavbar from "../Salessummarynavbar/Salessummarynavbar";
import { useState } from "react";
import"./Salessummary.css"

const Salessummary = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Formatting the date and day
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className=" flex-grow overflow-y-auto">
      <Salessummarynavbar />
      <div className="datenavigationprnt mt-8 w-2/5 justify-between  ml-14 flex border items-center">
        <div className="leftarrow pl-3 py-2" onClick={handlePreviousDay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
          >
            <path
              d="M16 28L3 15L16 2"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="todayday"><p className="todaydayp py-3 px-2">Today</p></div>
        <div className="todaydate"><p className="todaydatep py-3 px-2">{currentDate.toDateString()}</p></div>
        <div className="rightarrowone pr-3 py-2"  onClick={handleNextDay}>
          <svg className=" w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
          >
            <path className="w-full"
              d="M2 2L15 15L2 28"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="belowtwoblockprnt py-12 md:flex-row flex-col md  flex px-10 gap-9 justify-between">
        <div className="lefttransactionsummarypnt basis-2/5 flex-grow">
          <div className="upperheadoflefttransec py-7 px-6">
            <p className="transactionsummaryheading">Transaction Summary</p>
            <ul className="transctionultypesummary flex justify-between pt-5">
                <li className="itemtransactionsummary">item type</li>
                <li className="itemtransactionsummary">Sales Qty</li>
                <li className="itemtransactionsummary">Refund Qty</li>
                <li className="itemtransactionsummary">Gross Total</li>
            </ul>
          </div>
          <hr/>
          <div className="belowtrasactionprnt px-6 pb-4">
            <ul className="transactionsummaryamtprnt py-4 justify-between flex">
                <li className="transactionservicecategory thesameforevrylibold">Services</li>
                <li className="thesameforevryli saletrasnactioqunty">0</li>
                <li className="thesameforevryli refundrasnactioqunty">0</li>
                <li className="thesameforevryli grosstotaltrasnactioqunty">0</li>
            </ul>
            <ul className="transactionsummaryamtprnt py-4 justify-between flex">
                <li className="transactionservicecategory thesameforevrylibold">Services</li>
                <li className="thesameforevryli saletrasnactioqunty">0</li>
                <li className="thesameforevryli refundrasnactioqunty">0</li>
                <li className="thesameforevryli grosstotaltrasnactioqunty">0</li>
            </ul>
            <p className="totalssaestransaction pt-3">Total Sales</p>
          </div>
        </div>
        <div className="rightcashtransactionsummarypnt basis-2/5 flex-grow">
        <div className="upperheadoflefttransec py-7 px-6">
            <p className="transactionsummaryheading">Cash Movement Summary</p>
            <ul className="transctionultypesummary flex justify-between pt-5">
                <li className="itemtransactionsummary">Payment Type</li>
                <li className="itemtransactionsummary">Payment Collection</li>
                <li className="itemtransactionsummary">Refunds Paid</li>
            </ul>
          </div>
          <hr/>
          <div className="belowtrasactionprnt px-6 pb-4">
            <ul className="transactionsummaryamtprnt py-4 justify-between flex">
                <li className="transactionservicecategory thesameforevryliboldofightsec">UPI</li>
                <li className="thesameforevryli refundrasnactioqunty">0</li>
                <li className="thesameforevryli grosstotaltrasnactioqunty">0</li>
            </ul>
            <ul className="transactionsummaryamtprnt py-4 justify-between flex">
                <li className="transactionservicecategory thesameforevryliboldofightsec">UPI</li>
                <li className="thesameforevryli refundrasnactioqunty">0</li>
                <li className="thesameforevryli grosstotaltrasnactioqunty">0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salessummary;
