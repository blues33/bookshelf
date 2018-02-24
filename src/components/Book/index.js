import React, {Component} from 'react';
import './style.css';

class Book extends Component {
  render() {
    const {title, description} = this.props.book;

    return (
      <div className="book-item">
        {title}
        {description}
      </div>
    )
  }
}



export default Book;
