import React from 'react';

import Input from './Input.js';

function Login () {
  // * Стейт-переменные

  const [email, setEmail] = React.useState(''); // Email пользователя
  const [password, setPassword] = React.useState(''); // Пароль пользователя

  const [formValidity, setFormValidity] = React.useState(false); // Состояние валидности формы
  const [emailValidity, setEmailValidity] = React.useState(true); // Состояние валидности инпута с именем
  const [passwordValidity, setPasswordValidity] = React.useState(true); // Состояние валидности инпута с описанием

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

  // * Возвращаемое значение

  return (
    <form className="form form_place_screen" noValidate onChange={handleChange}>
      <h1 className="form__heading form__heading_place_screen">Вход</h1>
      <Input
        inputModifier="input_login_email form__input_place_screen input_place_screen"
        inputName="login_email"
        inputValue={email}
        inputType="email"
        inputPlaceholder="Email"
        inputMaxLength="40"
        inputValidityState={emailValidity}
        onInputValidityChange={setEmailValidity}
        onValueChange={handleEmailChange}
      />
      <Input inputType="password"
        inputModifier="input_login_password form__input_place_screen input_place_screen"
        inputName="login_password"
        inputValue={password}
        inputType="password"
        inputPlaceholder="Пароль"
        inputMinLength="6"
        inputMaxLength="40"
        inputValidityState={passwordValidity}
        onInputValidityChange={setPasswordValidity}
        onValueChange={handlePasswordChange}
      />
      <button className="form__button button button_place_screen" type="submit" disabled={!formValidity}>Войти</button>
    </form>
  );
}

export default Login;