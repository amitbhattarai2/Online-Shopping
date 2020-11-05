import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  usernameValidator,
} from '../validatiors/formValidators'

const RegisterScreen = ({ location, history }) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState(null)
  const [nameError, setNameError] = useState(false)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const formErrors = [
    'Firstname',
    'Lastname',
    'Email',
    'Username',
    'Password',
    'Confirm Password',
    'Role',
  ]
  const formChecks = [false, false, false, false, false, false, false]

  if (nameValidator(firstname)) {
    formChecks[0] = true
  }
  if (nameValidator(lastname)) {
    formChecks[1] = true
  }
  if (usernameValidator(username)) {
    formChecks[3] = true
  }
  if (emailValidator(email)) {
    formChecks[2] = true
  }
  if (passwordValidator(password)) {
    formChecks[4] = true
  }
  if (confirmPassword.trim() && password === confirmPassword) {
    formChecks[5] = true
  }
  if (role) {
    formChecks[6] = true
  }

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (
      !formChecks.some((e) => {
        return e === false
      })
    ) {
      dispatch(register(firstname, lastname, email, username, password, role))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Row>
        <Col>
          <Card
            className='my-3 w-50 p-3"
    rounded'
          >
            <ListGroup>
              {formErrors &&
                formErrors.map((e, idx) => (
                  <ListGroup.Item variant='success' disabled={!formChecks[idx]}>
                    {e} <i className='fas fa-check' hidden={!formChecks[idx]} />
                    <i className='fas fa-times' hidden={formChecks[idx]} />
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card
            className='my-3 p-3
    rounded'
          >
            {' '}
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='firstname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Firstname'
                  value={firstname}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
                {nameError && <Message variant='danger'>Invalid name</Message>}
              </Form.Group>
              <Form.Group controlId='lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Last Name'
                  value={lastname}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
                {nameError && <Message variant='danger'>Invalid name</Message>}
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
                {nameError && <Message variant='danger'>Invalid name</Message>}
              </Form.Group>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
                {nameError && <Message variant='danger'>Invalid name</Message>}
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password Address</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                {!passwordValidator(password) && (
                  <Message variant='info'>
                    <p>6 to 15 characters</p>
                    <p>At least one lowercase</p>
                    <p>At least one uppercase </p>
                    <p>At least digit</p>
                    <p>At least one special character</p>
                  </Message>
                )}
              </Form.Group>

              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
                {nameError && <Message variant='danger'>Invalid name</Message>}
              </Form.Group>

              <Form.Group>
                <Form.Label as='legend'>Select Account Type</Form.Label>
                <Col>
                  <Form.Check
                    type='radio'
                    label='Vendor'
                    id='vendor'
                    name='role'
                    value='VENDOR'
                    required
                    onChange={(e) => setRole(e.target.value)}
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='Client'
                    id='client'
                    name='role'
                    value='CLIENT'
                    required
                    onChange={(e) => setRole(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Register
              </Button>
            </Form>
            <Row className='py-3'>
              <Col>
                Have an Account?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/signin'}>
                  Login
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
