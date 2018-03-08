import React, { Component } from 'react';
import './style.css'

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.closeStatisticsModal = this.closeStatisticsModal.bind(this);
    this.calculatingFavoriteAuthor = this.calculatingFavoriteAuthor.bind(this);
  }

  closeStatisticsModal() {
    this.props.closeStatistics();
  }

  calculatingFavoriteAuthor(books) {
    let authorNumber = new Map();
    let authorNumberArray = [];

    books.forEach((item) => {
      if (!authorNumber.has(item.author)) {
          authorNumber.set(item.author, 0);
      }
      authorNumber.set(item.author, authorNumber.get(item.author) + 1)
    })

    for(let [key, value] of authorNumber) {
      authorNumberArray.push({author: key, number: value});
    }

    return authorNumberArray.sort((a, b) => b.number - a.number);
  }


  render() {
    const {books} = this.props.books;
    const authorNumberArray = this.calculatingFavoriteAuthor(books);
    const authorNumberList = authorNumberArray.map((book) => <li><span>{book.author}</span><span>{book.number}</span></li>);

    return (
      <div className="statistics-modal-wrapper" >
        <div className="statistics-modal-window">
          <div className="statistics-modal-window-wrapper">
            <button className="statistics-modal-close-btn" onClick={this.closeStatisticsModal}></button>

            <div className="statistics-modal-number-books">
              <span>Всего книг: </span>
              <span>{books.length}</span>
            </div>

            <div className="statistics-modal-favorite-author">
              <span>Любимый автор: </span>
              <ul>
                {authorNumberList}
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
