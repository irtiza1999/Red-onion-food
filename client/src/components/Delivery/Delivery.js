import React, { useState, useEffect } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import './Delivery.css'

const Delivery = (props) => {
  let deliveryInfo = {
    name: '',
    email: '',
    address: '',
    mobile: '',
  }

  let [isValid, setIsValid] = useState(true)

  const isValidInfo = () => {
    if (
      deliveryInfo.name !== '' &&
      deliveryInfo.email !== '' &&
      deliveryInfo.address !== '' &&
      deliveryInfo.mobile !== ''
    )
      return true
    return false
  }

  const handleChange = (e) => {
    e.preventDefault()
    deliveryInfo[[e.target.name]] = e.target.value
  }

  const handleSubmit = () => {
    if (isValidInfo()) {
      setIsValid(true)
      props.deliveryInfoSubmit(deliveryInfo)
    } else setIsValid(false)
  }

  return (
    <div className="delivery-info">
      <h3>Delivery info</h3>
      <hr />

      <Form>
        {!isValid && <Alert variant="danger">Please fill up all info!</Alert>}
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="address">
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="address"
              placeholder="Your Address"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="mobile">
          <Form.Label column sm={2}>
            Mobile No.
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Your Mobile No."
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              variant="outline-danger"
              className="p10"
              onClick={() => handleSubmit()}
            >
              Save & Continue
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Delivery
