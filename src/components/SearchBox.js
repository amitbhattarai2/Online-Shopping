import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, NavDropdown } from 'react-bootstrap'
import { listCategory } from '../actions/categoryActions'

const SearchBox = ({ history }) => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('')

  //TODO Categories
  const categoryList = useSelector((state) => state.categoryList)
  const { categories } = categoryList

  useEffect(() => {
    dispatch(listCategory())
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}/category/${category ? category : 0}`)
    } else {
      history.push(`/search/@/category/${category ? category : 0}`)
    }
  }

  return (
    <>
      <Form.Group controlId='category'>
        <Form.Label></Form.Label>
        <Form.Control
          as='select'
          size='sm'
          onChange={(e) => setCategory(e.target.options.selectedIndex)}
        >
          <option disabled selected>
            Select Category
          </option>
          {categories &&
            categories.map((c) => <option key={c.id}>{c.name}</option>)}
        </Form.Control>
      </Form.Group>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button type='submit' variant='outline-success' className='p-2'>
          Search
        </Button>
      </Form>
    </>
  )
}

export default SearchBox
