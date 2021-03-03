import logo from '../resources/images/svgs/logo.svg';

function Header (props) {
  // * Переменные

  const registerLink = (<a className="header__register" href="/sign-up">Регистрация</a>);
  const authorizeLink = (<a className="header__register" href="/sign-in">Войти</a>);

  // * Возвращаемое значение

  return (
    <header className="container__header header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      {(props.place === 'login') && registerLink}
      {(props.place === 'register') && authorizeLink}
    </header>
  );
}

export default Header;