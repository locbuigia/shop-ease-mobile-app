import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Shop from './src/screens/Shop';
import ProductDetails from './src/screens/ProductDetails';

import {Provider} from 'react-redux';
import {store} from './src/store';
import Filter from './src/screens/Filter';
import {COLORS} from './src/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ShopScreen" component={Shop} />
      <Stack.Screen name="FilterScreen" component={Filter} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarLabelStyle: {
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
            },
            tabBarStyle: {
              height: 60,
              paddingTop: 10,
              backgroundColor: 'black',
            },
            tabBarActiveTintColor: COLORS.primary,
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              title: 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="cart" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
