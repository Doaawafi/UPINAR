
import React from "react";
import { View,Text,StyleSheet,Image,Linking ,ScrollView} from "react-native";
import ART from '../../../assets/images/ART.jpg' ;
const AIPage =()=>{

    return(
<ScrollView>
<View style={styles.root}>
    <Image source={ART} style={styles.logo}  resizeMode="contain"/>
    <Text style={styles.title}>  Artificial Intelligence Course </Text>
    <Text style={styles.text}>Describtion About Course :</Text>
    <Text style={styles.text_1}>In this course we will learn <Text style={styles.text_2}> ARTIFICAL INTELEGANT</Text > , <Text style={styles.text_2}> Artifical Intelagent</Text>  is the simulation of human intelligence processes by machines, especially computer systems.</Text>
    <Text style={styles.text_1}>   ADV: Science is a previous course of operating systems </Text>
    <Text style={styles.text_3}> Course Contant :</Text>

    <Text style={styles.title_1}> Book Link:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.cigionline.org/articles/cyber-security-battlefield/?utm_source=google_ads&utm_medium=grant&gclid=CjwKCAiAy_CcBhBeEiwAcoMRHPHGxcViSvTy59iQZHLSUS_FVy91ZtLv4p03VAHAFbfKuNxJmRkUdBoCuP0QAvD_BwE')}>
  https://www.cigionline.org/articles/cyber-security-battlefield/?utm_source=google_ads&utm_medium=grant&gclid=CjwKCAiAy_CcBhBeEiwAcoMRHPHGxcViSvTy59iQZHLSUS_FVy91ZtLv4p03VAHAFbfKuNxJmRkUdBoCuP0QAvD_BwE  </Text>
    <Text style={styles.title_1}> Artificial Intelligence  Documentation:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.domaonline.com/artificial-intelligence/')}>
   https://www.domaonline.com/artificial-intelligence/ </Text>
    <Text style={styles.title_1}> Artificial Intelligence  Youtube Channel:</Text>
    <Text style={styles.link} 
     onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=FWOZmmIUqHg')}>
    https://www.youtube.com/watch?v=FWOZmmIUqHg</Text>
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
    marginBottom:5


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
       marginBottom:5,
       color:'black',
      //  alignItems:"center",
       alignSelf:'flex-start',
       fontSize:20,
       fontWeight:'bold'
    },
    text_3:{
      // fontFamily:'arail',
       marginBottom:5,
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
      padding:15, 
      backgroundColor:'white',
      // backgroundColor:'#F3CCFF',
      // marginBottom:900,

     
    },
    logo:{
        marginTop:2,
        height:110,
        maxWidth:300,
        width:'70%',
        marginBottom:5
        
    }
})
export default AIPage;