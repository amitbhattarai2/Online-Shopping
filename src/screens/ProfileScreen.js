import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, ListGroup, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  usernameValidator,
} from '../validatiors/formValidators'

const ProfileScreen = ({ location, history }) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  const formErrors = [
    'Firstname',
    'Lastname',
    'Email',
    'Username',
    'Password',
    'Confirm Password',
  ]
  const formChecks = [false, false, false, false, false, false]

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
  if (
    passwordValidator(password) &&
    confirmPassword.trim() &&
    password === confirmPassword
  ) {
    formChecks[5] = true
  }

  useEffect(() => {
    if (userInfo && userInfo.role === 'CLIENT') dispatch(listMyOrders())
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.username) {
        dispatch(getUserDetails('profile'))
        if (userInfo.role === 'CLIENT') dispatch(listMyOrders())
      } else {
        setFirstName(user.firstname)
        setLastName(user.lastname)
        setUsername(user.username)
        setEmail(user.email)
        setPassword(user.password)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (
      !formChecks.some((e) => {
        return e === false
      })
    ) {
      dispatch(
        updateUserProfile({
          id: user.id,
          firstname,
          lastname,
          username,
          email,
          password,
        })
      )
    }
  }

  return (
    <Row>
      <Col md={3}>
        <ListGroup>
          {userInfo &&
            formErrors &&
            formErrors.map((e, idx) => (
              <ListGroup.Item
                variant='success'
                key={idx}
                disabled={!formChecks[idx]}
              >
                {e} <i className='fas fa-check' hidden={!formChecks[idx]} />
                <i className='fas fa-times' hidden={formChecks[idx]} />
              </ListGroup.Item>
            ))}
        </ListGroup>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          userInfo && (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='firstname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Firstname'
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='lastname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Lastname'
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Update
              </Button>
            </Form>
          )
        )}
      </Col>
      {userInfo && userInfo.role === 'CLIENT' ? (
        <Col md={9}>
          <h2>My Orders</h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant='danger'>{errorOrders}</Message>
          ) : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.id}</td>
                    <td>{order.order_created.split('T')[0]}</td>
                    <td>{order.total}</td>
                    <td>
                      {order.status === 'PAID' ? (
                        <Message variant='success'>Yes</Message>
                      ) : (
                        <Message variant='danger'>No</Message>
                      )}
                    </td>
                    <td>{order.status}</td>
                    <td>
                      <LinkContainer to={`/order/${order.id}`}>
                        <Button className='btn-sm' variant='light'>
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      ) : (
        <></>
      )}
    </Row>
  )
}

export default ProfileScreen
