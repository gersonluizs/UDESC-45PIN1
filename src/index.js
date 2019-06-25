import { 
  createAppContainer, 
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './Routes/LoginScreen';
import SignUp from './Routes/SignUpScreen';
import Routes from './Routes/Main';

const AppStackNavigator = createStackNavigator({
  Routes,
})

const AppDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: AppStackNavigator,
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Welcome: {
    screen: AppDrawerNavigator
  },
},
{
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;