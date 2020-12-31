import React from 'react'
import { FormControl, Button, InputGroup } from 'react-bootstrap'
import './Header.css'

import { useAuth } from '../Login/useAuth'
const Header = () => {
  const auth = useAuth()

  return (
    <div>
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
