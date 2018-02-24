import React, {Component} from 'react';
import Book from '../Book'
import './style.css';

class BookList extends Component {

  render() {
    return (
      <div className="booklist">
        <Book book = {this.props.books.books[0]}/>
      </div>
    )
  }
}



export default BookList;
