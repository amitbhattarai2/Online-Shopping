import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Col, Form, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

import FormContainer from '../components/FormContainer'
import {
  createProductsReport,
  createProductsReportForVendor,
} from '../actions/productActions'
import { USER_LOGIN_RESET } from '../constants/userConstants'
import { listUsers } from '../actions/userActions'

const ReportScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [type, setType] = useState(0)
  const [vendor, setVendor] = useState(-1)

  const productReport = useSelector((state) => state.productReport)
  const { loading, error, report } = productReport

  const userList = useSelector((state) => state.userList)
  const { users } = userList

  const categories = [
    'List of Product',
    'Financial Report',
    'Status of Sale by Report',
  ]

  useEffect(() => {
    if (userInfo && userInfo.role === 'ADMIN') {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }

    if (!userInfo || userInfo.role !== 'ADMIN') {
      dispatch({ type: USER_LOGIN_RESET })
      history.push('/login')
    }
  }, [history, userInfo, productReport])

  const submitHandler = (e) => {
    console.log(vendor)
    e.preventDefault()
    if (userInfo.role === 'ADMIN') {
      if (vendor !== -1 && type !== 0) {
        {
          dispatch(createProductsReportForVendor(type + 1, vendor))
        }
      } else dispatch(createProductsReport(type + 1))
    }
  }
  if (!userInfo || !userInfo.role === 'ADMIN') {
    history.push('/login')
  }

  return (
    <>
      {userInfo && userInfo.role === 'ADMIN' ? (
        <FormContainer>
          <h1>Report</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Form.Group controlId='category'>
                  <Form.Label></Form.Label>
                  <Form.Control
                    as='select'
                    size='sm'
                    onChange={(e) => setType(e.target.options.selectedIndex)}
                  >
                    {categories &&
                      categories.map((c, idx) => (
                        <option key={idx}>{c}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='vendor'>
                  <Form.Label></Form.Label>
                  <Form.Control
                    as='select'
                    size='sm'
                    onChange={(e) =>
                      setVendor(
                        e.target.options[
                          e.target.options.selectedIndex
                        ].getAttribute('data-key')
                      )
                    }
                  >
                    <option disabled value='' selected>
                      Select Vendor
                    </option>
                    {users &&
                      users.map((c, idx) =>
                        c.role === 'VENDOR' ? (
                          <option key={idx} data-key={c.id}>
                            {c.username}
                          </option>
                        ) : (
                          <></>
                        )
                      )}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Button type='submit' variant='primary'>
                    Generate
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          )}
          {report ? (
            <>
              <Card>
                <Card.Header>Type of Report to Generate</Card.Header>
                <Card.Text variant='success'>{categories[type]}</Card.Text>
              </Card>
            </>
          ) : (
            <Card>
              <Card.Header>No reports generated</Card.Header>
            </Card>
          )}
        </FormContainer>
      ) : (
        <></>
      )}
    </>
  )
}

export default ReportScreen
