import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ContactUsScreen from '../screens/ContactUs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';
import CustomDrawer from '../drower/custom_drawer';
// import { useNavigation } from "@react-navigation/native";



const Drawer = createDrawerNavigator();

function MyDrawer() {
  // const navigation =useNavigation();

//   const onImafePressed=()=>{
//     // console.warn('login');
//     // navigation.navigate('My Courses');
//     // navigation.navigate('My Courses');
//     navigation.navigate('SignIn');
    
// }
  return (
    // <NavigationContainer>
        <Drawer.Navigator  
        drawerContent={props => <CustomDrawer {...props}
        screenOptions={{
        
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            // fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}
        
        />} >
          <Drawer.Screen name="My Courses" component={HomeScreen} options={{headerShown:true ,headerStyle:{backgroundColor:'#E8E8E8'}}}   />
          <Drawer.Screen name="Profile" component={ProfileScreen}  options={{headerShown:true ,headerStyle:{backgroundColor:'#D09CFA'}}} />
          <Drawer.Screen name="Contact Us" component={ContactUsScreen} options={{headerShown:true ,headerStyle:{backgroundColor:'#B2B2B2'}}}  />
        </Drawer.Navigator>
    // </NavigationContainer>
    
  );
}

export default MyDrawer;