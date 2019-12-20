import React, { Component } from 'react';
import { 
  View, 
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image 
  } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { 
  createAppContainer,
  createSwitchNavigator
  } from 'react-navigation';
import { 
  createDrawerNavigator,
  DrawerItems
  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/main_screens/HomeScreen';
import ContactScreen from '../screens/main_screens/ContactScreen';
import FeaturesScreen from '../screens/main_screens/FeaturesScreen';
import ProjectScreen from '../screens/main_screens/ProjectScreen';
import PasswordResetScreen from '../screens/auth_screens/PasswordResetScreen';
import LoginScreen from '../screens/auth_screens/LoginScreen';
import RegisterScreen from '../screens/auth_screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';

const { width } = Dimensions.get("window"); 



const CustomDrawerNavigation = (props) => {
  return (
  <SafeAreaView style={{ flex: 1 }}>  
    <View style={{ backgroundColor: '#6f42c1'}}>
      <View style={{ height: 160, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/smartydays-black-t.png')} style={{ height: 53, width: 48}} />
      </View>
    </View> 
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View style={{ alignItems: "center"}}>
      <View>
        <View style={{ height: 100, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/smartydays-black-t.png')} style={{ height: 100, width: 150, resizeMode: 'contain'}} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <SocialIcon type='facebook'/>
          <SocialIcon type='instagram'/>
          <SocialIcon type='twitter'/>
        </View>
      </View>
    </View>
  </SafeAreaView>
  );
}


const HomeDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  Project: {
    screen: ProjectScreen,
    navigationOptions: {
      title: 'Proposer un Projet'
    }
  },
  Features: {
    screen: FeaturesScreen,
    navigationOptions: {
      title: 'Fonctionnalités'
    }
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      title: 'Contact'
    }
  }
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    contentOptions: {
      activeTintColor: '#6f67de',
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
    initialRouteName :'Home'
  });

const LoginStack = createStackNavigator(
  { 
    LoginScreen:{
      screen:LoginScreen,
    }, 
    PasswordResetScreen:{screen:PasswordResetScreen},
  },
  {
    header: null
  }
);

const AuthNavigator = createBottomTabNavigator(
  { 
    LoginStack:{
      screen:LoginStack,
      navigationOptions: {
        title: "Connexion"
      }  
    }, 
    RegisterScreen:{
      screen:RegisterScreen, 
      navigationOptions: {
        title: "Inscription"
      }},  
  },
  {
    headerMode: 'none'
  }
);

const ProfileNavigator = createStackNavigator(
  {
    ProfileScreen:{screen:ProfileScreen}
  }
);

const RootSwitch = createSwitchNavigator(
  { 
    AuthNavigator:{screen:AuthNavigator}, 
    HomeNavigator:{screen:HomeDrawerNavigator},
    ProfileNavigator:{screen:ProfileNavigator},
  },
  {
    initialRouteName : 'HomeNavigator'
  }
);

export default createAppContainer(RootSwitch);