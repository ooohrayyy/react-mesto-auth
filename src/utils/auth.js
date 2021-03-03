class Auth {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._token = options.authorization;
  }

  _checkResponseData (res) { // Проверка ответа от сервера
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}