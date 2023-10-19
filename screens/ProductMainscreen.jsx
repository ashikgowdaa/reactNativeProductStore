import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Item,
  Pressable,
  Dimensions
} from "react-native";
import { Context } from "../context/context";
import ProductList from '../Components/ProductMain'
import { useNavigation } from "@react-navigation/native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:5,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
});

const numColumns = 2;

export default function ProductMainscreen() {
  const navigation = useNavigation()


function RandomColors (){
let letters = '0123456798ABCDEF'
let Colors = '#'

for(i=0;i < 6;i++){
    let random = letters[ Math.floor(Math.random() * 10)];
    Colors += random ;
}




return Colors;
}
  // const[products,setproudtcs] = useState(['aarray','array'])
  const { loading, products } = useContext(Context);
  // console.log(products);


  const  handleNavigate = (getID)=>{
    navigation.navigate('productDetails',{
      'productID' : getID
    })
  }



  return (
    <View style={styles.container}>
  
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ProductList
            title={item.title}
            brandImage={item.thumbnail}
            brand={item.brand}
            bgColor={RandomColors()}
            onPress={() => handleNavigate(item.id)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        numColumns={2}
      />
   

    </View>
    

  );
}
