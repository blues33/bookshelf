import React from 'react';
import { css } from 'astroturf';
import PropTypes from 'prop-types';

const styles = css`
  .header {
    height: 50px;
    background-color: #fafafa;
  }
`;

class Book extends React.PureComponent {


  handleClick = () => {
    const bookId = {
      id: this.props.id,
    };

    this.props.deleteBookById(this.props.id)
  }

  render() {
    const {
      id,
      title,
      author,
      description,
    } = this.props;

    return (
      <div onClick={ this.handleClick }>
        <span>{id}</span>
        <span>{title}</span>
        <span>{author}</span>
        <span>{description}</span>
      </div>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Book;
