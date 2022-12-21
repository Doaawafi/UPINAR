import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import AIPage from '../screens/PageScreen/ArtificalIntelagent';
import DSPage from '../screens/PageScreen/DistributedSystem';
import MobilePage from '../screens/PageScreen/MobilePage';
import WebProgramPage from '../screens/PageScreen/Webprograming';
import PrivecyScreen from '../screens/PrivecyScreen';
import Reset from '../screens/Reset';
import SignInScreen from '../screens/SignInScreen';
import { color } from 'react-native-reanimated';
import MyDrawer from '../drower/drower';
import ContactUsScreen from '../screens/ContactUs';
import Profile from '../screens/Profile';



const Stack = createNativeStackNavigator();

function Navigation() {
  

  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false, headerStyle:{backgroundColor:'#82C3EC'} }  }>
          <Stack.Screen name="SignIn" component={SignInScreen}  />
          <Stack.Screen name="Forget Password" component={ForgetPasswordScreen} />
          <Stack.Screen name="My Courses" component={HomeScreen} options={{headerShown:true, headerStyle:{backgroundColor:'#82C3EC'}}} />
          <Stack.Screen name="privacy" component={PrivecyScreen} />
          <Stack.Screen name="Reset" component={Reset}   />
          <Stack.Screen name="MobilePrograming Course" component={MobilePage}  options={{headerShown:true }} />
          <Stack.Screen name="DistributedSystem Course" component={DSPage}  options={{headerShown:true}} />
          <Stack.Screen name="Artifical Intelagant Course" component={AIPage}  options={{headerShown:true}} />
          <Stack.Screen name="Web Programing Course" component={WebProgramPage}  options={{headerShown:true}} />
          <Stack.Screen name="my drawer" component={MyDrawer}  options={{headerShown:false}} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;