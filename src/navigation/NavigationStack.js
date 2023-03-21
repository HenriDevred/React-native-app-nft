import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import Details from '../views/Details';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{ title: 'Explore Nfts'}} component={Home} />
            <Stack.Screen name='Detail' component={Details} />
        </Stack.Navigator>
    )
}

export default NavigationStack;