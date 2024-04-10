
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import FavotiresScreen from "../components/screens/FavoritesScreen";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#35155D",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,
        }
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Lista",
          tabBarIcon: ( {color} )=> <FontAwesome name="list" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="FavotiresScreen"
        component={FavotiresScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ( {color} )=> <FontAwesome name="heart" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
