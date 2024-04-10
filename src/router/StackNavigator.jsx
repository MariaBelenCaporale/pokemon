
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';

const Stack = createStackNavigator()

export function StackNavigator () {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
        cardStyle: "white",
    }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}

