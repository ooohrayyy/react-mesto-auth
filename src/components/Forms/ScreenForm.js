import React from 'react';
import { Link } from 'react-router-dom';

import Input from './Input.js';
import InfoPopup from '../Popups/InfoPopup.js';

function ScreenForm (props) {
  // * Стейт-переменные

  const [email, setEmail] = React.useState(''); // Email пользователя
  const [password, setPassword] = React.useState(''); // Пароль пользователя

  const [formValidity, setFormValidity] = React.useState(false); // Состояние валидности формы
  const [emailValidity, setEmailValidity] = React.useState(true); // Состояние валидности инпута с именем
  const [passwordValidity, setPasswordValidity] = React.useState(true); // Состояние валидности инпута с описанием

  // * Переменные

  const headingText = (props.form === 'register') ? 'Регистрация' : 'Вход';
  const buttonText = (props.form === 'register') ? 'Зарегистрироваться' : 'Войти';

  // * Функции

  // -- Обработчики формы

  function handleEmailChange (evt) { // Изменение адреса почты
    setEmail(evt.target.value);
  }

  function handlePasswordChange (evt) { // Изменение пароля
    setPassword(evt.target.value);
  }

  function handleChange (evt) { // Изменение валидности формы
    setFormValidity(evt.currentTarget.checkValidity());
  }

  function handleSubmit (evt) { // Сабмит формы
    evt.preventDefault();

    props.onSubmit({
      password,
      email
    });
  }

  // * Возвращаемое значение

  return (
    <>
      <form className="form form_place_screen" noValidate onChange={handleChange} onSubmit={handleSubmit}>
        <h1 className="form__heading form__heading_place_screen">{headingText}</h1>
        <Input
          inputModifier="input_place_screen"
          inputName="login_email"
          inputValue={email}
          inputType="email"
          inputPlaceholder="Email"
          inputValidityState={emailValidity}
          onInputValidityChange={setEmailValidity}
          onValueChange={handleEmailChange}
        />
        <Input
          inputModifier="input_place_screen"
          inputName="login_password"
          inputValue={password}
          inputType="password"
          inputPlaceholder="Пароль"
          inputMinLength="6"
          inputValidityState={passwordValidity}
          onInputValidityChange={setPasswordValidity}
          onValueChange={handlePasswordChange}
        />
        <button className="form__button button button_place_screen" type="submit" disabled={!formValidity}>{buttonText}</button>
      </form>
      {(props.form === 'register') &&
      (<Link className="container__sign-in" to="./sign-in">Уже зарегистрировались? Войти</Link>)}
      <InfoPopup
        state={props.infoPopupState}
        onClose={props.onPopupClose}
      />
    </>
  );
}

export default ScreenForm;