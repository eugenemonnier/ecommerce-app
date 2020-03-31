import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../../store'
import ECommerce from '../ECommerce'

function App() {
  return (
    <Provider store={store}>
      <Container className='App'>
        <h1>Essential Eddibles</h1>
        <ECommerce />
      </Container>
    </Provider>
  )
}

export default App
