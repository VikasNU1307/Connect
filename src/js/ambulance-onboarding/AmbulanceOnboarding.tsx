import React from "react";
import DataDriversOnboarding from "../../components/data-tables/DataDriversOnboarding";
import Sidebar from "../../components/sidebar/SideBar";
import "./ambulanceonboarding.css";

const AmbulanceOnboarding: React.FC = () => {
  return (
    <div className="homecontainer__ambulance__list">
      {/* <Sidebar /> */}

      <div className="ambulance__list__home__container">
        <div className="ambulance__details">
          <div className="ambulance__onboarding__details">
            <h3 className="heading__ambulance__onboarding">
              {" "}
              Ambulance Onboarding
            </h3>
            <hr className="line__ambulance__onboarding" />
            <DataDriversOnboarding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceOnboarding;
