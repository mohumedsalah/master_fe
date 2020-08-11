/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Authorize } from "../../routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { apiToken } from "../../constant";
import "./AuthDashboard.css";

const Dashboard = ({ changeLang, history }) => {
  const _apiToken = localStorage.getItem(apiToken);
  if (_apiToken) {
    history.push("/dashboard");
  }
  return (
    <Switch>
      {Authorize.map((route, idx) => {
        return route.component ? (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => (
              <route.component {...props} changeLang={changeLang} />
            )}
          />
        ) : null;
      })}
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

export default Dashboard;
