import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Overview, Entity } from './components/containers';


export default () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/overview/text" />} />
    <Route path="/overview" component={Overview} />
    <Route path="/:entity/:id" component={Entity} />
  </Switch>
);
