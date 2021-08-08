import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = (prop) => {
  return (
    <Navbar className='navColor' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>{prop.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
