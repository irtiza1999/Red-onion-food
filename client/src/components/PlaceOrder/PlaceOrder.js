import React from 'react'
import orderComplete from '../../images/screenshots/8 ordercomplete.png'
import Auth from '../Login/useAuth'

const PlaceOrder = (props) => {
  const auth = Auth()
  return (
    <div>
      <img src={orderComplete} style={{ width: '100%' }}></img>
    </div>
  )
}

export default PlaceOrder
