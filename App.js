import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PorductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductFavriteScreen from "./screens/ProductFavouriteScreen";
import ProductMainScreen from "./screens/ProductMainscreen.jsx";
import { NavigationContainer } from "@react-navigation/native";

import ProductContextapi from "./context/context";
import Router from './router'



export default function App() {
  return (
<ProductContextapi>
<Router/>
</ProductContextapi>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1
   
  },
});
