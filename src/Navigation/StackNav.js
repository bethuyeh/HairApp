import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "../Screens/HomeScreen"
import SingleProduct from "../Screens/SingleProduct"
import Shipping from "../Screens/Shipping"
import Payment from "../Screens/Payment"
import PlaceorderScreen from "../Screens/PlaceorderScreen"
const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator 
          initialRouteName="Home" 
          screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProduct} />
        <Stack.Screen name="Shipping" component={Shipping} />
        <Stack.Screen name="Checkout" component={Payment}/>
        <Stack.Screen name="Placeorder" component={PlaceorderScreen} />
        
    </Stack.Navigator>
  )
}

export default StackNav