import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders, listVendorOrders } from '../actions/orderActions'
import { VENDOR_ORDER_LIST_RESET } from '../constants/orderConstants'

const OrderListScreen = ({ history }) => {
  console.log('here')
  const dispatch = useDispatch()

  const vendorOrderList = useSelector((state) => state.vendorOrderList)
  const { loading, error, orders } = vendorOrderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: VENDOR_ORDER_LIST_RESET })
    if (userInfo && userInfo.role === 'VENDOR') {
      dispatch(listVendorOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user.username}</td>
                  <td>{order.order_created.split('T')[0]}</td>
                  <td>
                    {addDecimals(
                      order.listItemDTO.reduce(
                        (acc, item) => acc + item.product.price * item.quantity,
                        0
                      ) * 1.07
                    )}
                  </td>
                  <td>
                    {order.payment.status === 'SUCCESS' ? (
                      <Message variant='success'>Yes</Message>
                    ) : (
                      <Message variant='danger'>No</Message>
                    )}
                  </td>
                  <td>
                    {order.status === 'RECEIVED' ? (
                      <Message variant='warning'>Received</Message>
                    ) : order.status === 'INPROGRESS' ? (
                      <Message variant='primary'>In Progress</Message>
                    ) : order.status === 'CANCELED' ? (
                      <Message variant='danger'>Cancelled</Message>
                    ) : order.status === 'SHIPPED' ? (
                      <Message variant='info'>Shipped</Message>
                    ) : order.status === 'DELIVERED' ? (
                      <Message variant='success'>Delivered</Message>
                    ) : order.status === 'PAID' ? (
                      <Message variant='primary'>Paid</Message>
                    ) : (
                      <Message>Processing</Message>
                    )}
                  </td>
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
    </>
  )
}

export default OrderListScreen
