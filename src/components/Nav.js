import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
      <nav className="nav">
          <ul>
              <li>
                  Home
              </li>
              <li>
                  About
              </li>
              <li>
                  Projects
              </li>
              <li>
                  Contact
              </li>
          </ul>
      </nav>
  );
};