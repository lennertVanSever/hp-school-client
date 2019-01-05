import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Overview, School } from './components/containers';


export default () => (
  <Switch>
    <Route path="/overview" component={Overview} />
    <Route path="/School" component={School} />
  </Switch>
);
