import { React, useState, useEffect } from 'react';
import api from './../utils/api';
import Card from './Card';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, { name, about, avatar }]) => {
        console.log(cardsData);
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className='content page__content wrapper'>
      <section className='profile'>
        <div className='profile__wrap'>
          <div className='profile__avatar-wrap' onClick={onEditAvatar}>
            <img className='profile__avatar-img' src={userAvatar} alt='Аватарка' />
          </div>
          <div className='profile__info'>
            <div className='profile__name-wrap'>
              <h1 className='profile__username'>{userName}</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Редактировать профиль'
                onClick={onEditProfile}
              ></button>
            </div>
            <p className='profile__about'>{userDescription}</p>
          </div>
        </div>
        <button
          type='button'
          className='profile__add-btn'
          aria-label='Добавить пост'
          onClick={onAddPlace}
        ></button>
      </section>

      <section>
        <ul className='elements'>
          {cards.map(item => {
            return <Card cardData={item} />;
          })}
        </ul>
      </section>
    </main>
  );
}
