import React from 'react'
import { View ,Text, StyleSheet,Image} from 'react-native'

export default function PorductDetails({title,brand,description,price,stock,brandIMAGE}) {
  return (
  <>
  <View style={{alignItems:'center'}}>
  <Image
  source={{ uri: brandIMAGE }}
style={{width:150,height:150,borderWidth:3,borderColor:'skyblue'}} />
  </View>


    <Text style={style.text_container}>
      <Text>Product:</Text><Text>{title}</Text>
    </Text>
    <Text  style={style.text_container}>Brand:{brand}</Text>
    <Text  style={style.text_container}  >Description:{description}</Text>
    <Text  style={style.text_container}>Price:{price}</Text>
    <Text  style={style.text_container}>In stock:{stock}</Text>

  </>
      

 
  )
}
const style=StyleSheet.create({
text_container:{
  flex:1,
  color:'black',textAlign:'center',borderWidth:2,
  margin:5,
padding:5
}
})