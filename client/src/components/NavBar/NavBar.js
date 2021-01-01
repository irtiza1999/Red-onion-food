import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../Login/useAuth'
import './NavBar.css'

const NavBar = () => {
  const auth = useAuth()

  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = '/'
    })
  }

  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand className="mr-auto">
          <Link to="/menu">
            {' '}
            <img src={Logo} className="logo ml-5" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-5">
          <Nav.Link>
            <Link to="/orderplaced">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Nav.Link>
          <Link to="/menu" className="btn my-btn btn-outline-danger">
            Foods
          </Link>
          {auth.user ? (
            <span>
              <small className="current-username">
                <strong>{auth.user.name}</strong>
              </small>
              <Button
                variant="danger"
                className="my-btn"
                onClick={handleSignOut}
              >
                Signout
              </Button>
            </span>
          ) : (
            <div>
              <Link to="/login" className="btn my-btn btn-outline-danger">
                Login
              </Link>
              <Link to="/signup" className="btn my-btn btn-outline-danger">
                Sign up
              </Link>
            </div>
          )}
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar
