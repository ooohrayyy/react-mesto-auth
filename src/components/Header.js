import React from 'react';

import logo from '../resources/images/svgs/logo.svg';

function Header () {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function toggleMenu () {
    setMenuIsOpen(!menuIsOpen);
  }

  const menuButtonStyle = menuIsOpen ? 'header__menu-btn_open' : 'header__menu-btn_closed';

  let email = 'email@mail.com';

  return (
    <header className="container__header header">
      <menu className="header__menu">
        <p className="header__email">{email}</p>
        Ссылка
      </menu>
      <div className="header__body">
        <img className="header__logo" src={logo} alt="Логотип Mesto" />
        <p className="header__email">{email}</p>
        Ссылка
        <button className={menuButtonStyle} onClick={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;

// import logo from '../resources/images/svgs/logo.svg';

// function Header (props) {
//   // * Переменные

//   const registerLink = (<a className="header__register" href="/sign-up">Регистрация</a>);
//   const authorizeLink = (<a className="header__register" href="/sign-in">Войти</a>);

//   // * Возвращаемое значение

//   return (
//     <header className="container__header header">
//       <img className="header__logo" src={logo} alt="Логотип Mesto" />
//       {(props.place === 'login') && registerLink}
//       {(props.place === 'register') && authorizeLink}
//     </header>
//   );
// }

// export default Header;