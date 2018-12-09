import React, { Component } from 'react';

export default class List extends Component {

  state = {
    books: []
  }

  renderBook = (book) => (
    <li key={book._id}>
      <div>{ book.title }</div>
      <div>{ book.body }</div>
      <div>{ book.author }</div>
    </li>
  )

  render() {

    return (
      <div>
        {this.state.books && (
          <ul>
            {this.state.books.map(item => this.renderBook(item))}
          </ul>
        )}
      </div>
    )
  }
}
