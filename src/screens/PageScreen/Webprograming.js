
import React from "react";
import { View,Text,StyleSheet,Image,Linking } from "react-native";
import web from '../../../assets/images/web.png' ;
import { ScrollView } from "react-native-gesture-handler";


const WebProgramPage =()=>{

    return(

<ScrollView >
<View style={styles.root}>
    <Image source={web} style={styles.logo}  resizeMode="contain"/>
    <Text style={styles.title}>   Web Programing Course </Text>
    <Text style={styles.text}>Describtion About Course :</Text>
    <Text style={styles.text_1}>In this course we will learn <Text style={styles.text_2}> WEB PROGRAMING </Text > , <Text style={styles.text_2}>Web Program</Text>  refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. </Text>
    <Text style={styles.text_1}>   ADV: Science is a previous course of operating systems </Text>
    <Text style={styles.text_3}> Course Contant :</Text>
    <Text style={styles.title_1}> Book Link:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://freecomputerbooks.com/Distributed-Systems-3rd-Edition.html#downloadLinks')}>
   https://freecomputerbooks.com/Distributed-Systems-3rd-Edition.html#downloadLinks  </Text>
    <Text style={styles.title_1}>Web Programing Documentation:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://readthedocs.org/projects/2017-web-development/downloads/pdf/latest/')}>https://readthedocs.org/projects/2017-web-development/downloads/pdf/latest/  </Text>
    <Text style={styles.title_1}> Web Programing Youtube Channel:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.youtube.com/results?search_query=web+programming+tutorial')}>
    https://www.youtube.com/results?search_query=web+programming+tutorial </Text>


  </View>
</ScrollView>
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
    marginBottom:10,
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
      fontSize:15,

        // alignItems:"center",
       alignSelf:"flex-start",
       marginBottom:5,
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
      padding:30, 
      backgroundColor:'white',
      // backgroundColor:'#F3CCFF',
    },
    logo:{
        // marginTop:5,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:5
        
    }
})
export default WebProgramPage;