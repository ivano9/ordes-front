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

const URL = 'https://mcga-exam.herokuapp.com/api/v1.0/orders'

const getOrdersFetching = () => ({
  type: GET_ORDERS_FETCHING,
  payload
})

const getOrdersFulfilled = payload => ({
  type: GET_ORDERS_FULFILLED,
  payload
})

const getOrdersRejected = () => ({
  type: GET_ORDERS_REJECTED
})

export const getOrders = () => dispatch => {
  dispatch(getOrdersFetching())
  return fetch(URL)
    .then(data => data.json())
    .then(response => dispatch(getOrdersFulfilled(response)))
    .catch(() => dispatch(getOrdersRejected()))
}

const AddOrdersFetching = () => ({
  type: ADD_ORDERS_FETCHING,
  payload
})

const AddOrdersFulfilled = payload => ({
  type: ADD_ORDERS_FULFILLED,
  payload
})

const AddOrdersRejected = () => ({
  type: ADD_ORDERS_REJECTED
})
