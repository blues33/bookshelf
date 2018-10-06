import React, {Component} from 'react';
import { css } from 'astroturf';
import Nav from '../Nav'

const styles = css`
  .header {
    height: 50px;
    background-color: #fafafa;
  }
`;


class Header extends Component {

  render() {

    return (
      <header className={ styles.header }>
        <Nav />
      </header>
    )
  }
}

export default Header;