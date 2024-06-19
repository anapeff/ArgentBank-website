// Authentification - Actions //

// Action pour gérer la connexion de l'utilisateur //
export const userLogin = (userData) => {
  return {
    type: 'USER_LOGIN',
    payload: userData,
  };
};
  
// Action pour vérifier la connexion de l'utilisateur //
export const setLoggedIn = (isLoggedIn) => {
  return {
    type: 'SET_LOGGED_IN',
    payload: isLoggedIn,
  };
};
  
// Action pour gérer la déconnexion de l'utilisateur //
export const userLogout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  return {
    type: 'LOGOUT',
  };
};