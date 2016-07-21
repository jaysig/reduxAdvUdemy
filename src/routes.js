import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';
import Resources from './components/resources';

export default (
  <Route path="/" component={App} >
    <Route path="resources" component={Resources} />
  </Route>
)
