import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts, listProductsByCategory } from '../actions/productActions'
import { listCategory } from '../actions/categoryActions'

const CategoryHomeScreen = ({ match }) => {
  const catId = match.params.catId
  const keyword = match.params.keyword || ''

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productListByCategory = useSelector(
    (state) => state.categoryProductList
  )
  const { loading, error, products, page, pages } = productListByCategory

  const categoryList = useSelector((state) => state.categoryList)
  const { categories } = categoryList

  useEffect(() => {
    dispatch(
      listProductsByCategory(catId, keyword === '@' ? '' : keyword, pageNumber)
    )
  }, [dispatch, catId, keyword, pageNumber])

  return (
    <>
      <Meta />

      <h1>Latest Products</h1>

      <Navbar bg='light'>
        <Nav className='mr-auto'>
          <NavDropdown title='Browse Categories'>
            {categories &&
              categories.map((cat) => (
                <NavDropdown.Item>
                  <NavLink to={`/search/@/category/${cat.id}`}>
                    {cat.name}
                  </NavLink>
                </NavDropdown.Item>
              ))}
          </NavDropdown>
        </Nav>
      </Navbar>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products &&
              products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default CategoryHomeScreen
