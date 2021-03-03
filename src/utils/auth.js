class Auth {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    // this._token = options.authorization;
  }

  _checkResponseData (res) { // Проверка ответа от сервера
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register (data) {
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
    .then(res => this._checkResponseData(res))
    .catch(err => console.log(err));
  }

  authorize (data) {
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
    .then(res => this._checkResponseData(res))
    .catch(err => console.log(err));
  }

  getEmail (jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(res => this._checkResponseData(res))
    .catch(err => console.log(err));
  }
}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co'
});

export default auth;