// Profile - Reducer //
import { SET_PROFILE, UPDATE_USERNAME, PROFILE_ERROR } from '../actions/profileActions';

const initialState = {
  userProfile: {
    firstName: '',
    lastName: '',
    userName: '',
  },
  error: null, // Ajout d'une clé pour stocker les erreurs //
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
        error: null, 
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          userName: action.payload,
        },
        error: null, 
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload, 
      };
    default:
      return state;
  }
};

export default profileReducer;