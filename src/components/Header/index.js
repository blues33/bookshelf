import React, {Component} from 'react';
import { css } from 'css-literal-loader/styled';


const styles = css`
  .header {
    color: black;
    width: 100%;
    height: 50px;
    background-color: '#ccc'
  }
`;

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        header
      </div>
    )
  }
}

export default Header;
