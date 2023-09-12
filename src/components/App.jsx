import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <Main />

      <Footer />

      <div className="modal modal_type_profile-edit">
        <div className="modal__content modal__content_type_form">
          <h2 className="modal__title">Редактировать профиль</h2>
          <form
            className="form"
            action="#"
            name="profile-edit-form"
            method="post"
            noValidate
          >
            <input
              id="name"
              className="form__text-input form__text-input_data_username"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
            <span className="form__input-error name-error"></span>
            <input
              id="about"
              className="form__text-input form__text-input_data_about"
              type="text"
              name="about"
              minLength="2"
              maxLength="200"
              placeholder="О себе"
              required
            />
            <span className="form__input-error about-error"></span>
            <button className="form__button" type="submit">
              Сохранить
            </button>
          </form>
          <button type="button" className="modal__close"></button>
        </div>
      </div>

      <div className="modal modal_type_avatar-update">
        <div className="modal__content modal__content_type_form">
          <h2 className="modal__title">Обновить аватар</h2>
          <form
            className="form"
            action="#"
            name="profile-edit-form"
            method="post"
            noValidate
          >
            <input
              id="avatar-url"
              className="form__text-input form__text-input_data_avatar-url"
              type="url"
              name="avatar-url"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="form__input-error avatar-url-error"></span>
            <button className="form__button" type="submit">
              Сохранить
            </button>
          </form>
          <button type="button" className="modal__close"></button>
        </div>
      </div>

      <div className="modal modal_type_card-add">
        <div className="modal__content modal__content_type_form">
          <h2 className="modal__title">Новое место</h2>
          <form
            className="form"
            action="#"
            name="card-add-form"
            method="post"
            noValidate
          >
            <input
              id="img-title"
              className="form__text-input form__text-input_data_img-title"
              type="text"
              name="img-title"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error img-title-error"></span>
            <input
              id="img-url"
              className="form__text-input form__text-input_data_img-url"
              type="url"
              name="img-url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error img-url-error"></span>
            <button className="form__button" type="submit">
              Создать
            </button>
          </form>
          <button type="button" className="modal__close"></button>
        </div>
      </div>

      <div className="modal modal_type_image">
        <div className="modal__content modal__content_type_image">
          <figure className="modal__image-wrap">
            <img src="#" alt="" className="modal__image" />
            <figcaption className="modal__image-title"></figcaption>
          </figure>
          <button type="button" className="modal__close"></button>
        </div>
      </div>

      <div className="modal modal_type_confirm">
        <div className="modal__content modal__content_type_form">
          <h2 className="modal__title">Вы уверены?</h2>
          <form
            className="form"
            action="#"
            name="confirm-form"
            method="post"
            noValidate
          >
            <button className="form__button" type="submit">
              Да
            </button>
          </form>
          <button type="button" className="modal__close"></button>
        </div>
      </div>

      <template id="element-template">
        <li className="element">
          <img src="#" alt="" className="element__image" />
          <div className="element__caption">
            <h2 className="element__title"></h2>
            <div className="element__like-wrap">
              <button
                type="button"
                className="element__like-button"
                aria-label="Отметить как понравившееся"
              ></button>
              <span className="element__like-count">0</span>
            </div>
          </div>
          <button
            type="button"
            className="element__delete"
            aria-label="Удалить пост"
          ></button>
        </li>
      </template>
    </>
  );
}

export default App;
