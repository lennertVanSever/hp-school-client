import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Overview } from './components/containers';


export default () => (
  <Switch>
    <Route path="/" component={Overview} />
  </Switch>
);
