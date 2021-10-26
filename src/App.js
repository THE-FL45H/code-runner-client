import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import logout from "./requests/logout";
import { HOME_ROUTE, LOGOUT_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from "./routes";

const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path={SIGNIN_ROUTE} component={SignIn}/>
          <Route path={SIGNUP_ROUTE} component={SignUp}/>
          <Route path={LOGOUT_ROUTE} render={() => {
            logout();
            return <Redirect to={SIGNIN_ROUTE}/>
          }}/>
          <Route path={HOME_ROUTE} exact render={(props) => {
            const access_token = localStorage.getItem("access_token");
            if(!access_token) {
              return <Redirect to={SIGNIN_ROUTE}/>
            }
            return <Home {...props}/>
          }}/>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
