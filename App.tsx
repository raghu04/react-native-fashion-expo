import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Onboarding } from "./src/Auth";
import { LoadAssets } from "./src/components";

const AuthStack = createNativeStackNavigator();

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
      </AuthStack.Navigator>
    </LoadAssets>
  )
}