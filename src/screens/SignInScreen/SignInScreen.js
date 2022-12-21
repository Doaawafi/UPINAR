import React ,{useState}from "react";
import { View,Text,Image,StyleSheet,Pressable ,Navigtor, TouchableOpacity } from "react-native";
import Logo from '../../../assets/images/Logo.jpg' ;
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInScreen =()=>{
    const [UserName,setUserName]=useState("");
    const [Password,setPassword]=useState("");
    const navigation =useNavigation();
    const onLogInPressed=()=>{
        // console.warn('login');
        // navigation.navigate('My Courses');
        // navigation.navigate('My Courses');
        navigation.navigate('my drawer');
        
    }
    const onForgotPasswordPressed=()=>{
        // console.warn('foregetpassword');
        navigation.navigate('Forget Password');

    }
    const PoliciesandprivacyPressed=()=>{
        // console.warn('Policies and privacy');
        navigation.navigate('privacy');

    }
   
    return(
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo}  resizeMode="contain"/>
            <Text style={styles.text}>Univercity Of Palestine </Text>
            <Text style={styles.text_1}>User Name :</Text>
            <CustomInput  placeholder="UserName"  value={UserName} setValue={setUserName} />
            <Text style={styles.text_1}>Password :</Text>
            <CustomInput  placeholder="Password"  value={Password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton  text="Forgot Password ?!" onPress={onForgotPasswordPressed} type="TERTIARY"  />
            <CustomButton  text="Login" onPress={onLogInPressed} type="PRIMARY"/>
            <CustomButton  text="Policies and privacy" onPress={PoliciesandprivacyPressed} type="TERTIARY"  />

           <Text style={styles.text_2}>Univercity Of Palestine © 2022</Text>
        </View>
    );
}
 
const styles =StyleSheet.create({
   
    text:{
       marginBottom:50,
       color:'black',
       alignItems:"center",
    },
    text_2:{
       marginBottom:100,
       color:'black',
       alignItems:"center",
    },
    text_1:{
        // alignItems:"center",
       alignSelf:"flex-start",
       marginBottom:3,
       color:'black',
    },
   
    root:{
      alignItems:'center',
      padding:50, 
      backgroundColor:'white' 
     
    },
    logo:{
        marginTop:60,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:5
    }
})

export default SignInScreen 