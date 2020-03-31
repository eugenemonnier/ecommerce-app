import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { select, reset } from '../../store/storeCategories'

const mapStateToProps = state => {
  return { categoryPicker: state.categoryPicker }
}

const mapDispatchToProps = { select, reset }

const ECommerce = props => {
  return (
    <section className='ECommerce'>
      <Table variant='sm' striped bordered>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.categoryPicker.categories.map(cat => (
            <tr key={cat.name}>
              <td>
                <Button
                  variant='outline-primary'
                  onClick={() => {
                    props.select(cat.name)
                  }}
                >
                  {cat.name}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant='primary' onClick={props.reset}>
        Reset
      </Button>
    </section>
  )
};

// Insted of exporting the component, we export it after it's been connected to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ECommerce)
