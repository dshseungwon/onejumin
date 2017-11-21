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
      const apt = userSnap.val().apt;

      firebase.database().ref(`/apts/${apt}/${category}`)
      .on('value', postSnap => {
        dispatch({ type: FETCH_SUCCESS, payload: postSnap.val() });
      });
    });
  };
};

export const postPush = (category) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const apt = userSnap.val().apt;

      firebase.database().ref(`/apts/${apt}/${category}`)
      .push().set({ title, content })
      .then(() => {
        console.log('Notice push successed!');
       });

    });
  };
};
