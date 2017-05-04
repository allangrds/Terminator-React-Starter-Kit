import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  browserHistory,
  NavLink
} from 'react-router-dom';

/**/
import Orders from './Orders';
import Errors from './Errors';

import Home from '../components/Home';

const About = () => <h1>About</h1>;
const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home  </NavLink>
    <NavLink activeClassName="active" to="/about">Sobre</NavLink>
    <NavLink activeClassName="active" to="/orders">Pedidos</NavLink>
  </nav>
);

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Orders />
        <Errors />
      </Switch>
    </div>
  </Router>
);

export default Routes;
