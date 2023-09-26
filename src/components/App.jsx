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
import EditProfileModal from './EditProfileModal';
import EditAvatarModal from './EditAvatarModal';

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

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(res => {
        setCards(cards => cards.filter(c => c._id !== card._id));
        console.log(res.message);
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllModals())
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(newAvatar) {
    api
      .setUserAvatar(newAvatar)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllModals())
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
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={closeAllModals}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarModal
          isOpen={isEditAvatarModalOpen}
          onClose={closeAllModals}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
