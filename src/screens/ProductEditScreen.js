import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [active, setActive] = useState(false)
  const [uploading, setUploading] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push(`/${userInfo.role.toLowerCase()}/productlist`)
    } else {
      if (!product.name || product.id != productId) {
        dispatch(listProductDetails(productId))
      } else {
        console.log('here')
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setCountInStock(product.countInStock)
        setDescription(product.description)
        setActive(product.active)
      }
    }
  }, [dispatch, history, match, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (userInfo.role === 'ADMIN') {
      dispatch(
        updateProduct({
          id: productId,
          name,
          price,
          image,
          description,
          countInStock,
          active,
        })
      )
    } else {
      dispatch(
        updateProduct({
          id: productId,
          name,
          price,
          image,
          description,
          countInStock,
        })
      )
    }
  }

  return (
    <>
      <Link
        to={`/${userInfo.role.toLowerCase()}/productlist`}
        className='btn btn-light my-3'
      >
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* {userInfo.role === 'ADMIN' ? (
              <Form.Group>
                <Form.Label as='legend'>Change Status</Form.Label>
                <Col>
                  <Form.Check
                    type='radio'
                    label='Active'
                    id='active'
                    name='status'
                    value='Active'
                    onChange={setActive(true)}
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    label='Inactive'
                    id='inactive'
                    name='status'
                    value='Inactive'
                    onChange={setActive(false)}
                  ></Form.Check>
                </Col>
              </Form.Group>
            ) : (
              <></>
            )} */}

            {userInfo.role === 'ADMIN' ? (
              <Form.Group controlId='status'>
                <Form.Label>Status </Form.Label>
                <ButtonGroup toggle>
                  <ToggleButton
                    key='0'
                    type='radio'
                    variant='secondary'
                    name='radio'
                    value='Active'
                    checked={active}
                    onChange={() => setActive(true)}
                  >
                    Active
                  </ToggleButton>
                  <ToggleButton
                    key='1'
                    type='radio'
                    variant='secondary'
                    name='radio'
                    value='Inactive'
                    checked={!active}
                    onChange={() => setActive(false)}
                  >
                    Inactive
                  </ToggleButton>
                </ButtonGroup>
              </Form.Group>
            ) : (
              <></>
            )}
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
