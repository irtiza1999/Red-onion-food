import React, { useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import './CartItem.css'

const CartItem = (props) => {
  const { name, price, imgName, quantity, category } = props.item

  const [quantityCount, setQuantityCount] = useState(quantity)
  const [currentItemTotalPrice, setCurrentItemTotalPrice] = useState(price)
  const singlePrice = props.singlePrice

  //   //dynamically show images
  //   const images = require.context('../../images', true)
  //   const imagePath = images(`./${category.toLowerCase()}/${imgName}`)

  const handleMinusClick = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1)
      const totPrice = singlePrice * (quantityCount - 1)
      setCurrentItemTotalPrice(totPrice)

      const item = {
        ...props.item,
        price: totPrice,
        quantity: quantityCount - 1,
      }
      props.addToCart(item)
    }
  }

  const handlePlusClick = () => {
    if (quantityCount < 5) {
      setQuantityCount(quantityCount + 1)

      const totPrice = singlePrice * (quantityCount + 1)
      setCurrentItemTotalPrice(totPrice)

      const item = {
        ...props.item,
        price: totPrice,
        quantity: quantityCount + 1,
      }
      props.addToCart(item)
    }
  }

  return (
    <div className="cart-item">
      <Row>
        <Col md={4}>
          {/* <img src={imagePath} className="img-thumbnail" alt="thumbnail" /> */}
        </Col>

        <Col md={4}>
          <h6>{name}</h6> <br />
          <h4>${currentItemTotalPrice}</h4>
          <small>Delivery free!</small>
        </Col>

        <Col md={4}>
          <button
            className="btn btn-danger quantity-minus-btn"
            onClick={() => handleMinusClick()}
          >
            -
          </button>
          <input type="text" value={quantityCount} className="quantity-input" />
          <button
            className="btn btn-success quantity-plus-btn"
            onClick={() => {
              handlePlusClick()
            }}
          >
            +
          </button>
        </Col>
      </Row>
    </div>
  )
}

export default CartItem
