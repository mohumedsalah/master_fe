import Login from "./containers/AuthDashboard/login/login";

import Home from "./containers/Dashboard/views/setting/main/tableScrore";
import SiteHome from "./containers/Site/Home/Home";
import TakeQuiz from "./containers/Site/takeQuiz/TakeQuiz";

// const Specialist = React.lazy(() => import("./views/Setup/Specialist/specialist"));
// const Modals = React.lazy(() => import("./views/Setup/Specialist/specialist"));
// const Modals = React.lazy(() => import("./views/Setup/Specialist/specialist"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routes = [
  { path: "/dashboard", name: "Dashboard", component: Home },
];

export const siteRoutes = [
  {
    path: "/site/take-quiz",
    name: "take-quiz",
    component: TakeQuiz,
  },
  { path: "/site", name: "Home", component: SiteHome },
 
];

export const Authorize = [
  { path: "/login", name: "Login", component: Login },

  // { path: "/forget-password", name: "forget-password", component: schedule },

  // {
  //   path: "/certificate-image",
  //   name: "Certificate Image",
  //   component: bookRequest
  // },
  // { path: "/welcome-page", name: "welcome", component: patient }
];
