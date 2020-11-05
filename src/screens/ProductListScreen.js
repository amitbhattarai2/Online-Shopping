import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Badge, Image, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listProducts,
  deleteProduct,
  createProduct,
  listVendorProducts,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const productList = useSelector((state) => state.productList)
  const vendorProductList = useSelector((state) => state.vendorProductList)

  let loading,
    error,
    products,
    page,
    pages = ''

  if (userInfo && userInfo.role === 'VENDOR') {
    ;({ loading, error, products, page, pages } = vendorProductList)
  } else {
    ;({ loading, error, products, page, pages } = productList)
  }

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (userInfo && userInfo.role === 'VENDOR') {
      dispatch(listVendorProducts(userInfo.id, pageNumber))

      if (successCreate) {
        history.push(
          `/${userInfo.role.toLowerCase()}/product/${createdProduct.id}/edit`
        )
      }
    } else if (userInfo && userInfo.role === 'ADMIN') {
      dispatch(listProducts('', pageNumber))
    } else {
      history.push('/login')
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        {userInfo && userInfo.role === 'VENDOR' ? (
          <Col className='text-right'>
            <Button className='my-3' onClick={createProductHandler}>
              <i className='fas fa-plus'></i> Create Product
            </Button>
          </Col>
        ) : (
          <></>
        )}
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>IMAGE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category.name}</td>
                    <td>${product.price}</td>

                    <td>
                      <Row>
                        <Col md={6}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fluid
                            rounded
                          />
                        </Col>
                      </Row>
                    </td>
                    <td>{product.description}</td>
                    <td>
                      {product.active ? (
                        <Badge pill variant='success'>
                          Active
                        </Badge>
                      ) : (
                        <Badge pill variant='danger'>
                          Inactive
                        </Badge>
                      )}
                    </td>
                    <td>
                      <LinkContainer
                        to={`/${
                          userInfo && userInfo.role.toLowerCase()
                        }/product/${product.id}/edit`}
                      >
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(product.id)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Paginate
            pages={pages}
            page={page}
            isAdmin={
              userInfo &&
              (userInfo.role === 'ADMIN' || userInfo.role === 'VENDOR')
            }
          />
        </>
      )}
    </>
  )
}

export default ProductListScreen
