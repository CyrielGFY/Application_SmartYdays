import React, { Component } from 'react';
import { Button, Text ,View, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import ScreenHeader from '../components/Header';

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />        
        )
        
    }
    render() {
        return (
            <View style={styles.container}>
                <ScreenHeader headerName='Accueil' onPressEvent = {this.props.navigation.openDrawer} myNavigation = {this.props.navigation}/>
                <View style={{flex: 1}}>
                    <View style={{ flex: 1}}>
                        <Text>La plateforme professionnelle pour les journées YDays</Text>
                        <Text>Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>    
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
        }
});
export default HomeScreen;