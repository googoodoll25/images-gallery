import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = (prop) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>{prop.title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
