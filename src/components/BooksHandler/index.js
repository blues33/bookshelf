import React, {Component} from 'react';
import Sorting from '../Sorting'
import BookList from '../BookList'

import './style.css';

class BooksHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: 'title',
      books: null
    };

    this.handleSorting = this.handleSorting.bind(this);
    this.sortingBooks = this.sortingBooks.bind(this);
  }



  handleSorting(value) {
    this.setState({sorting: value});
  }


  sortingBooks(arrayBooks, sortingFlag) {
    switch(sortingFlag) {
      case 'date': return arrayBooks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      case 'author': return arrayBooks.sort((a, b) => a.author.localeCompare(b.author));
      case 'title': return arrayBooks.sort((a, b) => a.title.localeCompare(b.title));
    }
  }


  render() {

    if (!this.state.books) {
      return (
        <div className="preloader"></div>
      )
    }

    let filteredBooks = this.sortingBooks(this.state.books.slice(), this.state.sorting);

    return (
      <div className="books-container">
        <Sorting onSortingChange={this.handleSorting}/>
        <BookList books={filteredBooks} />
      </div>
    )
  }
}

export default BooksHandler;
