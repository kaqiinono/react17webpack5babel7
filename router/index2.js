import * as React from 'react';
import { BrowserRouter, Route, Redirect, HashRouter, Switch } from 'react-router-dom';
import tabbars from './constant';
import Content from '../src/component/MainLayout/Content';

const defaultPath = '/';
const defaultUrl = '/';
const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route key={defaultPath} path={`${defaultPath}`} >
                    <Content>
                        <HashRouter>
                            <Switch>
                                {
                                    tabbars.map(x => {
                                        return <Route
                                            key={`${x.path}`}
                                            path={`${x.path}`}
                                            component={x.component}
                                        />;
                                    })
                                }
                            </Switch>
                        </HashRouter>
                    </Content>
                </Route>
                <Route render={() => <Redirect to={defaultUrl} />} />
            </Switch>
        </BrowserRouter>
    );
};

export default RouterConfig;