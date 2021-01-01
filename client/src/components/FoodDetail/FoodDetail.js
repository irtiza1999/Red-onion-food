import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './FoodDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const FoodDetail = (props) => {
  const { key } = useParams()
  const [foodById, setFoodById] = useState({})

  useEffect(() => {
    fetch('http://localhost:5000/foods/' + key)
      .then((res) => res.json())
      .then((data) => {
        setFoodById(data)
        console.log('data2 ', data)
      })
  }, [key])
  const { name, longDescription, price, imgName, category } = foodById
  console.log(foodById)

  const [quantityCount, setQuantityCount] = useState(1)
  const [currentItemTotalPrice, setCurrentItemTotalPrice] = useState(price)

  const images = require.context('../../menu', true)
  const imagePath = images(`./${category.toLowerCase()}/${imgName}`).default

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
          <img src={imagePath} alt="FoodImage" className="food-image" />
        </Col>
      </Row>
    </Container>
  )
}

export default FoodDetail
