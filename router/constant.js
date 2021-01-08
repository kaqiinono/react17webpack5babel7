import App from "../src/component/App";
import Child1 from "../src/component/App/Test/Child1";
import Child2 from "../src/component/App/Test/Child2";
import Parent from "../src/component/App/Test/Parent";

export const routes = [
    {
        path: "/",
        component: App,
        exact: true
    },
    {
        path: "/p",
        component: Parent,
        // exact: true,
        routes: [
            {
                path: "/p/c1",
                component: Child1,
                routes:[{
                    path: "/p/c1/:id",
                    component: Child1,
                    routes:[{
                        path: "/p/c1/c1/:id",
                        component: Child1,
                    }]
                }]
            },
            {
                path: "/p/c2",
                component: Child2
            }
        ]
    },
];
