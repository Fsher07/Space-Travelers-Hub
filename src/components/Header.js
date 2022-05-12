import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css';
import logoImg from '../assets/planet.png';

const Header = () => (
  <header>
    <NavLink
      to="/"
      className={styles.logoContainer}
    >
      <img src={logoImg} alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Space Travelers Hub</h1>
    </NavLink>
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/myprofile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
