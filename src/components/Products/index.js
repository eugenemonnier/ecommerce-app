import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const Products = props => {
  console.log(props)
  return (
    <Table variant='sm' striped bordered>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {console.log(props)
        }
        {props.products.products.map(product => (
          <tr key={product.name}>
            <td>{product.productName}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default connect(mapStateToProps)(Products)
