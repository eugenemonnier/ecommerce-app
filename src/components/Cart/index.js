import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteFromCart } from '../actions'

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const mapDispatchToProps = { deleteFromCart }

const Cart = ({ cart, deleteFromCart }) => {
  return (
    <>
      <h3>Cart Contents</h3>
      <Table variant='sm' striped bordered>
        <thead>
          <tr>
            <th>Click To Remove</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? cart.map(product => {
            return (
              <tr key={product.productName}>
                <img
                  src={require(`./../Products/${product.image}`)}
                  alt={product.productName}
                  onClick={() => { deleteFromCart(product) }}
                />
                <td>{product.productName}</td>
                <td>{product.price}</td>
              </tr>
            )
          })
            : 'Add Items to Cart'}
        </tbody>
      </Table>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
