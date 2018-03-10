import React, { Component } from 'react';
import './style.css'

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.closeStatisticsModal = this.closeStatisticsModal.bind(this);
    this.calculatingFavoriteAuthor = this.calculatingFavoriteAuthor.bind(this);
    this.getDateSinceLastBookRead = this.getDateSinceLastBookRead.bind(this);
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

    let bookId = 0;
    for(let [key, value] of authorNumber) {
      authorNumberArray.push({id: bookId, author: key, number: value});
      bookId++;
    }

    return authorNumberArray.sort((a, b) => b.number - a.number);
  }

  getDateSinceLastBookRead(books) {
    const arrayDateBooks = books.map((book) => Date.parse(book.date));
    const dateLastBook = Math.max.apply(null, arrayDateBooks); // milliseconds
    const nowDate = Date.parse(new Date()); // milliseconds
    const timeDiff = nowDate - dateLastBook;
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  render() {
    const {books} = this.props.books;
    const authorNumberArray = this.calculatingFavoriteAuthor(books);
    const authorNumberList = authorNumberArray.map((book) => <li key={book.id}><span>{book.author}</span><span>{book.number}</span></li>);
    const dateSinceLastBookRead = this.getDateSinceLastBookRead(books);

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
              <span>Любимые авторы: </span>
              <ul className="statistics-modal-favorite-author-list">
                {authorNumberList}
              </ul>
            </div>

            <div className="statistics-modal-last-book-read">
              <span>Со дня прочтения последней книги прошло: </span>
              <span>{dateSinceLastBookRead} дней</span>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
