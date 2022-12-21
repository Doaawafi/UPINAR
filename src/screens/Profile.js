import React ,{useState}from "react";
import { View,Text,Image,StyleSheet, ScrollView} from "react-native";

import DD from '../../assets/images/DD.jpeg' ;
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

// import { useNavigation } from "@react-navigation/native";


const Profile =()=>{
    const [UserName,setUserName]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [Id,setId]=useState("");
    const onChangePressed=()=>{
        console.warn('Save Change');
        // navigation.navigate('My Courses');
        
    }

    return(
        <ScrollView>
            <View style={styles.root}>
            <Image source={DD} style={styles.logo}  resizeMode="contain"/>
            <Text style={styles.text}> Doaa Wafi </Text>
            <Text style={styles.text}> Doaawafi2000</Text>
            <Text style={styles.text_1}>Name :</Text>
            <CustomInput  placeholder="Doaa Wafi"  value={UserName} setValue={setUserName} />
            <Text style={styles.text_1}>Email :</Text>
            <CustomInput  placeholder="Doaawafi2000@gmail.com"  value={Email} setValue={setEmail} />
            <Text style={styles.text_1}>Password :</Text>
            <CustomInput  placeholder="......."  value={Password} setValue={setPassword} secureTextEntry={true} />
            <Text style={styles.text_1}>User ID :</Text>
            <CustomInput  placeholder="120180304"  value={Id} setValue={setId} />
            <CustomButton  text="Save Change" onPress={onChangePressed} type="PRIMARY"/>

           <Text style={styles.text_2}>Univercity Of Palestine © 2022</Text>
        </View>
        </ScrollView>
    );
}
 
const styles =StyleSheet.create({
   
    text:{
       color:'black',
       alignItems:"center",
    },
    text_2:{
        marginBottom:50,
       color:'black',
       alignItems:"center",
    },
    text_1:{
       alignSelf:"flex-start",
       marginBottom:1,
       marginTop:1,
       color:'purple',
       fontSize:18,
       fontWeight:'bold'
    },
   
    root:{
      alignItems:'center',
      padding:40, 
      backgroundColor:'white' 
     
    },
    logo:{
        marginTop:10,
        // height:100,
        // maxWidth:300,
        // width:'70%',
        // marginBottom:2
        height: 87 , width: 87, borderRadius: 40, marginBottom: 10
    }
})

export default Profile; 