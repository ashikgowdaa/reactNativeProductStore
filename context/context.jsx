import React, { useState, createContext, useEffect } from "react";
import { View } from "react-native";
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  ProductMainScreen from '../screens/ProductMainscreen';
import ProductFavriteScreen from "../screens/ProductFavouriteScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';


 export const Context = createContext();

 const Tab = createBottomTabNavigator();

const ProductContextapi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading,setloading] =useState()
  const [addFourites,setaddFourites] = useState([])

  useEffect(() => {
    setloading(true)
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (res.data.products) {
          setProducts(
            res.data.products.map((items) => {
              return items;
            })
          );
        }
        setloading(false)
      })
      .catch((err) => {
        alert("error", err); 
      });
  },[]);

let ID;

const addFavouritesfunc = (reason,productID)=>{


let deStructureFavorite = [...addFourites]

 ID = deStructureFavorite.find((item)=>item.id === productID )
// console.log(">>>>>",ID.length)
if(!ID){
  products.find((element)=>{
    return(
      element.id===productID && deStructureFavorite.push({title:element.title , id:element.id,reason:reason, Price:element.price,brandFavorite:element.thumbnail})
    )
  })
}
else{
  ID.reason = reason


}

setaddFourites(deStructureFavorite);
}

// Deleting the Favrites Value

const handleDelete =(ID)=>{
  console.log('Deleted',ID)

  const updatedAddFavorites = addFourites.filter(item => {
    return item.id !== ID;
  });
  

setaddFourites(updatedAddFavorites)

}




console.log('<><>',)
let faValue = (addFourites.length)

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "PRODUCT LIST",
          tabBarIcon:({color,size})=>(
            <Icon  name ='list' size={30} />
            )
        }}
        name="details"
        component={ProductMainScreen}
      />
      <Tab.Screen
        options={{
          title: "FAVORITES",
          tabBarBadge: faValue ,
  tabBarIcon:()=>(
    <Icon name="favorite" size={30}/>
  )
        }}
        name="favorite"
        component={ProductFavriteScreen}
      />
    </Tab.Navigator>
  );
}


  return (
    <Context.Provider value={{ loading ,setloading,products,addFavouritesfunc,addFourites,handleDelete,BottomTabs}}>
      {children}
    </Context.Provider>
  );
};

export default ProductContextapi;
