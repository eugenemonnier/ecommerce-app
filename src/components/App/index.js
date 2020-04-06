import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../Header'
import Categories from '../Categories'
import Products from '../Products'
import Cart from '../Cart'
import Footer from '../Footer'

function App() {
  return (
    <Provider store={store}>
      <Container className='App'>
        <Header />
        <Categories />
        <Products />
        <Cart />
        <Footer />
      </Container>
    </Provider>
  )
}

export default App
