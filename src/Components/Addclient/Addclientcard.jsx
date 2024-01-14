import React from "react";
import "./Addclientcard.css";

const Addclientcard = () => {
  const btnicon = "./Assets/Images/addbtn.svg";
  const emptycartimg="./Assets/Images/nocart.svg";
  return (
    <div className="cardclientprnt flex flex-col">
      <div className="addclientsec flex justify-center items-center ">
        <div className="addbutnprnt flex gap-2 pt-6 pb-6">
          <button className="addsymbol">
            <img src={btnicon} alt="addicon" className="btniconsvg" />
          </button>
          <p className="Addclienttext ">Add Client</p>
        </div>
      </div>
      <div className="quicksaleprnt pr-6 pl-6 border-t-0 pb-8 flex-grow w-full justify-center flex items-center">
        <div className="whennoquicksaledata flex items-center flex-col text-center">
          <img src={emptycartimg} alt="noclient" className="nosaleimge w-9  " />
          <p className="belownosale">Your cart is empty</p>
          <p className="lastnosale">Select an appointment, service or item to check out</p>
        </div>
      </div>
    </div>
  );
};

export default Addclientcard;
