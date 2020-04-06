import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './products.scss'
import { addToCart, decreaseInventory } from '../actions'

const mapStateToProps = state => {
  return {
    products: state.categoryPicker.products
  }
}

const mapDispatchToProps = { addToCart, decreaseInventory }

const Products = ({ products, addToCart }) => {
  return (
    <Table variant='sm' striped bordered>
      <thead>
        <tr>
          <th>Click To Purchase</th>
          <th>Product Name</th>
          <th>Current Inventory</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.productName}>
            <img
              src={require(`./${product.image}`)}
              alt={product.productName}
              onClick={() => {
                addToCart(product)
                decreaseInventory(product)
              }}
            />
            <td>{product.productName}</td>
            <td>{product.inventory}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
