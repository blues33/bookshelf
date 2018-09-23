import React, { Component } from 'react';
import Add from '../components/Add'
import List from '../components/List'
import Header from '../components/Header'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        {/*<Header />*/}

        <div>
          <ul>
            <li>
              <Link to="/add">Add</Link>
              <Link to="/list">List</Link>
            </li>
          </ul>

          <hr />

          <Route path="/add" component={Add} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    )
  }
}

export default App;
