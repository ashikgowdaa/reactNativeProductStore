import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Image } from "react-native";

export default function ProductList({ title, bgColor, brandImage, onPress }) {
  return (
    <Pressable style={{width:'50%',paddingHorizontal:10}}  onPress={onPress}>
      <View style={styles.main_wrapper}>
        <View style={styles.main_container}>
          <View style={styles.box_container}>
            <Image
              source={{ uri: brandImage }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover" // Ensure the image covers the container
            />
          </View>
        </View>
        <View style={{  alignItems: 'center' ,justifyContent:'center',width:'100%'}} android_ripple={{ color: 'green' }}>
          <View
            style={{
              backgroundColor: 'skyblue',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 3,
              borderColor: 'white',
              width: 150,
              height: 50,
              marginBottom: 20,
              borderRadius:10
          
            }}
          >
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'white', fontWeight: 'bold' }}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

// Update styles to support scrolling
const styles = StyleSheet.create({
  main_wrapper: {
    flex:1,
    width: '100%', // Adjust the width to 50% to fit two items per row
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'skyblue',
    marginBottom: 10,
  
  
  },
  main_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    borderColor: 'green',
    // padding: 5,
    // margin: 2
    // width: '90%',
  },
  image: {
    flex: 1,
    width: null,
  },
  box_container: {
    flex: 1,
    borderBlockColor:'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding:5
  },
});
