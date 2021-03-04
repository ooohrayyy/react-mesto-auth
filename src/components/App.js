import React from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import auth from '../utils/auth.js';
import api from '../utils/api.js';

import ProtectedRoute from './ProtectedRoute.js';
import Login from './Page/Login.js';
import Register from './Page/Register.js';
import Main from './Page/Main.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

// ! Привет команде код-ревью! Работа оказалась неожиданно масштабной — многое пришлось переписывать.
// ! Кажется, всё работает :)

function App () {
  // * Стейт-переменные

  // -- Общие состояния

  const [loggedIn, setLoggedIn] = React.useState(false); // Статус пользователя в системе
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' }); // Активный пользователь
  const [userEmail, setUserEmail] = React.useState(''); // E-mail пользователя
  const [cards, setCards] = React.useState([]); // Массив карточек
  const [selectedCard, setSelectedCard] = React.useState({}); // Выбранная карточка

  const history = useHistory();

  // -- Состояния попапов

  const [infoPopupState, setInfoPopupState] = React.useState({ // Состояние попапа входа и регистрации
    open: false,
    success: false,
    loading: false,
    failed: false,
    message: null
  });

  const [editAvatarState, setEditAvatarState] = React.useState({ // Состояние попапа «Редактировать аватар»
    open: false,
    loading: false,
    failed: false,
    message: null
  });

  const [editProfileState, setEditProfileState] = React.useState({ // Состояние попапа «Редактировать профиль»
    open: false,
    loading: false,
    failed: false,
    message: null
  });

  const [addPlaceState, setAddPlaceState] = React.useState({ // Состояние попапа «Добавить карточку»
    open: false,
    loading: false,
    failed: false,
    message: null
  });

  const [confirmDeleteState, setConfirmDeleteState] = React.useState({ // Состояние попапа с подтверждением удаления
    open: false,
    loading: false,
    failed: false,
    message: null
  });

  const [imagePopupState, setImagePopupState] = React.useState({ // Состояние попапа с полноразмерной картинкой
    open: false,
    loading: false,
    failed: false,
    message: null
  });

  // * Функции

  // -- Функции вызова попапов

  function handleEditAvatarClick () { // Вызов попапа «Редактировать аватар»
    setEditAvatarState({ ...editAvatarState, open: true });
  }

  function handleEditProfileClick () { // Вызов попапа «Редактировать профиль»
    setEditProfileState({ ...editProfileState, open: true });
  }

  function handleAddPlaceClick () { // Вызов попапа «Добавить карточку»
    setAddPlaceState({ ...addPlaceState, open: true });
  }

  function handleDeleteCardClick () { // Вызов попапа с подтверждением удаления
    setSelectedCard(this.item);
    setConfirmDeleteState({ ...confirmDeleteState, open: true });
  }

  function handleCardClick () { // Вызов попапа с полноразмерной картинкой
    setSelectedCard(this.item);
    setImagePopupState({ ...imagePopupState, open: true });
  }

  // -- Обработчики запросов

  function handleRegister (data) { // Регистрация пользователя
    setInfoPopupState({ ...infoPopupState, open: true, loading: true });

    auth.register(data)
      .then(() => {
        setInfoPopupState({
          ...infoPopupState,
          open: true,
          loading: false,
          success: true,
          message: 'Вы успешно зарегистрировались!'
        });
        setTimeout(() => {
          setInfoPopupState({
            ...infoPopupState,
            open: false,
            success: false,
            message: ''
          });
        }, 1800);
      })
      .catch(err => {
        setInfoPopupState({
          ...infoPopupState,
          open: true,
          success: false,
          loading: false,
          failed: true,
          message: 'Что-то пошло не так! Попробуйте ещё раз'
        });
        console.log(err);
      });
  }

  function handleLogin (data) { // Авторизация пользователя
    setInfoPopupState({ ...infoPopupState, open: true, loading: true });

    auth.authorize(data)
      .then(res => {
        setInfoPopupState({
          ...infoPopupState,
          open: true,
          loading: false,
          success: true,
          message: 'Вы успешно авторизовались!'
        });
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setUserEmail(data.email);
        setTimeout(() => {
          history.push('./main');
          setInfoPopupState({
            ...infoPopupState,
            open: false,
            success: false,
            message: ''
          });
        }, 1800);
      })
      .catch(err => {
        console.log(err);
        setInfoPopupState({
          ...infoPopupState,
          open: true,
          success: false,
          loading: false,
          failed: true,
          message: 'Что-то пошло не так! Попробуйте ещё раз'
        });
      });
  }

  function handleSignOut () { // Деавторизация пользователя
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserEmail('');
    history.push('./sign-in');
  }

  function handleUpdateAvatar (link) { // Обновление аватарки
    setEditAvatarState({ ...editAvatarState, loading: true });

    api.updateAvatar(link)
      .then(res => {
        setCurrentUser(res);
        setTimeout(() => {
          setEditAvatarState({ ...editAvatarState, open: false, loading: false });
        }, 400);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
        setEditAvatarState({
          ...editAvatarState,
          loading: false,
          failed: true,
          message: err
        });
      });
  }

  function handleUpdateUser (values) { // Обновление информации о пользователе
    setEditProfileState({ ...editProfileState, loading: true });

    api.patchUserInfo(values)
      .then(res => {
        setCurrentUser(res);
        setTimeout(() => {
          setEditProfileState({ ...editProfileState, open: false, loading: false });
        }, 400);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
        setEditProfileState({
          ...editProfileState,
          loading: false,
          failed: true,
          message: err
        });
      });
  }

  function handleAddPlaceSubmit (data) { // Добавление новой карточки
    setAddPlaceState({ ...addPlaceState, loading: true });

    api.postCard(data)
      .then(res => {
        setCards([res, ...cards]);
        setTimeout(() => {
          setAddPlaceState({ ...addPlaceState, open: false, loading: false });
        }, 400);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
        setAddPlaceState({
          ...addPlaceState,
          loading: false,
          failed: true,
          message: err
        });
      });
  }

  function handleCardDelete (card) { // Удаление карточки
    setConfirmDeleteState({ ...confirmDeleteState, loading: true });

    api.deleteCard(card._id)
      .then(deletedCard => {
        const newCards = cards.filter(deletedCard => deletedCard._id !== card._id);
        setCards(newCards);
        setTimeout(() => {
          setConfirmDeleteState({ ...confirmDeleteState, open: false, loading: false });
        }, 400);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
        setConfirmDeleteState({
          ...confirmDeleteState,
          loading: false,
          failed: true,
          message: err
        });
      });
  }

  function handleCardLike (card) { // Установка и снятие лайка
    api.toggleLike(card._id, card.isLiked)
      .then(newCard => {
        const newCards = cards.map(item => item._id === card._id ? newCard : item);
        setCards(newCards);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // -- Другие функции
  
  function closeAllPopups () { // Закрытие всех попапов и обнуление выбранной карточки
    setInfoPopupState({ ...infoPopupState, open: false });
    setEditAvatarState({ ...editAvatarState, open: false });
    setEditProfileState({ ...editProfileState, open: false });
    setAddPlaceState({ ...addPlaceState, open: false });
    setConfirmDeleteState({ ...confirmDeleteState, open: false });
    setImagePopupState({ ...imagePopupState, open: false });

    setSelectedCard(null);
  }

  // * Объекты пропсов

  const mainProps = { // Пропсы для главного экрана
    cards,
    onSignOut: handleSignOut,
    onEditAvatar: handleEditAvatarClick,
    onEditProfile: handleEditProfileClick,
    onAddPlace: handleAddPlaceClick,
    onCardClick: handleCardClick,
    onCardDelete: handleDeleteCardClick,
    onCardLike: handleCardLike
  }

  const popupProps = { // Пропсы для главных попапов
    selectedCard,
    editProfileState,
    editAvatarState,
    addPlaceState,
    confirmDeleteState,
    imagePopupState,
    onUpdateUser: handleUpdateUser,
    onUpdateAvatar: handleUpdateAvatar,
    onAddPlaceSubmit: handleAddPlaceSubmit,
    onDeleteConfirmation: handleCardDelete,
    onClose: closeAllPopups
  }

  // * Эффекты при монтировании компонента

  // -- Запросы к серверу

  React.useEffect(() => { // Проверка токена
    if (localStorage.jwt) {
      auth.checkCredentials(localStorage.jwt)
        .then((res) => {
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push('./main');
        })
        .catch(err => console.log(err));
    }
  }, [history]);

  React.useEffect(() => { // Получение данных о пользователе
    api.fetchUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => { // Получение карточек
    api.fetchInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, []);

  // * Возвращаемое значение

  return (
    <HashRouter basename="/">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path="/sign-in">
            <Login
              userEmail={userEmail}
              onLogin={handleLogin}
              infoPopupState={infoPopupState}
              onPopupClose={closeAllPopups}
            />
          </Route>
          <Route path="/sign-up">
            <Register
              userEmail={userEmail}
              onRegister={handleRegister}
              infoPopupState={infoPopupState}
              onPopupClose={closeAllPopups}
            />
          </Route>
          <ProtectedRoute
            path="/"
            component={Main}
            loggedIn={loggedIn}
            userEmail={userEmail}
            mainProps={mainProps}
            popupProps={popupProps}
          />
        </Switch>
      </CurrentUserContext.Provider>
    </HashRouter>
  );
}

export default App;