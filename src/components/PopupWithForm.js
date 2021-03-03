import React from 'react';

import PopupMessage from './PopupMessage.js';
import usePopupListeners from '../utils/usePopupListeners.js';

function PopupWithForm (props) {
  
  // * Обработчики формы

  function handleChange (evt) { // Изменение валидности формы
    props.onFormValidityChange(evt.currentTarget.checkValidity());
  }

  function handleRefresh () { // Перезагрузка страницы (при ошибке запроса)
    window.location.reload();
  }

  usePopupListeners(props); // * Хук слушателей для попапа

  // * Возвращаемое значение

  return (
    <div className={`popup popup-${props.name} root__popup ${props.state.open ? 'popup_opened' : ''}`}>
        <form className="form form_place_popup" name={props.name} noValidate onChange={handleChange} onSubmit={props.onSubmit}>
          {(!props.state.loading && !props.state.failed) && (<button className="close-btn close-btn_place_form" type="button" onClick={props.onClose} />)}
          {props.state.failed && (<button className="form__refresh" type="button" onClick={handleRefresh} />)}
          <h2
            className={`form__heading ${(props.name === 'delete') ? 'form__heading_place_delete' : ''}`}
          >
            {props.heading}
          </h2>
          {(!props.state.loading && !props.state.failed) && props.children}
          {(!props.state.loading && !props.state.failed) && (<button
            className={`form__button button ${(props.name === 'delete') ? 'button_place_delete' : ''}`}
            type="submit"
            disabled={!props.formValidityState}
          >
            {(props.name === 'delete') ? 'Удалить' : 'Сохранить'}
          </button>)}
          {(props.state.loading || props.state.failed) && (<PopupMessage name={props.name} state={props.state} message={props.message} />)}
        </form>
    </div>
  );
}

export default PopupWithForm;