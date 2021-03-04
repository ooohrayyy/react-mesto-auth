import React from 'react';

import logo from '../resources/images/svgs/logo.svg';

function Header (props) {

  // * Стейт-переменные

  const [menuIsOpen, setMenuIsOpen] = React.useState(false); // Состояние меню

  // * Функции

  function toggleMenu () { // Открытие/закрытие меню
    setMenuIsOpen(!menuIsOpen);
  }

  // * Переменные

  const email = 'email@mail.com'; // E-mail пользователя

  let link = {}; // Свойства ссылки

  if (props.place === 'register') {
    link.url = './sign-in';
    link.text = 'Войти';
  } else if (props.place === 'login') {
    link.url = './sing-up';
    link.text = 'Регистрация';
  }

  const menuButtonStyle = menuIsOpen ? 'header__menu-btn header__menu-btn_close' : 'header__menu-btn'; // Класс кнопки меню

  // * Возвращаемое значение

  return (
    <header className="container__header header">
      {((props.place === 'main') && menuIsOpen) && (<menu className="header__menu">
        <p className="header__email">{email}</p>
        <button className="header__out">Выйти</button>
      </menu>)}
      <div className="header__body">
        <img className="header__logo" src={logo} alt="Логотип Mesto" />
        {(props.place === 'main') && (<p className="header__email header__email_place_body">{email}</p>)}
        {(props.place === 'main') && (<button className="header__out">Выйти</button>)}
        {(props.place === 'main') && (<button className={menuButtonStyle} onClick={toggleMenu} />)}
        {(props.place !== 'main') && (<a className="header__link" href={link.url}>{link.text}</a>)}
      </div>
    </header>
  );
}

export default Header;