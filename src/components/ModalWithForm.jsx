import React from 'react'

export default function ModalWithForm({title, name, btnText, children}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <form className="form" action="#" name={name} method="post" noValidate>
          {children}
          <button className="form__button" type="submit">
            {btnText}
          </button>
        </form>
        <button type="button" className="modal__close"></button>
      </div>
    </div>
  );
}
