import React, {Component} from 'react';
import './style.css';

class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'title'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSortingChange(e.target.value);
  }

  render() {
    return (
      <div className="sorting-container">
        <div className="sorting-title">Сортировать по:</div>
        <select className="sorting-select" onChange={this.handleChange}>
          <option value="title">По названию</option>
          <option value="author">По автору</option>
          <option value="date">По дате прочтения</option>
        </select>
      </div>
    )
  }
}



export default Sorting;
