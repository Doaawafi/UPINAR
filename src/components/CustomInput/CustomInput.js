import React from "react";
import { View,StyleSheet,TextInput } from "react-native";



const CustomInput =({value,setValue,placeholder,secureTextEntry})=>{
    return(
        <View style={styles.container}>
          <TextInput 
          value={value}
          onChangeText={setValue}
          placeholder={placeholder} 
          secureTextEntry={secureTextEntry}
          style={styles.input}
             />
        </View>
    );
}
 
const styles =StyleSheet.create({
   container:{
    backgroundColor:'#F1F6F5',
    height:40,
    width:300,
    borderColor:'#7F8487',
    borderRadius:11,
    borderWidth:1.3,
    paddingHorizontal:10,
    marginVertical:5,
    },
   input:{
    color:"gray"
   }
})

export default CustomInput 