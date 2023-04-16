import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CardDetails } from "../screens/CardDetails";
import { Extract } from "../screens/Extract";
import { Moviments } from "../screens/Moviments";
import { PersonInfo } from "../screens/PersonInfo";
import { RechargeCard } from "../screens/RechargeCard";
import { RegisterCard } from "../screens/RegisterCard";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { TabsRoutes } from "./tabs.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen name="signUp" component={SignUp} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="cardDetails" component={CardDetails} />
      <Screen name="moviments" component={Moviments} />
      <Screen name="personInfo" component={PersonInfo} />
      <Screen name="registerCard" component={RegisterCard} />
      <Screen name="rechargeCard" component={RechargeCard} />
      <Screen name="extract" component={Extract} />
      <Screen name="tabs" component={TabsRoutes} />
    </Navigator>
  );
}
