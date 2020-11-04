import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Table,
  Badge,
  Image,
  Button,
  Row,
  Col,
  Form,
  ButtonGroup,
  ToggleButton,
  Card,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { createProductsReport } from '../actions/productActions'
import { USER_LOGIN_RESET } from '../constants/userConstants'
import { PRODUCT_REPORT_RESET } from '../constants/productConstants'
import { Parser } from 'html-to-react'

const ReportScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const productReport = useSelector((state) => state.productReport)
  const { loading, error, report } = productReport

  useEffect(() => {
    if (report) {
      console.log()
    }
    //dispatch({ type: PRODUCT_REPORT_RESET })
    if (!userInfo && userInfo.role !== 'ADMIN') {
      dispatch({ type: USER_LOGIN_RESET })
      history.push('/login')
    }
  }, [history, userInfo, productReport])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userInfo.role === 'ADMIN') {
      dispatch(createProductsReport())
    }
  }
  if (!userInfo || !userInfo.role === 'ADMIN') {
    history.push('/login')
  }

  return (
    <>
      {userInfo.role === 'ADMIN' ? (
        <FormContainer>
          <h1>Report</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Select Type</Form.Label>
                  <Form.Control as='select' custom>
                    <option>Product</option>
                    <option>Orders</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId='from'>
                  <Form.Label>Form</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='mm/dd/yy'
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId='to'>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='mm/dd/yy'
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Button type='submit' variant='primary'>
                    Submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          )}
          {report ? (
            <>
              <Card>
                <Card.Header>Generated Reports</Card.Header>
                <Card.Text>
                  {report.split('\\').slice(-1)[0]} generated in {report}
                </Card.Text>
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
