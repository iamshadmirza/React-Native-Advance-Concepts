import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const MainNavigator = createBottomTabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
        screen: createBottomTabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review: {
                screen: createStackNavigator({
                    review: { screen: ReviewScreen },
                    settings: { screen: SettingsScreen }
                })
            }
        }, {
                tabBarOptions: {
                    labelStyle: { fontSize: 12 }
                }
            })
    }
}, { lazy: true });

WelcomeScreen.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: false
    }
}
AuthScreen.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: false
    }
}


export default createAppContainer(MainNavigator);
