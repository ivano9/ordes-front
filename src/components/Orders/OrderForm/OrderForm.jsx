import React from 'react'
import {bindActionCreators} from "redux"
import { connect } from 'react-redux'
import { addOrders as addOrderAction } from "../../../redux/actions/ordersActions"
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions'
import { Form, Field } from 'react-final-form'
import { required } from "../../../utils/validations"
import Select from "../../SharedComponents/Select/Select"
import Button from "../../SharedComponents/Button/Button"


const OrderForm = ({
  addOrder,
  closeModal
}) => {
  const onSubmitOrder = values => {
    console.log(values)
    addOrder(values)
    closeModal()
  }

  const deliveryTypes = [
    {
      id: 'NON-CONTACT',
      value: 'NON-CONTACT'
    },
    {
      id: 'IN-CONTACT',
      value: 'IN-CONTACT'
    }]

  const states = [
    {
      id: 'CANCELED',
      value: 'CANCELED'
    }
    ,
    {
      id: 'DELIVERED',
      value: 'DELIVERED'
    },
    {
      id: 'ON THE WAY',
      value: 'ON THE WAY'
    },
    {
      id: 'PREPARING',
      value: 'PREPARING'
    }]

  return (
    <div>
      <Form onSubmit={onSubmitOrder}
            initialValues={{state: 'PREPARING', deiveryType: 'IN-CONTACT' }}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="number"
                      component="input"
                      placeholder="Order number"
                      label="Number:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name="deliveryDateTime"
                      component="input"
                      label="Delivery Date"
                      value="2021-12-03"
                    />
                  </div>
                  <div>
                    <Field
                      name="address"
                      component="input"
                      label="Customer Address:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name="deliverer"
                      component="input"
                      label="Deliverer Id:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name="state"
                      component={Select}
                      label="States:"
                      options={states}
                    />
                  </div>
                  <div>
                    <Field
                      name="customerName"
                      component="input"
                      label="Customer Name:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name="customerPhone"
                      component="input"
                      label="Customer Phone:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Field
                      name="deliveryType"
                      component={Select}
                      label="Delivery type:"
                      options={deliveryTypes}
                    />
                  </div>
                 <div>
                    <Field
                      type="number"
                      name="amount"
                      component="input"
                      label="Amount:"
                      validate={required}
                    />
                  </div>
                  <div>
                    <Button disabled={submitting || pristine} primary btnLabel="Submit" type="submit" />
                    <Button disabled={submitting || pristine} btnLabel="Reset" onClick={form.reset} type="button" />
                  </div>
                </form>
                )}
            />
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addOrder: addOrderAction,
    closeModal: closeModalAction
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(OrderForm)
