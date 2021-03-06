import React from "react";
import Dashboard from "../screens/dashboard";
import { Switch, Route } from "react-router-dom";
import Login from "../screens/authentications/login";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const Navigation = (props) => {
  let routes = [
    {
      path: "/dashboard",
      component: Dashboard
    }
  ];
  const allOtherRoutes = routes.map((route, index) => {
    return <PrivateRoute key={index} path={route.path} exact={true} component={route.component} />;
  });
  return (
    <Switch>
      <Route path="/login" component={Login} />
      {allOtherRoutes}
    </Switch>
  );
};

export default Navigation;
