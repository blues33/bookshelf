import React from 'react';
import { css } from 'astroturf';
import Nav from '../Nav';

const styles = css`
  .header {
    height: 50px;
    background-color: #fafafa;
  }
`;

const Header = () => (
  <header className={styles.header}>
    <Nav />
  </header>
);

export default Header;
