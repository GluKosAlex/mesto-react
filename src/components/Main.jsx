import React from "react";

export default function Main() {

  function handleEditAvatarClick() {
    const modalProfileEdit = document.querySelector(".modal_type_profile-edit");
    modalProfileEdit.classList.add("modal_opened");
  }

  function handleEditProfileClick() {
    const modalAvatarEdit = document.querySelector(".modal_type_avatar-update");
    modalAvatarEdit.classList.add("modal_opened");
  }

  function handleAddPlaceClick() {
    const modalCardAdd = document.querySelector(".modal_type_card-add");
    modalCardAdd.classList.add("modal_opened");
  }

  return (
    <main className="content page__content wrapper">
      <section className="profile">
        <div className="profile__wrap">
          <div className="profile__avatar-wrap" onClick={handleEditAvatarClick}>
            <img className="profile__avatar-img" src="#" alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrap">
              <h1 className="profile__username"></h1>
              <button
                type="button"
                className="profile__edit"
                aria-label="Редактировать профиль"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__about"></p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          aria-label="Добавить пост"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}
