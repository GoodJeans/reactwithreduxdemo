import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CookieContainer from './components/CookieContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <CookieContainer/>
      </div>
      </Provider>
  );
}

export default App;
