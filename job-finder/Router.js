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
        })
    }
});

export default createAppContainer(MainNavigator);
