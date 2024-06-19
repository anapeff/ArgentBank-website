
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';


// Création d'un objet contenant les deux réducteurs //
const reducer = {
  auth: authReducer,
  
};

// Configure le store avec les deux reducers //
const store = configureStore({
  reducer: reducer
});

export default store;

// Redux utilise le concept de "store" pour conserver l'état global de l'application. //

// L'utilisateur déclenche une action.
// Cette action est dispatchée (envoyée) au store.
// Le store passe l'action au réducteur.
// Le réducteur est une fonction qui prend deux arguments, l'état actuel et l'action, et retourne le nouvel état basé sur l'action reçue.
// Le store met à jour l'état interne avec le nouvel état retourné par le réducteur.
// = Les composants sont notifiés du changement d'état, permettant à l'interface utilisateur de se mettre à jour. //