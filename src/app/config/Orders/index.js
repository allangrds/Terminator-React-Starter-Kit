/* @flow */
import React from 'react';
import {Route} from 'react-router-dom';

const Home = () => <h1>Orders home</h1>;
const About = () => <h1>Orders 2 about</h1>;

const Orders = () => (
  <div>
    <Route exact path="/orders" component={Home} />
    <Route path="/orders2" component={About} />
  </div>
);

export default Orders;
