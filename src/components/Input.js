import React from 'react';

function Input (props) {
  const [errorMessage, setErrorMessage] = React.useState(''); // * Стейт-переменная сообщения об ошибке

  function handleChange (evt) { // * Обработчик изменения значения инпута
    props.onValueChange(evt);
    props.onInputValidityChange(evt.target.validity.valid);
    setErrorMessage(evt.target.validationMessage);
  }

  // * Возвращаемое значение

  return (
    <>
      <input
        className={`form__input input ${props.inputModifier} ${(!props.inputValidityState ? 'input_invalid' : '')}`}
        type={props.inputType}
        name={props.inputName}
        value={props.inputValue}
        placeholder={props.inputPlaceholder}
        minLength={props.inputMinLength || '2'} maxLength={props.inputMaxLength}
        autoComplete="off"
        required
        onChange={handleChange}
      />
      {!props.inputValidityState && (<span className="input__error">{errorMessage}</span>)}
    </>
  );
}

export default Input;