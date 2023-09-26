import React from 'react'
import ModalWithForm from './ModalWithForm'

export default function EditProfileModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      title='Редактировать профиль'
      name='profile-edit'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id='name'
        className='form__text-input form__text-input_data_username'
        type='text'
        name='name'
        minLength='2'
        maxLength='40'
        placeholder='Имя'
        required
      />
      <span className='form__input-error name-error'></span>
      <input
        id='about'
        className='form__text-input form__text-input_data_about'
        type='text'
        name='about'
        minLength='2'
        maxLength='200'
        placeholder='О себе'
        required
      />
      <span className='form__input-error about-error'></span>
    </ModalWithForm>
  );
}
