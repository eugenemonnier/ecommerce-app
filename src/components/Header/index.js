import React from 'react'
import './header.scss'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const Header = ({ cart }) => {
  return (
    <header>
      <h1>Essential Eddibles </h1>
      <a href='#go-to-cart' className='cartSection'>
        <img
          className='cart'
          src={require('./shopping-cart.svg')}
          alt='Shopping Cart Icon'
        />
        <span className='cartCount'>{cart.length}</span>
      </a>
    </header>
  )
}

export default connect(mapStateToProps)(Header)
