import config from '../config'
const regUsersService = {
    postRegInfo(credentials) {
        console.log(credentials)
      return fetch(`${config.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
  }
  
  export default regUsersService;