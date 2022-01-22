
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import Home from './Home/Index';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView>
      <Home />
    </SafeAreaView>
    </Provider>
  );
};

export default App;
