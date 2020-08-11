import React, { useState, useEffect } from "react";
import "./header.css";

import { apiToken } from "../../constant";
const Header = (props) => {
  const [selectedRoute, setSelectedRoute] = useState(-1);

  const routes = [
    "/dashboard",
    "/dashboard/home",
    "/dashboard/configure",
    "/dashboard/machine",
    "/dashboard/customer",
  ];
  useEffect(() => {
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route === props.location.pathname) {
        setSelectedRoute(i);

        return;
      }
    }
    setSelectedRoute(-1);
  }, [props.location.pathname, routes]);
  return (
    <>
      <input type="checkbox" id="check" />

      <header className="header-container">
        <div className="header-log">
          <img
            src="/assets/img/logo2@2x.png"
            className="profile_image"
            alt=""
          />
          <label>Master Task</label>
        </div>

        <div className="lang-nav">
          <div
            onClick={() => {
              localStorage.removeItem(apiToken);
              props.history.push("/login");
            }}
          >
            <label>Log out</label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
