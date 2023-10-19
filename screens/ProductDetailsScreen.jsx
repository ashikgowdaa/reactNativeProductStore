import React, { useContext, useEffect, useState ,useRef} from "react";
import { View, Text, StyleSheet, FlatList ,ActivityIndicator,Button,Modal,Pressable, TextInput,Animated} from "react-native";
import { useRoute,useNavigation } from "@react-navigation/native";
import axios from "axios";
import ProductDeTails from '../Components/PorductDetails'
import { Context } from "../context/context";


export default function ProductDetailsScreen() {
const navigation = useNavigation();
const [modalVisible,setModalVisible] = useState(false)
const{loading,setloading,addFavouritesfunc,addFourites}=useContext(Context)
const[reason,setReason]=useState()

  const styles = StyleSheet.create({
    detailsMain_screen: {
flex:1,
      backgroundColor: "lightskyblue",
flexDirection:'column',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },


    // moadl sttling
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 45,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginTop:20,
      width:90
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      marginRight:10
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      marginRight:5
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttonContainer:{
      flexDirection:'row'
    }
  });
  const route = useRoute();
  const [description, setDescription] = useState([]);


  const fadeAnim = useRef(new Animated.Value(1)).current;


  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };



  const routeID = route.params;
  console.log(routeID.productID);

  useEffect(() => {
    setloading(true)
  setTimeout(()=>{
    axios
    .get(`https://dummyjson.com/products/${routeID.productID}`)
    .then((res) => {
      // console.log(res.data);
      // if (Array.isArray(res.data)) {
      // }
      if(res.data){
        setDescription([...description, res.data]);
      }
      setloading(false)
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  },100)  
  }, []);
const updateButton = addFourites && addFourites.length > 0 ? addFourites.filter((item)=> item.id ===routeID.productID  ) : false

  useEffect(()=>{
    console.log("=>>>",navigation)
navigation.setOptions({
  headerRight:()=>{
    return(
      <Button  style={{}} onPress={() =>{ setModalVisible(true),fadeIn()}}  title={`${updateButton.length > 0 ? 'UPdate foavorites' :' Add Fovurites'}`} />
    )
  }
})
  },[])

  if(loading){
    return(
      <View style={[styles.container, styles.horizontal]}>

<ActivityIndicator size="large" color="#0000ff" />

      </View>
    )
  }


const handleChangeText=(valueText)=>{
  setReason(valueText)
  // console.log("=>>>",reason)
}

  return (

    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'skyblue'}}>  
  <View style={{display:'flex',width:'90%',height:'70%',backgroundColor:'white',justifyContent:'center',alignItems:'center' }}>
    <View style={{height:'90%',alignItems:'center',justifyContent:'center'}}>
      <FlatList
        data={description}
        renderItem={({ item }) =>
            <ProductDeTails  title={item.title} brand={item.brand} description={item.description} price={item.price} stock={item.stock} brandIMAGE={item.thumbnail} />   
        }
        keyExtractor={(item) => item.id}
      />
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={{borderWidth:2,padding:2,width:210,textAlign:'center'}} placeholder="Why do you like this Product?" onChangeText={handleChangeText} value={reason} />
         <View style={styles.buttonContainer}>
         <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => {
                return(
               addFavouritesfunc(reason,routeID.productID),
                  setModalVisible(!modalVisible),
                  alert(`${updateButton.length > 0 ? 'PRODUCT UPDATED SUCCESSFULLY': "PRODUCT ADDED TO FAVORITES"}`)
                )
              }
              }>
              <Text style={styles.textStyle}>ADD</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
         </View>
          </View>
        </View>
      </Modal>
  </View>
  </View>
    </View>


  );
}
