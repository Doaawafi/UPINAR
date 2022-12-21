import React ,{useState}from "react";
import { View,Text,Image,StyleSheet,TextInput ,  TouchableOpacity,Linking} from "react-native";
import Logo from '../../assets/images/Logo.jpg' ;
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import face from '../../assets/images/face.png' ;
import gmail from '../../assets/images/gmail.jpg' ;
import phone from '../../assets/images/phone.jpg' ;

// import { TextInput } from "react-native-gesture-handler";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { useNavigation } from "@react-navigation/native";
// import Textarea from "react-native-textarea/src/Textarea";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ContactUsScreen =()=>{
   const onPressMobileNumberClick = (number) => {

      let phoneNumber = '';
      if (Platform.OS === 'android') {
        phoneNumber = `tel:${number}`;
      } else {
        phoneNumber = `telprompt:${number}`;
      }

      Linking.openURL(phoneNumber);
   }
   const [UserName,setUserName]=useState("");
   const [Email,setEmail]=useState("");
   const [Message,setMessage]=useState("");
   // const navigation =useNavigation();
   const onSendPressed=()=>{
       console.warn('Send');
      //  navigation.navigate('Home');
       
   }
   
return(
 <ScrollView>
   <View style={styles.root}>
            <Image source={Logo} style={styles.logo}  resizeMode="contain"/>
            <Text style={styles.text}>University Of Palestine </Text>
            <Text style={styles.text}>Contact Us </Text>
            <Text style={styles.text_1}>Your Name :</Text>
            <CustomInput  placeholder="Name"  value={UserName} setValue={setUserName} />
            <Text style={styles.text_1}>Email :</Text>
            <CustomInput  placeholder="Enter Your Email"  value={Email} setValue={setEmail}  />
            <Text style={styles.text_1}>Your Massage :</Text>
            <TextInput style={styles.textInputContainer}  placeholder="   Enter Your Message" placeholderTextColor="blue" value={Message} setValue={setMessage}  maxLength ={240} multiline= {true}  />
       
            {/* <TextInput style={styles.textInputContainer}  placeholder="Enter Your Message"  value={Message} setValue={setMessage}  maxLength ={240} multiline= {true}  /> */}
            {/* <CustomInput  placeholder="Enter Your Massage"  value={Message} setValue={setMessage}   /> */}
            <CustomButton  text="Send Message" onPress={onSendPressed} type="PRIMARY"/>
            <TouchableOpacity  onPress={()=>Linking.openURL('https://ar-ar.facebook.com/')} style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text 
              style={{
                fontSize: 15,
                fontWeight:'bold',
                color:"black",
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
             Facebook
            </Text>
            {/* <Ionicons name="facebook-outline" size={22} /> */}
            <Image  source={face} style={styles.img}  />
            
          </View>
        </TouchableOpacity>
            <TouchableOpacity  onPress={()=>Linking.openURL('https://support.google.com/mail/answer/8494?hl=ar&co=GENIE.Platform%3DDesktop')} style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text 
              style={{
                fontSize: 15,
                fontWeight:'bold',
                color:"black",
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                marginRight:5
              }}>
             Gmail
            </Text>
            {/* <Ionicons name="facebook-outline" size={22} /> */}
            <Image  source={gmail} style={styles.img_1}  />
            
          </View>
        </TouchableOpacity>



            <TouchableOpacity onPress={() => { onPressMobileNumberClick("0598450013") }}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View tyle={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text 
              style={{
                fontSize: 15,
                fontWeight:'bold',
                color:"black",
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
             PhoneNumber
            </Text>
          <Text 
              style={{
                fontSize: 15,
                fontWeight:'bold',
                color:"black",
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
             0598450013
            </Text>
          </View>
            {/* <Ionicons name="facebook-outline" size={22} /> */}
            <Image  source={phone} style={styles.img}  />
            
          </View>
        </TouchableOpacity>
           <Text style={styles.text}>Univercity Of Palestine © 2022</Text>
 </View>

 </ScrollView>
);
}

const styles =StyleSheet.create({

   img:{
      height: 25, 
      width: 25, 
      borderRadius: 40, 
      marginBottom: 10,
      paddingHorizontal:1,
      marginHorizontal:20
   },
   img_1:{
      height: 30, 
      width: 40, 
      borderRadius: 40, 
      marginBottom: 10,
      paddingHorizontal:1,
      marginHorizontal:30
   },
  
   container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInputContainer: {
      backgroundColor:'#F1F6F5',
      borderColor:'#F1F6F5',
      height: 80,
      width: 300,
      padding: 15,
      paddingHorizontal:5,
      marginHorizontal:15,
      // backgroundColor: 'white',
      borderColor:'black',
      borderWidth:1
    },

   text:{
      marginTop:10,
      marginBottom:20,
      color:'black',
      alignItems:"center",
      fontWeight:'bold',
      fontSize:15

   },
   text_1:{
       // alignItems:"center",
      alignSelf:"flex-start",
      marginBottom:3,
      color:'black',
      fontWeight:'400'
   },
  
   root:{
      
     alignItems:'center',
     padding:50, 
     backgroundColor:'white' 
    
   },
   logo:{
       marginTop:-45,
       height:100,
       maxWidth:300,
       width:'70%',
       marginBottom:8
   }
})


export default ContactUsScreen;