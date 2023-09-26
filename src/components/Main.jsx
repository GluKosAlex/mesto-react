import { React, useState, useEffect, useContext } from 'react';
import api from './../utils/api';
import Card from './Card';
import { CurrentUserContext } from './CurrentUserContext';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const { name, about, avatar } = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then(cardsData => {
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className='content page__content wrapper'>
      <section className='profile'>
        <div className='profile__wrap'>
          <div className='profile__avatar-wrap' onClick={onEditAvatar}>
            <img className='profile__avatar-img' src={avatar} alt='Аватарка' />
          </div>
          <div className='profile__info'>
            <div className='profile__name-wrap'>
              <h1 className='profile__username'>{name}</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Редактировать профиль'
                onClick={onEditProfile}
              ></button>
            </div>
            <p className='profile__about'>{about}</p>
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
            return <Card key={item._id} cardData={item} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}
