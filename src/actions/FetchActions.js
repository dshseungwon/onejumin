import firebase from 'firebase';

import {
  FETCH_SUCCESS
} from './types';

export const sendMsgFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/message/sendMsg`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const recvMsgFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/message/recvMsg`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const postFetch = (category) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const aptid = userSnap.val().aptid;

      firebase.database().ref(`/apts/${aptid}/${category}`)
      .on('value', postSnap => {
        dispatch({ type: FETCH_SUCCESS, payload: postSnap.val() });
      });
    });
  };
};
