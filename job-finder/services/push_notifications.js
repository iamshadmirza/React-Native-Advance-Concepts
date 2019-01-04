import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('puchtoken');
    if (previousToken) {
        return;
    } else {
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
        await fetch(PUSH_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({ token: { token } })
        });
        AsyncStorage.setItem('pushtoken', token);
    }
};