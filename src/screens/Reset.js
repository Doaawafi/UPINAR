import React ,{useState} from "react";
import {View , Text, StyleSheet,Image} from 'react-native';
import Logo from '../../assets/images/Logo.jpg' ;
import CustomButton from "../components/CustomButton/CustomButton";
import CustomInput from "../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";


const Reset=()=>{
    const navigation =useNavigation();

    const onSubmit=()=>{
        // console.warn('RESET PASSWORD');
        navigation.navigate('SignIn');

    }

const[code,setCode]=useState("");
const[resetpassword,setResetpassword]=useState("");
const onBackLoginPressed=()=>{
    // console.warn("SignIn");
    navigation.navigate('SignIn');

};

return(
       <View style={styles.root}>
          <Image source={Logo} style={styles.logo}  resizeMode="contain"/>
        <Text style={styles.text}>Reset your password</Text>
        <CustomInput 
        placeholder="Enter Code "
        value={code} 
        setValue={setCode}/>
        <CustomInput 
        placeholder="Reset Password "
        value={resetpassword} 
        setValue={setResetpassword}/>
        <CustomButton  text="Submit" onPress={onSubmit} type="PRIMARY"/>
        <Text style={styles.title_1}  onPress={onBackLoginPressed}>Back To Login Screen</Text>
            
       </View>

);

}
const styles =StyleSheet.create({
    text:{
        marginBottom:20,
        color:'black',
        // alignItems:"center",
        alignSelf:"center"
     },
   
    title:{
    //    marginBottom:30,
       color:'black',
    },
    title_1:{
       marginBottom:250,
       color:'black',
    },
    root:{

        alignItems:'center',
        backgroundColor:'white' 
       
      },
    
    logo:{
        marginTop:180,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:5,
        alignSelf:"center"
    }
  
})




export default  Reset;