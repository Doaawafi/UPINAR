
import {View , Text, StyleSheet,Image} from 'react-native';
// import avatar from '../../assets/images/avatar';

import Privacy from '../../assets/images/privacy.jpeg'
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";



const PrivecyScreen=()=>{
    const navigation =useNavigation();

    const onAccept=()=>{
        // console.warn('I Agree');
        navigation.navigate('SignIn');

    }
return(
   
       <View style={styles.root}>
        <Image source={Privacy} style={styles.logo}  resizeMode="contain"/>
        <Text style={styles.text}>When you use our services, you trust us with your information. We understand this is a huge responsibility and work hard to protect your information and put you in control.</Text>
        <Text style={styles.text}>Palestine University follows appropriate technical, physical, and institutional measures to protect personal information against unauthorized access, unlawful processing, accidental loss or damage, and unauthorized destruction.</Text>
        <Text style={styles.text}>The university's website includes links to external websites available to facilitate matters for you, knowing that Tafila Technical University does not support these sites, nor is it responsible for their content or privacy practices.</Text>
        <CustomButton  text="I Agree" onPress={onAccept} type="PRIMARY"/>   
        <Text style={styles.text_1}> Univercity Of Palestine © 2022</Text>
       </View>

);

}
const styles =StyleSheet.create({
    text:{
        marginBottom:45,
        color:'black',
        alignSelf:"flex-start"
     },
    text_1:{
        marginBottom:80,
        color:'black',
        alignSelf:"center"
     },
   
   
    root:{
        // marginTop:50,
        alignItems:'center',
        padding:20, 
        backgroundColor:'white' 
       
      },
   
    logo:{
        marginTop:50,
        marginVertical:30,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:35,
        alignSelf:"center"
    }
  
})




export default  PrivecyScreen;