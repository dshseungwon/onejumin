import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
 } from './types';


// Value Changed Actions
export const aptChanged = (text) => {
  return {
    type: APT_CHANGED,
    payload: text
  };
};
export const dongChanged = (text) => {
  return {
    type: DONG_CHANGED,
    payload: text
  };
};
export const hosuChanged = (text) => {
    return {
      type: HOSU_CHANGED,
      payload: text
    };
};
export const dongAuthChanged = (text) => {
  return {
    type: DONG_AUTH_CHANGED,
    payload: text
  };
};
export const nicknameChanged = (text) => {
  return {
    type: NICKNAME_CHANGED,
    payload: text
  };
};
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const passwordCheckChanged = (text) => {
  return {
      type: PASSWORD_CHECK_CHANGED,
      payload: text
  };
};
// Value changed actions END


export const signInUser = ({ apt, dong, hosu, nickname, email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });
    console.log({ apt, dong, hosu, nickname, email, password });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => signInUserSuccess(dispatch, user, apt, dong, hosu, nickname, email, password))
      .catch((signInError) => {
        console.log(signInError);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => signInUserSuccess(dispatch, user, apt, dong, hosu, nickname, email, password))
          .catch((fatalError) => {
            console.log(fatalError);
            signInUserFail(dispatch);
          });
      });
  };
};

const signInUserSuccess = (dispatch, user, apt, dong, hosu, nickname, email, password) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}`)
    .set({ apt, dong, hosu, nickname, email, password })
    .then(() => {
      dispatch({ type: SIGNIN_USER_SUCCESS });
      Actions.main();
    });
};

const signInUserFail = (dispatch) => {
  dispatch({ type: SIGNIN_USER_FAIL });
};
