import React, {Component} from 'react';
import Sorting from '../Sorting'
import BookList from '../BookList'
import books from '../../books.json';

import './style.css';

class BooksHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {sorting: 'title'};

    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(value) {
    this.setState({sorting: value});
    console.log(value);
  }

  render() {
    return (
      <div className="books-container">
        <Sorting onSortingChange={this.handleSorting}/>
        <BookList books={books} sorting={this.state.sorting} />
      </div>
    )
  }
}

export default BooksHandler;
