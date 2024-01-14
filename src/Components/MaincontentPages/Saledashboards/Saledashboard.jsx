import React, { useState } from "react";
import Saledashboardnavbar from "./SaledashNavbar/Saledashboardnavbar";
import Addclientcard from "../../Addclient/Addclientcard";
import Cheakoutsale from "./Tocheckout/Checkoutsale";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Nocontent from "./Nocontent/Nocontent";
import { Route, Routes } from "react-router-dom";

const Saledashboard = () => {
  const [currentsalenavbar, setcurrentsalenavbar] = useState("");

  const membershipicon = "/Assets/Images/membership.svg";

  return (
    <div className="flex w-full">
      <div className="w-full p-12 flex flex-col overflow-auto">
          <Saledashboardnavbar setcurrentsalenavbar={setcurrentsalenavbar} />
          <Routes>
            <Route
              path="/"
              element={
                <Nocontent
                  imgpath={membershipicon}
                  uppertext={"No membership added yet"}
                  lowertext={"Click here to add and manage your membership"}
                />
              }
            />
            <Route path="/checkoutsale" element={<Cheakoutsale />} />
            <Route path="/products" element={<Products />} />
            <Route path="/service" element={<Services />} />
            <Route
              path="/menbership"
              element={
                <Nocontent
                  imgpath={membershipicon}
                  uppertext={"No membership added yet"}
                  lowertext={"Click here to add and manage your membership"}
                />
              }
            />
            <Route
              path="/giftcard"
              element={
                <Nocontent
                  imgpath={membershipicon}
                  uppertext={"Gift cards not set up"}
                  lowertext={"Set up Gift Cards."}
                />
              }
            />
          </Routes>
      </div>
      <Addclientcard />
    </div>
  );
};

export default Saledashboard;
