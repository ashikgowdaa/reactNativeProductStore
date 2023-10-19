import React, { useContext } from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PorductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductFavriteScreen from "./screens/ProductFavouriteScreen";
import ProductMainScreen from "./screens/ProductMainscreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Context } from './context/context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Router() {
    const Stack = createNativeStackNavigator();

    const {BottomTabs} =useContext(Context)
  return (

    <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              options={{
                headerShown: false,
                
              }}
              name="bottomTabs"
              component={BottomTabs}
            />
          <Stack.Screen options={{
            title:'Product details'
          }} name="productDetails" component={PorductDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  )
}

export default Router

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})