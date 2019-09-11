import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from './styles/colors';
import LoginScreen from './containers/login/login.screen';
import HomeScreen from './containers/home/home.screen';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
        borderBottomWidth: 0,
        elevation: 0,
    },
    headerTintColor: Colors.white,
    headerBackTitle: null,
};

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
);

const LoginStack = createStackNavigator(
    {
        Login: { 
            screen: LoginScreen,
            navigationOptions: {
                header: null,
                gesturesEnabled: false,
            }
        },
    }
);

const RootStack = createSwitchNavigator(
    {
        Home: HomeStack,
        Login: LoginStack,
    },
    {
        initialRouteName: 'Login',
    },
);

export default createAppContainer(RootStack);
