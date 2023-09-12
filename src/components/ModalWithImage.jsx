import React from 'react'

export default function ModalWithImage() {
  return (
    <div className="modal modal_type_image">
      <div className="modal__content modal__content_type_image">
        <figure className="modal__image-wrap">
          <img src="#" alt="" className="modal__image" />
          <figcaption className="modal__image-title"></figcaption>
        </figure>
        <button type="button" className="modal__close"></button>
      </div>
    </div>
  );
}
