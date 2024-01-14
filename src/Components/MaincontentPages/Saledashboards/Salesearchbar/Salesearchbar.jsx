import React from "react";
import "./Salesearchbar.css"
import { useState } from "react";

const DropdownMenu = ({ isOpen, title, options }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      <ul>
        {options.map((option, index) => (
          <li key={index} className="dropdown-item">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Salesearchbar = ({filterrequired=true , datefilterrequired=true}) => {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isTodayMenuOpen, setTodayMenuOpen] = useState(false);

  const filtericon = "/Assets/Images/filter.svg";
  const dateicon = "/Assets/Images/date.svg";
  const searchicon = "/Assets/Images/search.svg";

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
    setTodayMenuOpen(false); // Close the other menu if it's open
  };

  const toggleTodayMenu = () => {
    setTodayMenuOpen(!isTodayMenuOpen);
    setFilterMenuOpen(false); // Close the other menu if it's open
  };
  return (
    <div>
      <div className="search-filter-section mt-9">
        <div className="inputprntofcheck flex gap-2 items-center mt-1 mb-1">
          <span className="searchiconprnt">
            <img src={searchicon} alt="searchicon" />
          </span>
          <input
            type="text"
            placeholder="Search by client, team member or service name..."
            className="searchboxforcheckout w-full outline-none flex-grow"
          />
        </div>
       {filterrequired && <div className="dropprnt relative mt-1 mb-1">
          <button
            className="filter-button flex gap-2 items-center"
            onClick={toggleFilterMenu}
          >
            Filter
            <span className="buttniconfil">
              <img src={filtericon} alt="filtericon" />
            </span>
          </button>
          {isFilterMenuOpen && (
            <DropdownMenu
              isOpen={isFilterMenuOpen}
              title="Filter"
              options={["Option 1", "Option 2", "Option 3"]}
            />
          )}
        </div>}

        {datefilterrequired &&<div className="dropprnt relative mt-1 mb-1">
          <button
            className="today-button flex gap-2 items-center"
            onClick={toggleTodayMenu}
          >
            Today{" "}
            <span className="buttniconfil">
              <img src={dateicon} alt="filtericon" />
            </span>
          </button>
          {isTodayMenuOpen && (
            <DropdownMenu
              isOpen={isTodayMenuOpen}
              title="Today"
              options={["Today", "Tomorrow", "This Week"]}
            />
          )}
        </div>}
      </div>
    </div>
  );
};

export default Salesearchbar;
