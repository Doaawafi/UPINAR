import React from "react";

import {View,Text,StyleSheet,Dimensions,Image } from 'react-native';


const CustomCard =({text,onPress})=>{
    return(
<View style={styles.cardContainer}>
<Image  style={styles.image}  source={require('../../../assets/images/mobile.png')}/>
<View style={styles.space}>
<Text style={styles.text}  onPress={onPress}>{text}</Text>
<Text style={styles.text_1} >الفصل الدراسي الأول لعام 2022/2023</Text>
</View>
</View>


    );
}

const devicewidth=Math.round(Dimensions.get("window").width)
const styles =StyleSheet.create({
   
    cardContainer:{
        alignSelf:'center',
        marginTop:30,
        width:devicewidth-30,
        height:200,
        // backgroundColor:'#a29bfe',
        backgroundColor:'white',

        borderRadius:20,
        shadowColor:'black',
        shadowOffset:{
            height:5,width:5
        },
        shadowOpacity:0.75,
        shadowRadius:5,
        elevation:9
    },
    image:{
        height:120,
        width:devicewidth-30,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        opacity:0.9,
        alignContent:'center',
        alignSelf:'center'

        
    },
    text_1:{
       fontSize:15,
       fontWeight:'300',
       alignSelf:"center",
       marginTop:7,
    //    color:'black',
    },
    text:{
       fontSize:20,
       fontWeight:'800',
       color:'black',
    },
   
    root:{
        margin:50,
      alignItems:'center',
      padding:50,  
     
    },
    logo:{
        marginTop:5,
        height:100,
        maxWidth:300,
        width:'70%',
        marginBottom:5
    },
    space:{
        marginVertical:4,
        marginHorizontal:15,
    }
})


export default CustomCard;