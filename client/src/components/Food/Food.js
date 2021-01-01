import React from 'react'
import './Food.css'
import { Card } from 'react-bootstrap'
import breakfast from '../../menu/breakfast/breakfast1.png'

const Food = (props) => {
  const { name, shortDescription, price, imgName, category } = props.item
  const images = require.context('../../menu', true)
  const imagePath = images(`./${category.toLowerCase()}/${imgName}`).default

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          src={imagePath}
          variant="top"
          className="card-image"
          alt="img"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Food
