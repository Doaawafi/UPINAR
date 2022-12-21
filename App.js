

import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import MyDrawer from './src/drower/drower';
// import ContactUsScreen from './src/screens/ContactUs';
import Navigation from './src/navigation';
// import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';




const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Profile /> */}
      {/* <ContactUsScreen /> */}
     <Navigation />
     {/* <  HomeScreen/> */}
     {/* <MyDrawer/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
  flex:1,
  backgroundColor:'#FFFFFF'
 }
});

export default App;
