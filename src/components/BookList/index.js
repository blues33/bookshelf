import React, {Component} from 'react';
import Book from '../Book'
import Sorting from '../Sorting'
import './style.css';

class BookList extends Component {

  render() {
    return (
      <div class="books-container">
        <Sorting />

        <div className="booklist">
          <Book book = {this.props.books.books[0]}/>
          <Book book = {this.props.books.books[1]}/>
          <Book book = {this.props.books.books[2]}/>
        </div>
      </div>


    )
  }
}



export default BookList;
