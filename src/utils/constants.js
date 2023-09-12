// // Profile search
// const profileInfo = document.querySelector('.profile');

// // Modal windows search
// const modalProfileEdit = document.querySelector('.modal_type_profile-edit');
// const modalAvatarEdit = document.querySelector('.modal_type_avatar-update');
// const modalCardAdd = document.querySelector('.modal_type_card-add');
// const modalConfirm = document.querySelector('.modal_type_confirm');

// // Modals open buttons search
// const btnProfileEdit = profileInfo.querySelector('.profile__edit');
// const btnCardAdd = profileInfo.querySelector('.profile__add-btn');
// const avatarEdit = profileInfo.querySelector('.profile__avatar-wrap');
// const btnDeleteConfirm = modalConfirm.querySelector('.form__button');

// // Profile edit form search
// const formProfileEdit = modalProfileEdit.querySelector('.form');
// const formProfileEditUsername = formProfileEdit.querySelector('.form__text-input_data_username');
// const formProfileEditAbout = formProfileEdit.querySelector('.form__text-input_data_about');

// // Avatar edit form search
// const formAvatarEdit = modalAvatarEdit.querySelector('.form');
// const formAvatarEditLink = formAvatarEdit.querySelector('.form__text-input_data_avatar-url');

// // Card add form search
// const formCardAdd = modalCardAdd.querySelector('.form');
// const formCardAddImgTitle = formCardAdd.querySelector('.form__text-input_data_img-title');

const CONFIG = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  modalCardAddSelector: '.modal_type_card-add',
  modalImageSelector: '.modal_type_image',
  modalConfirmSelector: '.modal_type_confirm',
  modalProfileEditSelector: '.modal_type_profile-edit',
  modalAvatarEditSelector: '.modal_type_avatar-update',
  profileUsernameSelector: '.profile__username',
  profileAboutSelector: '.profile__about',
  profileAvatarSelector: '.profile__avatar-img',
  cardTemplateSelector: '#element-template',
  cardListSelector: '.elements',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__text-input_type_error',
  errorClass: 'form__input-error_visible',
  apiConfig: {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-74',
    headers: {
      authorization: 'f79f0cff-136a-4085-9856-94d44d998acc',
      'Content-Type': 'application/json'
    }
  }
};

export {
  // modalProfileEdit,
  // modalAvatarEdit,
  // modalCardAdd,
  // modalConfirm,
  // btnDeleteConfirm,
  // btnProfileEdit,
  // btnCardAdd,
  // avatarEdit,
  // formProfileEdit,
  // formProfileEditUsername,
  // formProfileEditAbout,
  // formAvatarEdit,
  // formAvatarEditLink,
  // formCardAdd,
  // formCardAddImgTitle,
  CONFIG as config
};
