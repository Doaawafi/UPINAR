import React from "react";
import { View,Text,StyleSheet,Image,Linking } from "react-native";
import react from '../../../assets/images/react.png' ;
import { color } from "react-native-reanimated";


const MobilePage =()=>{

    return(

  <View style={styles.root}>
    <Image source={react} style={styles.logo}  resizeMode="contain"/>
    <Text style={styles.title}>    React Native Course </Text>
    <Text style={styles.text}>Describtion About Course :</Text>
    <Text style={styles.text_1}>In this course we will learn <Text style={styles.text_2}> REACT NATIVE</Text > , <Text style={styles.text_2}> React Native</Text>  lets you create truly native apps and doesn't compromise your users'</Text>
    <Text style={styles.text_1}>   ADV: Science is a previous course of operating systems </Text>
    <Text style={styles.text_3}> Course Contant :</Text>
    <Text style={styles.title_1}> Book Link:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.pdfdrive.com/pure-react-a-step-by-step-guide-to-mastering-react-e196825777.html')}>
   https://www.pdfdrive.com/pure-react-a-step-by-step-guide-to-mastering-react-e196825777.html  </Text>
    <Text style={styles.title_1}> React Native Documentation:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://reactnative.dev/docs/getting-started')}>https://reactnative.dev/docs/getting-started  </Text>
    <Text style={styles.title_1}> React Native Youtube Channel:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ')}>
     https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ  </Text>


  </View>
    );
}
const styles =StyleSheet.create({
  link:{
    color:'blue',
    alignSelf:'flex-start',
    fontSize:13,
    fontWeight:'500',
    marginBottom:15


  },
  title_1:{
    color:'black',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'500'


  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:20,
    alignSelf:"center",
    color:'black'
  },
   
    text:{
      // fontFamily:'arail',
       marginBottom:10,
       color:'black',
      //  alignItems:"center",
       alignSelf:'flex-start',
       fontSize:20,
       fontWeight:'bold'
    },
    text_3:{
      // fontFamily:'arail',
       marginBottom:10,
       color:'red',
      //  alignItems:"center",
       alignSelf:'flex-start',
       fontSize:20,
       fontWeight:'bold'
    },
    text_1:{
      fontSize:18,

        // alignItems:"center",
       alignSelf:"flex-start",
       marginBottom:30,
       color:'black',
    },
    text_2:{
        // alignItems:"center",
       alignSelf:"flex-start",
       marginBottom:3,
       color:'#4B56D2',
       fontWeight:'bold',
       
    },
   
    root:{
    
      alignItems:'center',
      padding:35, 
      backgroundColor:'white',
      // backgroundColor:'#F3CCFF',
      // marginBottom:900,

     
    },
    logo:{
        marginTop:5,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:5
        
    }
})
export default MobilePage;