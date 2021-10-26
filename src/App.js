import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "./routes";

const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path={SIGNIN_ROUTE} component={SignIn}/>
          <Route path={SIGNUP_ROUTE} component={SignUp}/>
          <Route path="" render={() => <Redirect to={SIGNIN_ROUTE}/>}/>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
