import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Home from './Src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Src/Screens/Cart';
import Profile from './Src/Screens/Profile';
import Category from './Src/Screens/Category';
import SingleProduct from './Src/Screens/SingleProduct';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#28bc63',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {paddingBottom: 5, paddingTop: 4},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./Src/Images/icons/home.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./Src/Images/icons/category.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./Src/Images/icons/online-shopping.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./Src/Images/icons/user.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
