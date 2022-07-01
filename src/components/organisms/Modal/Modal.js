import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from './Modal.styled';
import { Button } from 'components/atoms/Button/Button';
const modalContainer = document.getElementById('modal-container');

const Modal = ({ children, handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  });

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>,
    modalNode
  );
};
Modal.propTypes = {};
export default Modal;
