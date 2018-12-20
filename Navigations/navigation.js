import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from '../Screens/Home.screen';
import LoginScreen from '../Screens/Login.screen';
import MarketSCreen from '../Screens/Market.screen';
import NativeBaseScreen from '../Screens/NativeBase.screen';
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Market: {
        screen: MarketSCreen
    },
    Test: {
        screen: NativeBaseScreen,
    }
});

const RootStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Main: {
        screen: TabNavigator,
        navigationOptions: {
            title: 'MyScreen',
            headerLeft: null
        }
    }
}, {
    initialRouteName: 'Login',
});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;