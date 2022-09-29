import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, CloseButton } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { closeModal } = this;
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <img src="" alt="" />
          {children}
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
