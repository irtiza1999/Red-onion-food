import React, { useState, useEffect } from 'react'
import { Nav, Row, Col, Container, Button, Alert } from 'react-bootstrap'
import Food from '../Food/Food'
import './FoodMenu.css'
import FoodDetail from '../FoodDetail/FoodDetail'
import Delivery from '../Delivery/Delivery'
import CartItem from '../CartItem/CartItem'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../Payment/CheckoutForm'
import Login from '../Login/Login'
import { useAuth } from '../Login/useAuth'
import Header from '../Header/Header'

const FoodMenu = () => {
  const [allItems, setAllItems] = useState([])
  const [currentItems, setCurrentItems] = useState([])
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null)
  const [cart, setCart] = useState([])
  const [checkedOut, setCheckedOut] = useState(false)
  const [deliveryInfoSubmit, setDeliveryInfoSubmit] = useState(false)
  const [deliveryInformation, setDeliveryInformation] = useState(null)
  const [orderId, setOrderId] = useState(null)

  const auth = useAuth()

  const stripePromise = loadStripe(
    'pk_test_51HubhJHonQARCwkeqhDsoRgvql1fz9wDOl3tY2LwQ67mYp06UBDvNAJ45pS3Zffa2rIJMt22ATNLieFUq8OzDDfS00IB1GOyfL'
  )

  // load data
  useEffect(() => {
    fetch('https://redonionserver.herokuapp.com/foods')
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data)
        const currentCart = JSON.parse(localStorage.getItem('foodCart') || '[]')

        if (currentCart) setCart(currentCart)
      })

      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    handleSelection('Breakfast')
  }, [allItems])

  const handleSelection = (category) => {
    const currentItems = allItems.filter((food) => food.category === category)
    setCurrentItems(currentItems)
    setCurrentSelectedItem(null)
  }

  const handleCurrentSelectedItem = (item) => {
    setCurrentSelectedItem(item)
  }

  const addToCart = (item) => {
    const selectedItem = cart.find((it) => it.id === item.id)

    if (selectedItem) {
      const index = cart.indexOf(selectedItem)
      const newCart = [...cart]
      newCart[index] = item
      localStorage.setItem('foodCart', JSON.stringify(newCart))

      setCart(newCart)
    } else {
      console.log([...cart, item])
      setCart([...cart, item])
      localStorage.setItem('foodCart', JSON.stringify([...cart, item]))
    }
  }

  const removeFromCart = (item) => {
    console.log(item)
  }

  const handleCheckout = () => {
    if (checkedOut) setCheckedOut(false)
    else setCheckedOut(true)
  }

  const handleDeliveryInfoSubmit = (deliveryInfo) => {
    if (deliveryInfoSubmit) setDeliveryInfoSubmit(false)
    else {
      setDeliveryInfoSubmit(true)
      setDeliveryInformation(deliveryInfo)
    }
  }

  const handlePlaceOrder = (payment) => {
    const orderDetail = {
      email: deliveryInformation.email,
      cart: { cart },
      shipment: deliveryInformation,
      payment: payment,
    }

    fetch('https://redonionserver.herokuapp.com/placeOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((order) => {
        setOrderId(order._id)
        alert('Order Successful!')
        localStorage.removeItem('foodCart')
        setCart(null)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <Header />
      <div className="food-menu">
        <Nav
          activeKey="Breakfast"
          onSelect={(selectedKey) => {
            handleSelection(selectedKey)
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="Breakfast">Breakfast</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Lunch">Lunch</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Dinner">Dinner</Nav.Link>
          </Nav.Item>
        </Nav>

        {!checkedOut && !orderId && (
          <Container fluid="md">
            <Row>
              {!currentSelectedItem &&
                currentItems.map((item) => {
                  return (
                    <Col
                      md={4}
                      xs={12}
                      sm={12}
                      className="food-item-col"
                      onClick={() => {
                        handleCurrentSelectedItem(item)
                      }}
                    >
                      <Food item={item} />
                    </Col>
                  )
                })}

              {currentSelectedItem && (
                <FoodDetail
                  food={currentSelectedItem}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              )}
            </Row>

            {cart.length > 0 && (
              <Button onClick={() => handleCheckout()}>
                {' '}
                Checkout Your Food{' '}
              </Button>
            )}
            {cart.length === 0 && (
              <Button disabled> Checkout Your Food </Button>
            )}
          </Container>
        )}

        {checkedOut && (
          <Container fluid="md">
            <Row>
              <Col
                md={12}
                style={{ display: deliveryInfoSubmit ? 'none' : 'block' }}
              >
                {auth.user && (
                  <Delivery deliveryInfoSubmit={handleDeliveryInfoSubmit} />
                )}
                {!auth.user && <Login path="/delivery" />}
              </Col>
              <Col
                md={12}
                style={{ display: deliveryInfoSubmit ? 'block' : 'none' }}
              >
                {
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Cart</h3>
                      {cart &&
                        cart.map((item) => {
                          const singleItemPrice = allItems.find(
                            (i) => i.id === item.id
                          ).price
                          return (
                            <CartItem
                              item={item}
                              singlePrice={singleItemPrice}
                              addToCart={addToCart}
                              removeFromCart={removeFromCart}
                            />
                          )
                        })}
                    </div>

                    <div className="col-md-6">
                      {deliveryInfoSubmit && !orderId && (
                        <div>
                          <h4>From: KFC</h4>
                          <h5>Arriving in: 20-30 min</h5>
                          <h6>Customer Name: {deliveryInformation.name} </h6>
                          <h6>
                            Customer Address: {deliveryInformation.address}
                          </h6>
                          <h6>Mobile No.: {deliveryInformation.mobile}</h6>
                          <hr />
                          <br />
                        </div>
                      )}
                    </div>
                    <div className="col-md-12">
                      {deliveryInfoSubmit && !orderId && (
                        <Elements stripe={stripePromise}>
                          <CheckoutForm handlePlaceOrder={handlePlaceOrder} />
                        </Elements>
                      )}
                    </div>
                  </div>
                }
                {orderId && (
                  <>
                    <Alert variant="success">
                      Thanks for your order! Your order id: {orderId} <br />
                      Eat Healthy!!
                    </Alert>
                    {(window.location.pathname = '/')}
                  </>
                )}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </>
  )
}

export default FoodMenu
