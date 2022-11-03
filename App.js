import React from "react";
import { NativeBaseProvider} from "native-base";
import SaloonScreen from "./src/Screens/SaloonScreen";



// const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <SaloonScreen/>
      {/* <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator 
          initialRouteName="Login" 
          screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Login" component={RegisterScreen}/>
          <Stack.Screen name="Login" component={OrderScreen}/>
          <Stack.Screen name="Login" component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer> */}
    </NativeBaseProvider>
  );
}