import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Shop from './src/screens/Shop';
import ProductDetails from './src/screens/ProductDetails';

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
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ShopScreen" component={Shop} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
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
          tabBarActiveTintColor: '#EF3651',
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
        {/* <Tab.Screen
          name="Shop"
          component={ShopStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="storefront" color={color} size={size} />
            ),
          }}
        /> */}
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
  );
};

export default App;
