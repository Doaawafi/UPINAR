
import React from "react";
import { View,Text,StyleSheet,Image,Linking } from "react-native";
import diss from '../../../assets/images/diss.png' ;
import { color } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";


const DSPage =()=>{

    return(

<ScrollView >
<View style={styles.root}>
    <Image source={diss} style={styles.logo}  resizeMode="contain"/>
    <Text style={styles.title}>   Distributed Systems Course </Text>
    <Text style={styles.text}>Describtion About Course :</Text>
    <Text style={styles.text_1}>In this course we will learn <Text style={styles.text_2}> DISTRIBUTED SYSTEM</Text > , <Text style={styles.text_2}>Distributed System </Text>  a computing environment in which various components are spread across multiple computers (or other computing devices) on a network.</Text>
    <Text style={styles.text_1}>   ADV: Science is a previous course of operating systems </Text>
    <Text style={styles.text_3}> Course Contant :</Text>
    <Text style={styles.title_1}> Book Link:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://freecomputerbooks.com/Distributed-Systems-3rd-Edition.html#downloadLinks')}>
     https://freecomputerbooks.com/Distributed-Systems-3rd-Edition.html#downloadLinks  </Text>
    <Text style={styles.title_1}> Distributed Systems Documentation:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://users.cs.fiu.edu/~czhang/teaching/cop6611/slides/web.pdf')}>https://users.cs.fiu.edu/~czhang/teaching/cop6611/slides/web.pdf  </Text>
    <Text style={styles.title_1}> Distributed Systems Youtube Channel:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=sGzQT_ZrsFI')}>
    https://www.youtube.com/watch?v=sGzQT_ZrsFI </Text>


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
      fontSize:18,

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
export default DSPage;