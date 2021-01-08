import ReactDOM from 'react-dom';
import './index.scss';
import Routes from '../router';
// import Parent from '../src/component/App/Test/Parent';
// import Child1 from '../src/component/App/Test/Child1';
// import Child2 from '../src/component/App/Test/Child2';

// const App = () => {
//     return <Router>
//         <Switch>
//             <Route path="/" exact component={Parent} />
//             <Route exact path="/p" />
//             <Route exact path="/p/c1" component={Child1} />
//             <Route path="/p/c2" component={Child2} />
//         </Switch>
//     </Router>
// }
const route = Routes();

ReactDOM.render(route, document.getElementById('root'));