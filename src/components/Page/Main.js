import React from 'react';

import Header from './Header.js';
import Card from './Card.js';
import Footer from './Footer.js';
import MainPopups from '../Popups/MainPopups.js';

import avatarLoader from '../../resources/images/svgs/avatar-loader.svg';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Main (props) {
  const userInfo = React.useContext(CurrentUserContext); // * Подписка на контекст

  const { // * Пропсы из App
    cards,
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    onCardDelete,
    onCardLike
  } = props.mainProps;

  // * Возвращаемое значение

  return (
    <>
      <div className="container root__container">
        <Header place="main" userEmail={props.userEmail} onLogout={props.onLogout} />
        <main className="main container__main">
          <section className="profile main__profile">
            <div className="profile__main">
              <img className="profile__avatar" src={userInfo.avatar || avatarLoader} alt="Портрет пользователя" />
              <button className="profile__avatar-button" onClick={onEditAvatar} />
              <div className="profile__text-info">
                <h1 className="profile__name">{userInfo.name || 'Загрузка...'}</h1>
                <button className="profile__edit" type="button" onClick={onEditProfile} />
                <p className="profile__description">{userInfo.about || 'Пожалуйста, подождите'}</p>
              </div>
            </div>
            <button className="profile__add" type="button" onClick={onAddPlace} />
          </section>
          <section className="cards main__cards">
            {cards.map((item) => (
              <Card
                item={item}
                key={item._id}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
                onCardLike={onCardLike}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
      <MainPopups popupProps={props.popupProps} />
    </>
  );
}

export default Main;