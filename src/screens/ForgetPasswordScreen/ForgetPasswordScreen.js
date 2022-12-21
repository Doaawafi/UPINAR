import React ,{useState}from "react";
import {View , Text, StyleSheet,Image} from 'react-native';
import Logo from '../../../assets/images/Logo.jpg' ;
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";


const ForgetPasswordScreen=()=>{
    const navigation =useNavigation();

    const onReset=()=>{
        // console.warn('RESET PASSWORD');
        navigation.navigate('Reset');

    }

const[resetpassword,setResetpassword]=useState("");



return(
       <View style={styles.root}>
          <Image source={Logo} style={styles.logo}  resizeMode="contain"/>
        <Text style={styles.text}>Reset your password</Text>
        <Text style={styles.title}>Enter your email to receive instructions</Text>
        <CustomInput 
        placeholder="Enter your email "
        value={resetpassword} 
        setValue={setResetpassword}/>
        <CustomButton  text="Reset" onPress={onReset} type="PRIMARY"/>
        <Text style={styles.title_1}>Sending For Your Email</Text>
            
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




export default  ForgetPasswordScreen