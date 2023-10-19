import React, { useContext } from "react";
import { View, Text, StyleSheet,Button,Image } from "react-native";
import { Context } from "../context/context";
import { useRoute } from "@react-navigation/native";


export default function ProductFavrite({ title, reason, Price,ID, brandFavorite}) {

  const routeIdFavorites= useRoute()
const {handleDelete}=useContext(Context)
console.log(brandFavorite)


  return (

    <View style={{ borderWidth: 2, width: "100%", marginTop: 15,justifyContent:'center',alignItems:'center' ,padding:4}}>
      <Image
      source={{uri: brandFavorite}}
      style={{width:150,height:150}}
      />

      <Text style={style.text_box}>
        Product:--
        {title}
      </Text>
      <Text style={style.text_box}>Price:-- Rs.{Price}</Text>

      <Text style={style.text_box}>Reason:-- {reason}</Text>
      <View style={{width:'50%',marginBottom:5}}>
      <Button onPress={()=>{
        handleDelete(ID)
        alert('Product Deleted Successfully')
      }} title="delete"/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text_box: {
    textAlign: "center",padding:4,
  //  borderWidth:2,
  borderBottomWidth:2,
   marginBottom:5,
   width:"100%"
  },
});
