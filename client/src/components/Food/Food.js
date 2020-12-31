import React from 'react'
import './Food.css'
import { Card } from 'react-bootstrap'
import lunch1 from '../../images/lunch/lunch1.png'

const Food = (props) => {
  const { name, shortDescription, price, imgName, category } = props.item

  //dynamically show images
  // const images = require.context('../../images', true)
  // const imagePath = images(`./${category.toLowerCase()}/${imgName}`)

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={imagePath} className="card-image" /> */}
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
