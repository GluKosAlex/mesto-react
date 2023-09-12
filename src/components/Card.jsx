import React from 'react';

export default function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }

  const { likes, name, link } = cardData;

  return (
    <li className='element'>
      <img src={link} alt='' className='element__image' onClick={handleClick} />
      <div className='element__caption'>
        <h2 className='element__title'>{name}</h2>
        <div className='element__like-wrap'>
          <button
            type='button'
            className='element__like-button'
            aria-label='Отметить как понравившееся'
          ></button>
          <span className='element__like-count'>{likes.length}</span>
        </div>
      </div>
      <button type='button' className='element__delete' aria-label='Удалить пост'></button>
    </li>
  );
}
