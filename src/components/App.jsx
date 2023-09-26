import { React, useState, useEffect } from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import { CardsContext } from './CardsContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';
import ModalWithImage from './ModalWithImage';
import api from './../utils/api';

import avatarPlaceholder from '../images/avatar_placeholder.svg';

function App() {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    name: '...',
    about: '...',
    avatar: avatarPlaceholder,
    _id: '',
    cohort: ''
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards => cards.map(c => (c._id === card._id ? newCard : c)));
      })
      .catch(err => console.log(err));
  }

  function handleEditProfileClick() {
    setIsEditProfileModalOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceModalOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarModalOpen(true);
  }

  function handleCardClick(cardData) {
    setIsImageModalOpen(true);
    setSelectedCard(cardData);
  }

  function closeAllModals() {
    setIsEditProfileModalOpen(false);
    setIsAddPlaceModalOpen(false);
    setIsEditAvatarModalOpen(false);
    setIsImageModalOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
        />

        <Footer />

        <ModalWithForm
          title='Редактировать профиль'
          name='profile-edit'
          btnText='Сохранить'
          isOpen={isEditProfileModalOpen}
          onClose={closeAllModals}
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

        <ModalWithForm
          title='Обновить аватар'
          name='avatar-update'
          btnText='Сохранить'
          isOpen={isEditAvatarModalOpen}
          onClose={closeAllModals}
        >
          <input
            id='avatar-url'
            className='form__text-input form__text-input_data_avatar-url'
            type='url'
            name='avatar-url'
            placeholder='Ссылка на аватар'
            required
          />
          <span className='form__input-error avatar-url-error'></span>
        </ModalWithForm>

        <ModalWithForm
          title='Новое место'
          name='card-add'
          btnText='Создать'
          isOpen={isAddPlaceModalOpen}
          onClose={closeAllModals}
        >
          <input
            id='img-title'
            className='form__text-input form__text-input_data_img-title'
            type='text'
            name='img-title'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            required
          />
          <span className='form__input-error img-title-error'></span>
          <input
            id='img-url'
            className='form__text-input form__text-input_data_img-url'
            type='url'
            name='img-url'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='form__input-error img-url-error'></span>
        </ModalWithForm>

        <ModalWithForm
          title='Вы уверены?'
          name='confirm'
          btnText='Да'
          isOpen={false}
          onClose={closeAllModals}
        ></ModalWithForm>

        <ModalWithImage card={selectedCard} onClose={closeAllModals} isOpen={isImageModalOpen} />
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
