import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import List from '../../components/List';
import fetchList from '../../actions/list';

class ListContainer extends React.PureComponent {

  componentDidMount() {
    console.log('componentDidMount')
    this.props.fetchList();
  }

  render() {
    return (
      <div><List /></div>
    );
  }
}

const mapDispatchToProps = {
  fetchList,
};

export default connect(null, mapDispatchToProps)(ListContainer);

ListContainer.propTypes = {
  fetchList: PropTypes.func.isRequired,
};
