import {bindActionCreators} from "redux";
import MaterialModal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import { connect} from "react-redux";
import { bindActionCreators } from 'redux'
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../constants/modalTypes";

import OrderForm from "../../Orders/OrderForm/OrderForm";
import {useState} from "react";

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top})`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: thene.shadows[5],
    outline: 0
  }
}))

const Modal = ({
  show,
  modalType,
  meta,
  closeModal
}) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  let modalComponent
  switch (modalTypes) {
    case modalTypes.ADD_ORDER:
      modalComponent = <OrderForm />
      break
    case modalTypes.DELETE_ORDER:
      modalComponent = <RemoveOrderMessage orderId={meta.id} />
      break
    default:
      modalComponent = null
      break
  }

  return (
    <MaterialModal
      open={show}
      closeModal={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalSyle} className={classes.paper}>
        {modalComponent}
      </div>
    </MaterialModal>
  )
}

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({closeModal: closeModalAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
