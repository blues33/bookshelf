/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { add } from '../../actions/list';
import Add from '../../components/Add';


class AddContainer extends React.PureComponent {
  render() {
    return (
      <Add add={ this.props.add } />
    );
  }
}

const mapDispatchToProps = {
  add,
};

export default connect(null, mapDispatchToProps)(AddContainer);

AddContainer.propTypes = {
  fetchList: PropTypes.func.isRequired,
};