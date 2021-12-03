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

const getOrdersFetching = payload => ({
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
    .then(response => dispatch(getOrdersFulfilled(response.data)))
    .catch(() => dispatch(getOrdersRejected()))
}

const addOrdersFetching = payload => ({
  type: ADD_ORDERS_FETCHING,
  payload
})

const addOrdersFulfilled = payload => ({
  type: ADD_ORDERS_FULFILLED,
  payload
})

const addOrdersRejected = () => ({
  type: ADD_ORDERS_REJECTED
})

export const addOrders = order => dispatch => {
  dispatch(addOrdersFetching())
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(order)
  })
    .then(data => data.json)
    .then(response => dispatch(addOrdersFulfilled(response)))
    .catch(() => dispatch(addOrdersRejected()))
}

const deleteCharacterFetching = () => ({
  type: DELETE_ORDERS_FETCHING
})

const deleteCharacterFulfilled = () => ({
  type: DELETE_ORDERS_FULFILLED
})

const deleteCharacterRejected = () => ({
  type: DELETE_ORDERS_REJECTED
})


export const deleteOrder = id => dispatch => {
  dispatch(deleteCharacterFetching())
  return fetch(`${URL}/${id}`, { method: 'DELETE'})
    .then(data => data.json())
    .then(() => dispatch(deleteCharacterFulfilled(id)))
    .catch(() => dispatch(deleteCharacterRejected()))
}
