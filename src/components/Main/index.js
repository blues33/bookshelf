import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../List';
import Add from '../Add';
import Header from '../Header';

const Main = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/list" component={List} />
      <Route path="/add" component={Add} />
    </Switch>
  </main>
)

export default Main;
