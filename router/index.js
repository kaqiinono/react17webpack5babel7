import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from '../src/component/MainLayout';
import routes from './constant';

const defaultUrl = '/';

function getRoutes(rs) {
  return rs.map((route, i) => {
    return <RouteWithSubRoutes key={i} {...route} />;
  });
}

function RouteWithSubRoutes(route) {
  const parent = (
    <Route key={route.path} path={route.path} component={route.component} />
  );
  if (route.routes && route.routes.length > 0) {
    const child = getRoutes(route.routes);
    child.push(parent);
    return <Switch key={route.path}>{child}</Switch>;
  }
  return parent;
}
export default function RouteConfig() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          {getRoutes(routes)}
          <Route render={() => <Redirect to={defaultUrl} />} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
