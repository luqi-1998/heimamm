const KEY = 'token-heimmamm'

const saveToken = token => {
  // localStorage.setItem(KEY, token)
  window.localStorage.setItem(KEY, token)
}

const getToken = () => {
  return localStorage.getItem(KEY)
}

const removeToken = () => {
  localStorage.removeItem(KEY)
}

export { saveToken, getToken, removeToken }
