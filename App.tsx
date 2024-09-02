import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding } from "./src/Auth";
import { LoadAssets } from "./src/components";
import theme from "./theme";

const AuthStack = createNativeStackNavigator();

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <AuthStack.Navigator screenOptions={{ headerShown: false }}>
              <AuthStack.Screen name="Onboarding" component={Onboarding} />
            </AuthStack.Navigator>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
