import React, { useContext, useEffect } from 'react'
import {View ,Text,StyleSheet, FlatList} from 'react-native'
import { Context } from '../context/context'
import ProductFavrite from '../Components/ProductFavrite'
import { useNavigation } from '@react-navigation/native'
 export default function ProductFavouriteScreen() {

  const { addFourites } = useContext(Context)
  const navigate = useNavigation()

const styles = StyleSheet.create({
    Favorites_container:{
        flex:1,
        backgroundColor:'skyblue',
    
    }

})


console.log(navigate)




  return (
    <View style={styles.Favorites_container}>
      <View style={{flex:1,backgroundColor:'skyblue',justifyContent:'center'}}>
      <Text style={{textAlign:'center'}}>
            Product Favourites Screen
        </Text>
      </View>
    
        {/* <View>
          {
        addFourites.map((element)=>{
          return(
            <Text>
            {element.title}
          </Text>
          )
       
        })
      
 }
        </View> */}

       
<View style={{flex:10,width:'100%',paddingHorizontal:10}}>
  <View style={{backgroundColor:'white',flex:1,padding:5,borderWidth:2,width:'100%'}} >
    <Text style={{textAlign:'center',fontWeight:'bold'}}>
{
addFourites.length > 0 ? '  My favourites products' : "No Products are added"
}

    
    </Text>
  <FlatList
         data={addFourites}
         keyExtractor={item => item.id.toString()}
         renderItem={({item})=>
            <ProductFavrite ID={item.id} title={item.title} reason={item.reason} Price={item.Price} brandFavorite={item.brandFavorite} />
         }
         /> 
  </View>

</View>
        
    </View>
  )
}
