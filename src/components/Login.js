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

  return (
    <form className="form" noValidate onChange={handleChange}>
      <Input
        inputModifier="input_login_email"
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
        inputModifier="input_login_password"
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
      <button className="form__button button" type="submit" disabled={!formValidity}>Войти</button>
    </form>
  );
}

export default Login;