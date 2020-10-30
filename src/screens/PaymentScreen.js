import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { usePaymentInputs } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'
import Message from '../components/Message'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress, paymentMethod } = cart
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs()

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [method, setMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCVC] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!meta.error) {
      dispatch(
        savePaymentMethod({
          method,
          cardNumber,
          expiryDate,
          cvc,
        })
      )
      history.push('/placeorder')
    }
    console.log('here')
  }

  const checkCardType = () => {
    if (meta && meta.cardType) {
      setMethod(meta.cardType.displayName)
    }
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='payment'>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Mastercard'
              id='mastercard'
              name='method'
              value='Mastercard'
              checked={method === 'Mastercard'}
              onChange={(e) => setMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='Visa'
              id='visa'
              name='method'
              value='Visa'
              checked={method === 'Visa'}
              required
              onChange={(e) => setMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Card Number</Form.Label>{' '}
          <svg {...getCardImageProps({ images })} />
          <Form.Control
            type='number'
            placeholder='Enter card Number'
            required
            {...getCardNumberProps({
              onChange: (e) => {
                setCardNumber(e.target.value)
                checkCardType()
              },
            })}
            value={cardNumber}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Expiration Date</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Expiration Date'
            required
            {...getExpiryDateProps({
              onChange: (e) => setExpiryDate(e.target.value),
            })}
            value={expiryDate}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter CVV'
            {...getCVCProps({ onChange: (e) => setCVC(e.target.value) })}
            value={cvc}
            required
          ></Form.Control>
        </Form.Group>

        {meta.isTouched && meta.error ? <Message>{meta.error}</Message> : <></>}

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
