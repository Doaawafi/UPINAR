import React ,{useState}from "react";
import { View,Text,Image,StyleSheet,Pressable,ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomCard from "../../components/CustomCard/CustomCard";
import { useNavigation } from "@react-navigation/native";



const HomeScreen =()=>{
    const [UserName,setUserName]=useState("");
    const [Password,setPassword]=useState("");
    const navigation =useNavigation();

    const onTextPressed=()=>{
        navigation.navigate('MobilePrograming Course');
        
    }
    const onText1Pressed=()=>{
        navigation.navigate('DistributedSystem Course');
        
    }
    const onText2Pressed=()=>{
        navigation.navigate('Artifical Intelagant Course');
        
    }
    const onText3Pressed=()=>{
        navigation.navigate('Web Programing Course');
        
    }
   
   
    return(
        
        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.text}> Content Of the courses :</Text>
           <CustomCard  text="Mobile Programing" onPress={onTextPressed} />
           <CustomCard  text="Distributed System" onPress={onText1Pressed}/>
           <CustomCard  text="Artifical Intelagant" onPress={onText2Pressed}/>
           <CustomCard  text="Web Programing"    onPress={onText3Pressed}  />
        </View>
        </ScrollView>
      
    );
}
 
const styles =StyleSheet.create({
   
    text:{
       marginBottom:10,
       color:'blue',
       fontSize:25,
       fontWeight:'bold',
       alignItems:"center",
    },
    text_1:{
        // alignItems:"center",
       alignSelf:"flex-start",
       marginBottom:3,
       color:'black',
    },
   
    root:{
        backgroundColor:'white',
      alignItems:'center',
      padding:15,  
     
    },
    // logo:{
    //     marginTop:5,
    //     height:100,
    //     maxWidth:300,
    //     width:'70%',
    //     marginBottom:5
    // }
})

export default HomeScreen; 