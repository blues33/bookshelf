import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Header from '../Header';
import AddContainer from '../../containers/AddContainer';

const Main = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/list" component={ListContainer} />
      <Route path="/add" component={AddContainer} />
    </Switch>
  </main>
);

export default Main;
