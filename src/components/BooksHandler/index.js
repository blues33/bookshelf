import React, {Component} from 'react';
import Sorting from '../Sorting'
import BookList from '../BookList'
import books from '../../api/books.json';

import './style.css';

class BooksHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {sorting: 'title'};

    this.handleSorting = this.handleSorting.bind(this);
    this.sortingBooks = this.sortingBooks.bind(this);
  }

  handleSorting(value) {
    this.setState({sorting: value});
    console.log(value);
  }

  sortingBooks(arrayBooks, sortingFlag) {
    switch(sortingFlag) {
      case 'date': return arrayBooks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      case 'author': return arrayBooks.sort((a, b) => a.author.localeCompare(b.author));
      case 'title': return arrayBooks.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  render() {
    let filteredBooks = this.sortingBooks(books.books.slice(), this.state.sorting);

    return (
      <div className="books-container">
        <Sorting onSortingChange={this.handleSorting}/>
        <BookList books={filteredBooks} />
      </div>
    )
  }
}

export default BooksHandler;
