import types from './modalActionTypes';

const openModal = id => ({
  type: types.OPEN_MODAL,
  payload: id,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export default { openModal, closeModal };
