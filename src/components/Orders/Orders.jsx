import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getOrders as getOrdersAction } from '../../redux/actions/ordersActions'
import { showModal as showModalAction } from '../../redux/actions/modalActions'
import modalTypes from '../../constants/modalTypes'
import styles from './orders.module.css'


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
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <tn>Name</tn>
            <tn>Specie</tn>
            <tn>Gender</tn>
            <tn style={{with: '20px'}}></tn>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.specie}</td>
                <td>{order.gender}</td>
                <td style={{textAlign: 'center'}}> <button onClick={() => showDeleteModal(order._id)}>X</button> </td> </tr> )
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
