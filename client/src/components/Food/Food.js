import React, { useState, useEffect } from 'react'
import './Food.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Food = (props) => {
  const {
    name,
    shortDescription,
    price,
    imgName,
    category,
    key: key1,
  } = props.item

  const images = require.context('../../menu', true)
  const imagePath = images(`./${category.toLowerCase()}/${imgName}`).default

  return (
    <div>
      <Link>
        <Card style={{ width: '18rem', cursor: 'pointer' }}>
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
      </Link>
    </div>
  )
}

export default Food
