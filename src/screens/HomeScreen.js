import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  CardGroup,
  Container,
} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { listCategory } from '../actions/categoryActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const categoryList = useSelector((state) => state.categoryList)
  const { categories } = categoryList

  useEffect(() => {
    dispatch(listCategory())
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />

      <h1>Latest Products</h1>

      <Navbar bg='light'>
        <Nav className='mr-auto'>
          <NavDropdown title='Browse Categories'>
            {categories &&
              categories.map((cat) => (
                <NavDropdown.Item key={cat.id}>
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
        products &&
        products.filter((p) => p.active) && (
          <Container>
            <Row>
              {products &&
                products
                  .filter((p) => p.active)
                  .map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
            </Row>
          </Container>
        )
      )}
    </>
  )
}

export default HomeScreen
