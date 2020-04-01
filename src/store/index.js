import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryPicker from '../components/reducers/categoryPicker'
import products from '../components/reducers/cartHandler'

const reducers = combineReducers({ categoryPicker, products })

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store()
