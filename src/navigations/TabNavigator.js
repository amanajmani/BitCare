import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home';
import AddressScreen from '../screens/Address';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-home'} />
          </View>
        ),
      },
    },
    Address: {
      screen: AddressScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'logo-bitcoin'}
            />
          </View>
        ),
        activeColor: '#949499',
        inactiveColor: '#636366',
        barStyle: { backgroundColor: '#1a1b25' },
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#949499',
    inactiveColor: '#636366',
    barStyle: { backgroundColor: '#1a1b25' },
  },
);

export default createAppContainer(TabNavigator);
