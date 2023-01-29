import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import PhotoScreen from './screens/PhotoScreen';;
import NovoScreen from './screens/PhotoScreen';;

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Nav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow
      }
  }}
  
  >
      <Tab.Screen name="Fotos" component={PhotoScreen} 
      options={{headerShown: false, tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('./assets/image.png')}
          resizeMode='contain'
          style={{
            width: 45,
            height: 45,
            tintColor: focused ? '#21283A' : '#748c94',
          }}
          />
          <Text style={{color: focused ? '#21283A' : '#748c94', fontSize:12, marginBottom: 15}}>Fotos</Text>
        </View>
      )}}
      />
      <Tab.Screen name="Novo" component={NovoScreen}
      
      />
      <Tab.Screen name="Account" defaultNavigation component={AccountScreen} 
      options={{headerShown: false, tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top:10}}>
          <Image
          source={require('./assets/user.png')}
          resizeMode='contain'
          style={{
            width: 45,
            height: 45,
            tintColor: focused ? '#21283A' : '#748c94',
          }}
          />
          <Text style={{color: focused ? '#21283A' : '#748c94', fontSize:12, marginBottom: 15}}>Conta</Text>
        </View>
      )}} />
      
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    shadowColor: '#193ed1',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
    
  },
});
