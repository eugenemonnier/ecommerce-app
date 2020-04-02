import React from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { select, reset } from '../actions'
import './Categories.scss'

const mapStateToProps = state => {
  return { categoryPicker: state.categoryPicker }
}

const mapDispatchToProps = { select, reset }

const Categories = props => {
  return (
    <Nav className='Categories'>
      {props.categoryPicker.categories.map(category => {
        return (
          <Nav.Item key={category.name} onClick={() => { props.select(props.categoryPicker.selectedCategory === category.name ? '' : category.name) }}>
            <Nav.Link className={category.name === props.categoryPicker.selectedCategory ? 'active-category' : 'inactive-category'}>
              {category.name}
            </Nav.Link>
          </Nav.Item>
        )
      })}
    </Nav>
  )
}

// Insted of exporting the component, we export it after it's been connected to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
