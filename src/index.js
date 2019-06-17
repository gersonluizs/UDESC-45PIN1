import React, {Component} from 'react';
import Login from './Routes/LoginScreen';
import SignUp from './Routes/SignUpScreen';
import Welcome from './Routes/WelcomeScreen';
import { 
  createAppContainer, 
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';


const AppNavigator = createStackNavigator (
  { 
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Welcome: {
      screen: Welcome
    },
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;