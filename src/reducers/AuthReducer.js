import {
  APT_CHANGED,
  DONG_CHANGED,
  HOSU_CHANGED,
  DONG_AUTH_CHANGED,
  NICKNAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CHECK_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
} from '../actions/types';

 const INITIAL_STATE = {
   apt: 'hansin',
   dong: '123',
   hosu: '321',
   dong_auth: 'dauth',
   nickname: 'Seungwon Ju',
   email: 'Newuser@gmail.com',
   password: 'Password',
   password_check: 'Password',
   loading: false,
 };

 export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case APT_CHANGED:
      return {...state, apt: action.payload};
    case DONG_CHANGED:
      return {...state, dong: action.payload};
    case HOSU_CHANGED:
      return {...state, hosu: action.payload};
    case DONG_AUTH_CHANGED:
        return {...state, dong_auth: action.payload};
    case NICKNAME_CHANGED:
      return {...state, nickname: action.payload};
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case PASSWORD_CHECK_CHANGED:
      return {...state, password_check: action.payload};

    case SIGNIN_USER:
      return {...state, loading: true};

    case SIGNIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE };
    case SIGNIN_USER_FAIL:
      return {...state, dong_auth: '', loading: false};

    default:
      return state;
  }
};
