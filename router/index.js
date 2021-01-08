import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from "../src/component/MainLayout/Header";

import { routes } from './constant';
const defaultUrl = '/';
export default function RouteConfig() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    {getRoutes(routes)}
                    <Route render={() => <Redirect to={defaultUrl} />} />
                </Switch>
            </div>
        </Router>
    );
}

function RouteWithSubRoutes(route) {
    const parent = <Route
        key={route.path}
        path={route.path}
        component={route.component}
    />;
    if (route.routes && route.routes.length > 0) {
        const child = getRoutes(route.routes);
        child.push(parent)
        return <Switch key={route.path}>
            {child}
        </Switch>
    }
    return parent;
}

function getRoutes(rs) {
    return rs.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />
    });
}
