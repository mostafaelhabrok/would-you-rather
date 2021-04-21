export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

 function login (autheduser) {
    return {
      type: LOGIN,
      autheduser,
    }
  }

 function logout () {
    return {
      type: LOGOUT,
    }
  }

  export function handleLogin (autheduser ) {
    return (dispatch, getState) => {
       dispatch(login(autheduser))
    }
  }
  export function handleLogout ( ) {
    return (dispatch, getState) => {
        dispatch(logout())
    }
  }