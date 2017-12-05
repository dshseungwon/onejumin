import firebase from 'firebase';

import {
  FETCH_SUCCESS,
  COMMENT_FETCH_SUCCESS,
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

export const postPush = (category, post) => {
  const { uid } = firebase.auth().currentUser;
  const { title, content, time } = post;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const dong = userSnap.val().dong;
      const apt = userSnap.val().apt;
      const nickname = userSnap.val().nickname;
      const like = 0;
      const numComments = 0;

      firebase.database().ref(`/apts/${apt}/${category}`)
      .push().set({ title, content, time, nickname, like, numComments, dong })
      .then(() => {
        console.log('Notice push successed!');
       });
    });
  };
};

export const commentFetch = (category, postId) => {

  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const apt = userSnap.val().apt;

      firebase.database().ref(`/apts/${apt}/${category}/${postId}/comments`)
      .on('value', commentSnap => {
        dispatch({ type: COMMENT_FETCH_SUCCESS, payload: commentSnap.val() });
      });
    });
  };
};


export const commentPush = (category, postId, comment, numComments) => {

  const { uid } = firebase.auth().currentUser;
  const { content } = comment;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}`).once('value').then((userSnap) => {
      const apt = userSnap.val().apt;

      firebase.database().ref(`/apts/${apt}/${category}/${postId}/comments`)
      .push().set({ content })
        .then(() => {
          console.log('Comment push successed!');
        });

      firebase.database().ref(`/apts/${apt}/${category}/${postId}`)
      .update({ numComments: numComments + 1 })
        .then(() => {
          console.log('numComments push successed!');
         });
    });
  };
};
