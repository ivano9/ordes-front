import { combineReducers } from 'redux'
import ordersReducer from './ordersReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  orders: ordersReducer,
  modal: modalReducer
})

export default rootReducer
