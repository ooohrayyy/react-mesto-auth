import logo from '../resources/images/svgs/logo.svg';

function Header (props) {
  return (
    <header className="container__header header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      {!props.loggedIn && (<a className="header__register" href="#">Регистрация</a>)}
    </header>
  );
}

export default Header;