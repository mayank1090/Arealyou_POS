import React from "react";
import "./Services.css"

const Services = () => {
  const productsList = [
    {
      name: "Hair wash + Cut / Trim",
      time:"3 Services, 30min",
      image: "./Assets/Images/serviceimg.svg",
      category: "Male Hair + Face",
      Price: "468",
    },
    {
        name: "Hair wash + Cut / Trim",
        time:"3 Services, 30min",
        image: "./Assets/Images/serviceimg.svg",
        category: "Male Hair + Face",
        Price: "468",
      },
      {
        name: "Hair wash + Cut / Trim",
        time:"3 Services, 30min",
        image: "./Assets/Images/serviceimg.svg",
        category: "Male Hair + Face",
        Price: "468",
      },
      {
        name: "Hair wash + Cut / Trim",
        time:"3 Services, 30min",
        image: "./Assets/Images/serviceimg.svg",
        category: "Male Hair + Face",
        Price: "468",
      },
      {
        name: "Hair wash + Cut / Trim",
        time:"3 Services, 30min",
        image: "./Assets/Images/serviceimg.svg",
        category: "Male Hair + Face",
        Price: "468",
      },
      {
        name: "Hair wash + Cut / Trim",
        time:"3 Services, 30min",
        image: "./Assets/Images/serviceimg.svg",
        category: "Male Hair + Face",
        Price: "468",
      },
  ];
  return (
    <div>
      <div className="blueservicehead mt-9 flex px-6 py-8 justify-between">
        <div className="prouctheadprnt basis-2/4">
          <p className="serviceshead">Product name</p>
        </div>
        <div className="prouctheadprnt basis-1/4  text-center">
          <p className="serviceshead ">Category</p>
        </div>
        <div className="prouctheadprnt basis-1/4 text-end">
          <p className="serviceshead">Price</p>
        </div>
      </div>

      {productsList.map((product) => {
        return <div className="servicesrow flex p-6 justify-between items-center">
            <div className="prouctheadprnt basis-2/4 flex gap-5 items-center">
              <img
                src={product.image}
                className=" w-4 h-5"
                alt="productimage"
              />
              <div className="servicesname">
              <p className="serviceshead">{product.name}</p>
              <p className="numberofservicewithtime">{product.time}</p>
              </div>
            </div>

            <div className="prouctheadprnt basis-1/4 text-center">
              <p className="serviceshead ">{product.category}</p>
            </div>
            <div className="prouctheadprnt basis-1/4 text-end">
              <p className="serviceshead">₹{product.Price}</p>
            </div>
          </div>
        ;
      })}
    </div>
  );
};

export default Services;
