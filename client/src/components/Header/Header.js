import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap'
import Logo from '../../images/logo2.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../Login/useAuth'
const Header = () => {
  //get auth hook
  const auth = useAuth()

  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = '/'
    })
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" className="mr-auto">
          <img src={Logo} className="logo ml-5" />
        </Navbar.Brand>
        <Nav className="mr-5">
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
          <Link to="/menu" className="btn my-btn btn-outline-danger">
            Foods
          </Link>
          {auth.user ? (
            <span>
              <small className="current-username">{auth.user.email}</small>
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

      <section className="banner">
        <h1 className="banner-h1">Best food waiting for your belly</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search food items"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="search-input"
          />
          <InputGroup.Append>
            <Button variant="danger" className="search-btn">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </section>
    </div>
  )
}

export default Header
