import React from 'react'
import { Alert } from 'react-bootstrap'

const Category = ({ category, variant }) => {
  return (
    <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
      {category &&
        category.map((cat) => {
          ;<NavDropdown.Item href='#action/3.1'>Category</NavDropdown.Item>
        })}
    </NavDropdown>
  )
}

export default Category
