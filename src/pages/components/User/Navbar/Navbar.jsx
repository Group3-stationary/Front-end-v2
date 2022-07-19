import React from 'react'
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';

const UserNavbars = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="con" px={3} md={2}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" mb={2} mb-lg={0} ms-lg={4}>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button  className="me-2 btn-shopping-cart" type="submit">
               <ShoppingCartIcon fontSize="small"/>
               <div className="title">
                  Cart
               </div>
               <span className="quantity" ms={1}>0</span>
              </Button>
            </Nav.Link>
            <Nav.Link className="user">
              <Avatar sx={{width: 35, height: 35}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <span className="user-name">Do Huy Hoang</span>  
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default UserNavbars;