import React from "react";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content page__content wrapper">
      <section className="profile">
        <div className="profile__wrap">
          <div className="profile__avatar-wrap" onClick={onEditAvatar}>
            <img className="profile__avatar-img" src="#" alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrap">
              <h1 className="profile__username"></h1>
              <button
                type="button"
                className="profile__edit"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__about"></p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          aria-label="Добавить пост"
          onClick={onAddPlace}
        ></button>
      </section>

      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}
