import React, { Component } from 'react';
import { Button, View, SafeAreaView, ScrollView, Dimensions, Image, ColorPropType } from 'react-native';
import { createAppContainer, createNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import { Icon } from 'native-base';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import FeaturesPage from './components/pages/FeaturesPage';
import ProjectPage from './components/pages/ProjectPage';

const { width } = Dimensions.get("window"); 

const CustomDrawerNavigation = (props) => {
  return (
  <SafeAreaView style={{ flex: 1 }}>  
    <View style={{ backgroundColor: '#6f42c1'}}>
      <View style={{ height: 160, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/smartydays-white.min.png')} style={{ height: 53, width: 48}} />
      </View>
      <View style={{ height: 90, backgroundColor: 'Green', justifyContent: 'space-between' }}>
        <Button title={"Connexion"} color='#6f67de'></Button>
        <Button title={"Inscription"} color='#bdbdbd'></Button>
      </View>
    </View> 
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View style={{ alignItems: "center"}}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 160, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/smartydays-black-t.png')} style={{ height: 150, width: 150, resizeMode: 'contain'}} />
        </View>
      </View>
    </View>
  </SafeAreaView>
  );
}

  const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Accueil'
      }
    },
    Project: {
      screen: ProjectPage,
      navigationOptions: {
        title: 'Proposer un Projet'
      }
    },
    Features: {
      screen: FeaturesPage,
      navigationOptions: {
        title: 'Fonctionnalités'
      }
    },
    Contact: {
      screen: ContactPage,
      navigationOptions: {
        title: 'Contact'
      }
    }
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
    contentOptions: {
      activeTintColor: '#6f67de',
    }
  });

  const App = createAppContainer(DrawerNavigator);
  
  export default App;