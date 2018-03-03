import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.openStatisticsModal = this.openStatisticsModal.bind(this);
  }

  openStatisticsModal() {
    this.props.openStatistics();
  }

  render() {

    return (
      <div className="header">
        <button className="statistics-btn" onClick={this.openStatisticsModal}>Статистика</button>
      </div>
    );
  }
}

export default Header;
