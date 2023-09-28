import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from './CurrentUserContext'
import ModalWithForm from './ModalWithForm';

export default function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <ModalWithForm
      title='Редактировать профиль'
      name='profile-edit'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id='name'
        className='form__text-input form__text-input_data_username'
        type='text'
        name='name'
        minLength='2'
        maxLength='40'
        placeholder='Имя'
        value={name}
        onChange={e => setName(e.target.value)}
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
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <span className='form__input-error about-error'></span>
    </ModalWithForm>
  );
}
