import {
  SHOW_MODAL,
  CLOSE_MODAL
} from "../../constants/actionTypes";

export const showModal = (modalTypes, meta = {}) => {
  return {
    type: SHOW_MODAL,
    modalTypes,
    meta
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}
