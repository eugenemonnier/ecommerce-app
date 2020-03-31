import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import categoryPicker from './storeCategories'

const reducers = combineReducers({ categoryPicker })

const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store()
