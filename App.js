import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/router/StackNavigator';



export default function App() {
  return (
   <NavigationContainer>
    <StackNavigator />
   </NavigationContainer>
  );
}

