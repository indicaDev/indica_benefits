import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { CardDetails } from "../screens/CardDetails";
import { TabsRoutes } from "./tabs.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen name="signUp" component={SignUp} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="cardDetails" component={CardDetails} />
      <Screen name="tabs" component={TabsRoutes} />
    </Navigator>
  );
}
