
import React, {Component} from 'react';
import Book from '../Book'
import './style.css';

class BookList extends Component {
  render() {
    const {books} = this.props;
    const bookList = books.map((book) => <li key={book.id.toString()}><Book book={book}/></li>);
    return (
      <ul className="booklist">
        {bookList}
      </ul>
    )
  }
}



export default BookList;
