import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = (props) => {
  const [paymentError, setPaymentError] = useState(null)
  const [paymentFinished, setPaymentFinished] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      setPaymentError(error.message)
      setPaymentFinished(null)
    } else {
      setPaymentFinished(paymentMethod)

      const payment = { id: paymentMethod.id, last4: paymentMethod.card.last4 }

      props.handlePlaceOrder(payment)
      setPaymentError(null)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: '15px',
        backgroundColor: 'lightblue',
        padding: '30px',
      }}
    >
      <CardElement />
      <Button type="submit" disabled={!stripe} variant="success">
        Pay & Place Order
      </Button>
      {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
      {paymentFinished && (
        <p style={{ color: 'green' }}>Payment successfull!</p>
      )}
    </form>
  )
}

export default CheckoutForm
