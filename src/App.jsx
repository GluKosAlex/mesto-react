import logo from './images/logo.svg';

function App() {
  return (
    <body class="page">
      <div class="page__wrapper">
        <header class="header wrapper">
          <img
            class="header__logo"
            src={logo}
            alt="Логотип сайта Mesto Russia"
          />
        </header>

        <main class="content page__content wrapper">
          <section class="profile">
            <div class="profile__wrap">
              <div class="profile__avatar-wrap">
                <img class="profile__avatar-img" src="#" alt="Аватарка" />
              </div>
              <div class="profile__info">
                <div class="profile__name-wrap">
                  <h1 class="profile__username"></h1>
                  <button
                    type="button"
                    class="profile__edit"
                    aria-label="Редактировать профиль"
                  ></button>
                </div>
                <p class="profile__about"></p>
              </div>
            </div>
            <button
              type="button"
              class="profile__add-btn"
              aria-label="Добавить пост"
            ></button>
          </section>

          <section>
            <ul class="elements"></ul>
          </section>
        </main>

        <footer class="footer page__footer wrapper">
          <a
            href="https://glukosalex.ru"
            class="footer__copyright"
            target="_blank"
          >
            © 2023. Глушенков&nbsp;Константин
          </a>
        </footer>

        <div class="modal modal_type_profile-edit">
          <div class="modal__content modal__content_type_form">
            <h2 class="modal__title">Редактировать профиль</h2>
            <form
              class="form"
              action="#"
              name="profile-edit-form"
              method="post"
              novalidate
            >
              <input
                id="name"
                class="form__text-input form__text-input_data_username"
                type="text"
                name="name"
                minlength="2"
                maxlength="40"
                placeholder="Имя"
                required
              />
              <span class="form__input-error name-error"></span>
              <input
                id="about"
                class="form__text-input form__text-input_data_about"
                type="text"
                name="about"
                minlength="2"
                maxlength="200"
                placeholder="О себе"
                required
              />
              <span class="form__input-error about-error"></span>
              <button class="form__button" type="submit">
                Сохранить
              </button>
            </form>
            <button type="button" class="modal__close"></button>
          </div>
        </div>

        <div class="modal modal_type_avatar-update">
          <div class="modal__content modal__content_type_form">
            <h2 class="modal__title">Обновить аватар</h2>
            <form
              class="form"
              action="#"
              name="profile-edit-form"
              method="post"
              novalidate
            >
              <input
                id="avatar-url"
                class="form__text-input form__text-input_data_avatar-url"
                type="url"
                name="avatar-url"
                placeholder="Ссылка на аватар"
                required
              />
              <span class="form__input-error avatar-url-error"></span>
              <button class="form__button" type="submit">
                Сохранить
              </button>
            </form>
            <button type="button" class="modal__close"></button>
          </div>
        </div>

        <div class="modal modal_type_card-add">
          <div class="modal__content modal__content_type_form">
            <h2 class="modal__title">Новое место</h2>
            <form
              class="form"
              action="#"
              name="card-add-form"
              method="post"
              novalidate
            >
              <input
                id="img-title"
                class="form__text-input form__text-input_data_img-title"
                type="text"
                name="img-title"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="form__input-error img-title-error"></span>
              <input
                id="img-url"
                class="form__text-input form__text-input_data_img-url"
                type="url"
                name="img-url"
                placeholder="Ссылка на картинку"
                required
              />
              <span class="form__input-error img-url-error"></span>
              <button class="form__button" type="submit">
                Создать
              </button>
            </form>
            <button type="button" class="modal__close"></button>
          </div>
        </div>

        <div class="modal modal_type_image">
          <div class="modal__content modal__content_type_image">
            <figure class="modal__image-wrap">
              <img src="#" alt="" class="modal__image" />
              <figcaption class="modal__image-title"></figcaption>
            </figure>
            <button type="button" class="modal__close"></button>
          </div>
        </div>

        <div class="modal modal_type_confirm">
          <div class="modal__content modal__content_type_form">
            <h2 class="modal__title">Вы уверены?</h2>
            <form
              class="form"
              action="#"
              name="confirm-form"
              method="post"
              novalidate
            >
              <button class="form__button" type="submit">
                Да
              </button>
            </form>
            <button type="button" class="modal__close"></button>
          </div>
        </div>

        <template id="element-template">
          <li class="element">
            <img src="#" alt="" class="element__image" />
            <div class="element__caption">
              <h2 class="element__title"></h2>
              <div class="element__like-wrap">
                <button
                  type="button"
                  class="element__like-button"
                  aria-label="Отметить как понравившееся"
                ></button>
                <span class="element__like-count">0</span>
              </div>
            </div>
            <button
              type="button"
              class="element__delete"
              aria-label="Удалить пост"
            ></button>
          </li>
        </template>
      </div>
    </body>
  );
}

export default App;
