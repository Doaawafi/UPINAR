import React from "react";
import { View,Text,StyleSheet,Pressable } from "react-native";



const CustomButton =({onPress,text,type})=>{
    return(
    <Pressable onPress={onPress} style={styles[`container_${type}`]}>
          <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
}
 
const styles =StyleSheet.create({
   container:{
    backgroundColor:"#3B71F3",
    width:150,
    padding:15,
    marginVertical:5,
    // height:30,
    borderRadius:10,
    alignItems:'center',
   },
   container_PRIMARY:{
    backgroundColor:"#3B71F3",
    width:150,
    padding:10,
    marginVertical:15,
    borderRadius:15,
    alignItems:'center',
   },
   container_TERTIARY:{
    backgroundColor:"white",
    // width:150,
    // padding:15,
    marginVertical:5,
    // borderRadius:10,
    alignItems:'flex-end',
   },
   text:{
    fontWeight:"bold",
    color:"white",
    
   },
   text_TERTIARY:{
    fontWeight:"bold",
    color:"gray",
    
   }
})

export default CustomButton 