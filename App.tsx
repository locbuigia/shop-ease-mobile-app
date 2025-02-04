import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Cart from './src/screens/Cart';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {product: Product};
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  console.log('App test');
  const testFunc = () => {
    console.log('helloworld');
  };
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, title: 'Home'}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
