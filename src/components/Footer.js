import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <Link to='/about'>About Us</Link>
    </footer>
  )
}

export default Footer