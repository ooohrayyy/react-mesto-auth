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

  const link = { // Свойства ссылки
    text: (props.place === 'register') ? 'Войти' : 'Регистрация',
    url: (props.place === 'register') ? './sign-in' : './sign-up'
  }

  const menuButtonStyle = menuIsOpen ? 'header__menu-btn header__menu-btn_close' : 'header__menu-btn'; // Класс кнопки меню

  // * Возвращаемое значение

  return (
    <header className="container__header header">
      {((props.place === 'main') && menuIsOpen) && (<menu className="header__menu">
        <p className="header__email header__email_place_menu">{props.userEmail}</p>
        <button className="header__out header__out_place_menu">Выйти</button>
      </menu>)}
      <div className="header__body">
        <img className="header__logo" src={logo} alt="Логотип Mesto" />
        {(props.place === 'main') && (<p className="header__email header__email_place_body">{props.userEmail}</p>)}
        {(props.place === 'main') && (<button className="header__out header__out_place_body">Выйти</button>)}
        {(props.place === 'main') && (<button className={menuButtonStyle} onClick={toggleMenu} />)}
        {(props.place !== 'main') && (<a className="header__link" href={link.url}>{link.text}</a>)}
      </div>
    </header>
  );
}

export default Header;