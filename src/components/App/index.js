import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../../store'
import Categories from '../Categories'
import Products from '../Products'
import Cart from '../Cart'

function App() {
  return (
    <Provider store={store}>
      <Container className='App'>
        <h1>Essential Eddibles</h1>
        <Categories />
        <Products />
        <Cart />
      </Container>
    </Provider>
  )
}

export default App
