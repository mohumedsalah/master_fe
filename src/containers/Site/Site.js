/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Header from "../../components/header/Header";

import { apiToken } from "../../constant";
import { Redirect, Route, Switch } from "react-router-dom";
import { siteRoutes } from "../../routes";
import axiosBaseAuth from "../../shared/axiosBaseAuth";
import "../Dashboard/Dashboard.css";

// import { useTranslation } from "react-i18next";

const Site = (props) => {
  useEffect(() => {
    const apiToken_ = localStorage.getItem(apiToken);
    if (!apiToken_) {
      props.history.push("/login");
    }
    console.log("xxxxxxxxxxxxxxxxxx");
    axiosBaseAuth.get("/api/user/user-type").then((res) => {
      if (res.data === "admin") {
        props.history.push("/dashboard");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const { t } = useTranslation();
  return (
    <div className="wrapper">
      <Header {...props} />

      <div className="content">
        <Switch>
          {siteRoutes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </div>
  );
};

export default Site;
