import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import DataDriversList from "../../components/data-tables/DataDriversList";
import Sidebar from "../../components/sidebar/SideBar";
import "./driverslist.css";
import { Button } from "primereact/button";

const NumDriver: React.FC = () => {
  const [value1, setValue1] = useState("");
  return (
    <div className="number__driver__home">
      {/* <Sidebar /> */}
      <div className="drivers__list__container">
        <div className="driver__list__details">
          <h3 className="heading__driver__list">Driver List</h3>

          <hr className="line__list1" />

          <div className="divide__driver__list">
            <div className="search__inputbox">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  className="search__list"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Search"
                />
              </span>

              <div className="button__serach">
                {" "}
                <Button className="state__list px-4">State</Button>{" "}
                <Button className="date__list px-4 ">Date</Button>
              </div>
            </div>
            <div className="create__driver__list__buttons">
              <Button className="create__new__button pl-4">
                {" "}
                Create New +
              </Button>
            </div>
          </div>
          <hr className="line__list1 mb-2" />
          <DataDriversList />
        </div>
      </div>
    </div>
  );
};
export default NumDriver;
