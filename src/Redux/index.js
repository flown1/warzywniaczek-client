import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import products from './productsReducer'

export default combineReducers({
  products,
})
