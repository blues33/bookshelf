import React, { Component } from 'react';
import BooksHandler from './BooksHandler';
import Header from './Header';
import Statistics from './Statistics';
import books from '../api/books.json';
import './base.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {isStatisticsModalOpen: false};
    this.openStatisticsModal = this.openStatisticsModal.bind(this);
    this.closeStatisticsModal = this.closeStatisticsModal.bind(this);
  }

  openStatisticsModal() {
    this.setState({isStatisticsModalOpen: true})
  }

  closeStatisticsModal() {
    this.setState({isStatisticsModalOpen: false})
  }

  render() {
    return (
      <div>
        {this.state.isStatisticsModalOpen &&
          <Statistics closeStatistics={this.closeStatisticsModal} books={books} />}

        <Header openStatistics={this.openStatisticsModal} />
        <BooksHandler />
      </div>
    );
  }
}

export default App;
