import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useNavigation } from "@react-navigation/native";


import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
    const navigation =useNavigation();

    const onLogOutPressed=()=>{
        navigation.navigate('SignIn')}


  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../../assets/images/BIM.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/images/DD.jpeg')}
            style={{height: 75, width: 75, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
           Doaa Wafi
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              doaawafi2000@gmail.com
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 80,}}>
        {/* <Text style={{color:'black',fontSize:11,fontWeight:'bold' }}>Univercity Of Palestine</Text> */}
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text onPress={onLogOutPressed}
              style={{
                fontSize: 15,
                fontWeight:'bold',
                color:"black",
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
             Log Out 
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{color:'black',fontSize:11,fontWeight:'bold' ,marginTop:15}}>Univercity Of Palestine</Text>

      </View>
    </View>
  );
};


export default CustomDrawer;