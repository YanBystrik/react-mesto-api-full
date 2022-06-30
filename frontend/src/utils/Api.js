class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok){
      return res.json();
    } else {
      throw new Error(`Response is not OK with code ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse);
  }

  updateUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
    .then(this._checkResponse);
  }

  updateCards(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(this._baseUrl + `/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: avatar.avatar,
      }),
    })
    .then(this._checkResponse);
  }

  like(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse);
  }

  likeDelete(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.mesto.yanbyst.nomoreparties.sbs",
  headers : {
    // authorization: "8999a51c-1ed0-4ed4-a807-902250d23524",
    "Content-Type": "application/json",
  }
}
);

export { api };
