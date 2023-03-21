import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
    </>
  );
}

