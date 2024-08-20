import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/Auth/Onboarding";

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}