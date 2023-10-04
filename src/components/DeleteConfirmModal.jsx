import React from 'react';
import ModalWithForm from './ModalWithForm'

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
  return (
    <ModalWithForm
      title='Вы уверены?'
      name='confirm'
      btnText='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onConfirm}
    ></ModalWithForm>
  );
}
