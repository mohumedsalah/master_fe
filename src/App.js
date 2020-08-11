import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLoader from "./components/PageLoader/PageLoader";
import i18N from "./localization/i18n";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// import { renderRoutes } from 'react-router-config';
import "./custom.scss";


const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <PageLoader loading={true} />
  </div>
);

// Containers
const Dashboard = React.lazy(() => import("./containers/Dashboard/Dashboard"));
const AuthDashboard = React.lazy(() =>
  import("./containers/AuthDashboard/AuthDashboard")
);

const Site = React.lazy(() =>
  import("./containers/Site/Site")
);

// Pages
// const Login = React.lazy(() => import("./views/Pages/Login"));
// const Register = React.lazy(() => import("./views/Pages/Register"));
//const Page404 = React.lazy(() => import("./views/Pages/Page404"));
// const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  componentDidMount() {
    const lang = localStorage.getItem("lang") || "en";
    if (lang === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      i18N.changeLanguage("ar");
    } else {
      i18N.changeLanguage(lang);
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
  }

  render() {
    const changeLang = (lang) => {
      localStorage.setItem("lang", lang);
      if (lang === "Ar") {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        i18N.changeLanguage("ar");
      } else {
        i18N.changeLanguage(lang);
        document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      }
    };
    return (
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/dashboard"
              name="dashboard"
              render={(props) => (
                <Dashboard changeLang={changeLang} {...props} />
              )}
            />
            <Route
              path="/site"
              name="site"
              render={(props) => <Site changeLang={changeLang} {...props} />}
            />
            <Route
              path="/"
              name="getting start"
              render={(props) => (
                <AuthDashboard changeLang={changeLang} {...props} />
              )}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
