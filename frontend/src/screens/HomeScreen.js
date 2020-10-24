import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../constants/apiConstants';
import axios from 'axios'

const HomeScreen = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
      .then(function (response) {
          if(response.status !== 200){
            redirectToLogin()
          }
      })
      .catch(function (error) {
        redirectToLogin()
      });

    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  function redirectToLogin() {
     props.history.push('/login');
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
