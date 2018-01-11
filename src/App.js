/**
 * 원주민 앱 버전 0.1
 * https://github.com/facebook/react-native
 * @flow
 */

// NPM modules
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

// Our modules
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDZca6cXcM-wMb9dIJvD3OaF0G1s5gI06U",
      authDomain: "onejumin-f2a66.firebaseapp.com",
      databaseURL: "https://onejumin-f2a66.firebaseio.com",
      projectId: "onejumin-f2a66",
      storageBucket: "onejumin-f2a66.appspot.com",
      messagingSenderId: "281199859528"
    };

    firebase.initializeApp(config);
    
  }

  render() {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
