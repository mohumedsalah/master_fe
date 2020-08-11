import React from "react";
import { Route, Switch } from "react-router-dom";
import Resin from "./main/tableScrore";
import Setting from "./Setting";

const SettingRoutes = () => {
  return (
    <div>
      <Switch>
        <Route
          path={"/dashboard/setting/resin"}
          exact={false}
          name={"resin"}
          render={(props) => <Resin {...props} />}
        />
        <Route
          path={"/dashboard/setting"}
          exact={false}
          name={"setting"}
          render={(props) => <Setting {...props} />}
        />
      </Switch>
    </div>
  );
};

export default SettingRoutes;
