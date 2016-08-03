import React from 'react';
import { IndexRoute, Route } from 'react-router';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import UserList from './components/user_list';

export default (
  <Route path="/" component={App} >
    <Route path="resources" component={requireAuth(Resources)} />
    <Route path="users" component={UserList}/>
  </Route>
)
