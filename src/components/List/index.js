/* eslint-disable */
import React, { Component } from 'react';

export default class List extends Component {

  renderBook = book => (
    <li key={book.id}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.description}</div>
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
