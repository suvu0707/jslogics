import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  background: 'lightgray',
//   padding: '4px',
height:"50px",
// background:'skyblue',color:'white'
};

const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems:"center",
  justifyContent: 'start',
  height:"100%"
};

const liStyle = {
  marginRight: '50px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
};

function Navbar() {
  return (
    <div style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to='/' style={linkStyle}>
            AllQuestions
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/rtk' style={linkStyle}>
            ReduxToolkit
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/item' style={linkStyle}>
            ItemFetch
          </Link>
        </li>
        <li style={liStyle}>
          <Link to='/data' style={linkStyle}>
            DataAxios
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
