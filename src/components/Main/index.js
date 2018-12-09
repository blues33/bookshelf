import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Add from '../Add';
import Header from '../Header';

const Main = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/list" component={ListContainer} />
      <Route path="/add" component={Add} />
    </Switch>
  </main>
);

export default Main;
