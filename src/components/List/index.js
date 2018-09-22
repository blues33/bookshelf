import React, {Component} from 'react';

class List extends Component {
  state = {
    books: []
  }


  componentDidMount() {
    fetch('http://localhost:3001/books')
      .then((response) => response.json()
        .then((data) => {
          this.setState({books: data})
        }))
  }


  renderBook = (book) => (
    <li key={book._id}>
      <div>{ book.title }</div>
      <div>{ book.body }</div>
      <div>{ book.author }</div>
    </li>
  )

  render() {


    return (
      <div>
        {this.state.books && (
          <ul>
            {this.state.books.map(item => this.renderBook(item))}
          </ul>
        )}
      </div>
    )
  }
}



export default List;
