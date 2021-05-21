import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/apptunixlogo2.png';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';

const Header = () => {
  const cartContext = useContext(CartContext);
  const { cartData } = cartContext;
  return (
    <Navbar bg="light" expand="sm" className="p-0 pr-1" fixed="top">
      <Navbar.Brand href="#home" className="m-0 p-0">
        <img
          src={logo}
          alt=""
          className="img-fluid"
          style={{ height: '60px', width: '90px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pr-2">
          <Link
            to={'/'}
            className="text-lead font-weight-bold my-auto text-dark"
          >
            PRODUCTS
          </Link>
          <Link
            to={'/cart'}
            className="text-lead font-weight-bold my-auto text-dark pl-4 pr-2"
          >
            <i className="fas fa-shopping-bag"></i>
            <span
              className="badge badge-light"
              style={{ position: 'absolute', color: 'red' }}
            >
              {cartData.length}
            </span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
