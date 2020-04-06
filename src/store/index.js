import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryPicker from '../components/reducers/categoryPicker'
import cart from '../components/reducers/cartHandler'
import inventoryHandler from '../components/reducers/inventoryHandler'

const reducers = combineReducers({ categoryPicker, cart, inventoryHandler })

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store()
