import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Biz-Review',
            // headerStyle: { backgroundColor: '#333'}
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#eee'}
        } 
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default createAppContainer(HomeStack);