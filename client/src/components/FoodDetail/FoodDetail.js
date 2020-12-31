import React, { useState, useContext } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './FoodDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const FoodDetail = (props) => {
  const { name, longDescription, price, imgName, category } = props.food
  const [quantityCount, setQuantityCount] = useState(1)
  const [currentItemTotalPrice, setCurrentItemTotalPrice] = useState(price)

  //dynamically show images
  const images = require.context('../../images', true)
  const imagePath = images(`./${category.toLowerCase()}/${imgName}`)

  const handleMinusClick = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1)
      const totPrice = currentItemTotalPrice - price
      setCurrentItemTotalPrice(totPrice)
    }
  }

  const handlePlusClick = () => {
    if (quantityCount < 5) {
      setQuantityCount(quantityCount + 1)
      const totPrice = currentItemTotalPrice + price
      setCurrentItemTotalPrice(totPrice)
    }
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>{name}</h1>
          <p> {longDescription} </p>
          <span className="price-span">
            <h4>${currentItemTotalPrice}</h4>
            <button
              className="btn btn-danger quantity-minus-btn"
              onClick={handleMinusClick}
            >
              -
            </button>
            <input
              type="text"
              value={quantityCount}
              className="quantity-input"
            />
            <button
              className="btn btn-success quantity-plus-btn"
              onClick={handlePlusClick}
            >
              +
            </button>
          </span>
          <br />
          <br />
          <br />
          <Button
            className="my-btn"
            variant="outline-danger"
            onClick={() =>
              props.addToCart({
                ...props.food,
                price: currentItemTotalPrice,
                quantity: quantityCount,
              })
            }
          >
            <FontAwesomeIcon icon={faCartPlus} /> Add
          </Button>
        </Col>

        <Col md={6}>
          <img src={imagePath} alt="Food image" className="food-image" />
        </Col>
      </Row>
    </Container>
  )
}

export default FoodDetail
