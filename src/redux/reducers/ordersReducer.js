import {
  GET_ORDERS_FETCHING,
  GET_ORDERS_FULFILLED,
  GET_ORDERS_REJECTED,
  ADD_ORDERS_FETCHING,
  ADD_ORDERS_FULFILLED,
  ADD_ORDERS_REJECTED,
  DELETE_ORDERS_FETCHING,
  DELETE_ORDERS_FULFILLED,
  DELETE_ORDERS_REJECTED
} from "../../constants/actionTypes";

const initialState = {
  isLoading: false,
  list: [],
  errro: false
}

const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case GET_ORDERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      }
    case GET_ORDERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case ADD_ORDERS_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case ADD_ORDERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload]
      }
    case ADD_ORDERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    case DELETE_ORDERS_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_ORDERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter(order => order._id !== action.payload)
      }
    case DELETE_ORDERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}

export default todosReducers
