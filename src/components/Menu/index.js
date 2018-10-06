import React, { Component } from 'react';
import { css } from 'astroturf';
import { Link } from 'react-router-dom'

const styles = css`
  .menu {
    color: black;
    list-style: none;
    display: flex;
  }
  
  .menuItem {
    margin-right: 10px;
  }
  
  .menuLink {
    text-decoration: none;
  }
`;

const Menu = (props) => (
  <ul className={ styles.menu }>
    <li className={ styles.menuItem }>
      <Link className={ styles.menuLink } to="/add">Add</Link>
    </li>
    <li className={ styles.menuItem }>
      <Link className={ styles.menuLink } to="/list">List</Link>
    </li>
  </ul>
)

export default Menu;