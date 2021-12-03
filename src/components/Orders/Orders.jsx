import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getOrders as getOrdersAction } from '../../redux/actions/ordersActions'
import { showModal as showModalAction } from '../../redux/actions/modalActions'
import modalTypes from '../../constants/modalTypes'
import styles from './Orders.module.css'


const Orders = ({
  orders,
  isLoading,
  error,
  showModal,
  getOrders,
  deleteOrder
}) => {
  useEffect(() => {
    getOrders()
  }, [getOrders])

  if (isLoading)
    return <div>Loading...</div>

  if (error)
    return <div>ERROR!!!</div>

  const showAddModal = () =>
    showModal(modalTypes.ADD_ORDER)

  const showDeleteModal = orderId =>
    showModal(modalTypes.DELETE_ORDER, {
      id: orderId
    })

  return (
    <div className={styles.ordersContainer}>
      <button className={styles.addOrderButton} onClick={() => showAddModal()}>Add Order</button>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Date of Delivery</th>
            <th>Id Deliverer</th>
            <th>State</th>
            <th>Customer Name</th>
            <th>Customer Phone</th>
            <th>Type of Deliver</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return (
              <tr key={order._id}>
                <td>{order.number}</td>
                <td>{order.deliveryDateTime}</td>
                <td>{order.deliverer}</td>
                <td>{order.state}</td>
                <td>{order.customerName}</td>
                <td>{order.customerPhone}</td>
                <td>{order.deliverType}</td>
                <td>{order.amount}</td>
                <td style={{textAlign: 'center'}}> <button onClick={() => showDeleteModal(order._id)}>X</button> </td> </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showModal: showModalAction,
    getOrders: getOrdersAction
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    isLoading: state.orders.isLoading,
    error: state.orders.error,
    orders: state.orders.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
