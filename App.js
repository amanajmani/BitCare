import React, { useEffect } from 'react';
import TabNavigator from './src/navigations/TabNavigator';
import { Provider } from 'react-redux';
import store from './config/store';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

function Home() {
  useEffect(() => {
    // change Navigation Bar style
    changeNavigationBarColor('#12131a', false);
  });

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

export default Home;
