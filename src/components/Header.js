import logo from '../resources/images/svgs/logo.svg';

function Header (props) {
  return (
    <header className="header container__header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      {!props.loggedIn && (<a class="header__register" href="#">Регистрация</a>)}
    </header>
  );
}

export default Header;