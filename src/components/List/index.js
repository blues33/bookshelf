/* eslint-disable */
import React, { Component } from 'react';
import Books from '../../components/Book'
import Book from "../Book";

export default class List extends Component {

  renderBook = book => (
    <li key={book.id}>
      <Book
        id={ book.id }
        title={ book.title }
        author={ book.author }
        description={ book.description }
        deleteBookById={ this.props.deleteBookById }
      />
    </li>
  );

  render() {
    return (
      <div>
        {this.props.state.isSuccess && (
          <ul>
            {this.props.data.map(item => this.renderBook(item))}
          </ul>
        )}
      </div>
    )
  }
}
