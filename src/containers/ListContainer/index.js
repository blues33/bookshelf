/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/list';
import listSelector from '../../selectors/list';
import List from '../../components/List';

class ListContainer extends React.PureComponent {
  componentDidMount() {
    const { fetchList: fetch } = this.props;
    fetch();
  }

  render() {
    return (
      <List 
        data={ this.props.books.data } 
        state={ this.props.books.state } 
      />
    );
  }
}

const mapDispatchToProps = {
  fetchList,
};

const mapStateToProps = state => ({
  books: listSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

ListContainer.propTypes = {
  fetchList: PropTypes.func.isRequired,
  books: PropTypes.object
};