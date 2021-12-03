import {
  SHOW_MODAL,
  CLOSE_MODAL
} from "../../constants/actionTypes";
import {showModal} from "../actions/modalActions";

const initialState = {
  show: false,
  modalType: null,
  meta: {}
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalType: action.modalTypes,
        meta: action.meta
      }
    case CLOSE_MODAL:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}

export default todosReducer
