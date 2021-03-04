class Auth {
  constructor (options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponseData (res) { // Проверка ответа от сервера
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register (data) { // Регистрация пользователя
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    })
    .then(res => this._checkResponseData(res));
  }

  authorize (data) { // Авторизация пользователя
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    })
    .then(res => this._checkResponseData(res));
  }

  checkCredentials (token) { // Проверка токена
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => this._checkResponseData(res));
  }
}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co'
});

export default auth;