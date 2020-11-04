import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import SelectUSState from 'react-select-us-states'
import { saveBillingAddress } from '../actions/cartActions'
import { stateNames } from '../constants/usStatesConstants'

const BillingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { billingAddress } = cart

  const [firstname, setFirstName] = useState(billingAddress.firstname)
  const [lastname, setLastName] = useState(billingAddress.lastname)
  const [address, setAddress] = useState(billingAddress.address)
  const [state, setStateAddress] = useState(billingAddress.state)
  const [city, setCity] = useState(billingAddress.city)
  const [postalCode, setPostalCode] = useState(billingAddress.postalCode)
  const [country, setCountry] = useState(billingAddress.country)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      history.push('/login?redirect=billing')
    }
    if (userInfo && userInfo.role !== 'CLIENT') {
      history.push('/')
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveBillingAddress({
        firstname,
        lastname,
        address,
        city,
        state,
        postalCode,
        country,
      })
    )
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Billing</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstname'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter FirstName'
            value={firstname}
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='lastname'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter LastName'
            value={lastname}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            as='select'
            size='sm'
            required
            onChange={(e) => setStateAddress(e.target.value)}
          >
            <option disabled value='' selected>
              Select State
            </option>
            {stateNames &&
              stateNames.map((c, idx) => <option key={idx}>{c}</option>)}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default BillingScreen
