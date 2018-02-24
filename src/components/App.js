import React, { Component } from 'react';
import BookList from './BookList';
import books from '../books.json';

class App extends Component {

  render() {

    return (
      <div>
        <BookList books = {books} />
      </div>
    );
  }
}

export default App;
