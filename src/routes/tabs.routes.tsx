import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Partners } from "../screens/Partners";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#5D5FEF",
        tabBarInactiveTintColor: "#9796A1",
        tabBarLabelStyle: {
          fontSize: 17,
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "#DEDEDE",
          paddingBottom: 10,
          paddingTop: 5,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search-sharp" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="partners"
        component={Partners}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
