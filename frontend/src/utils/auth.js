export const BASE_URL = 'https://api.mesto.yanbyst.nomoreparties.sbs';

const checkResponse = (res) => {
  if(res.ok){
    return res.json();
  } else {
    throw new Error(`Response is not OK with code ${res.status}`);
  }
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(checkResponse)
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
  .then(data => data)
}
