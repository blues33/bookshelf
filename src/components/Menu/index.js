import React from 'react';
import { css } from 'astroturf';
import { Link } from 'react-router-dom';

const styles = css`
  .menu {
    color: black;
    list-style: none;
    display: grid;
    grid-template-columns: 40px 40px;
    grid-column-gap: 10px;
    justify-items: start;
    align-items: start;
    justify-content: start;
    align-content: start;
    grid-auto-flow: column;
  }
  
  .menuLink {
    text-decoration: none;
  }
`;

const Menu = () => (
  <ul className={styles.menu}>
    <li className={styles.menuItem}>
      <Link className={styles.menuLink} to="/add">Add</Link>
    </li>
    <li className={styles.menuItem}>
      <Link className={styles.menuLink} to="/list">List</Link>
    </li>
  </ul>
);

export default Menu;
