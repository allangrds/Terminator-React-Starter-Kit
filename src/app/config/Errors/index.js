import React from 'react';
import {Route} from 'react-router-dom';


const NoMatch = () => <h1>404</h1>;

const Errors = () => (
  <div>
    <Route component={NoMatch}/>
  </div>
);

export default Errors;
