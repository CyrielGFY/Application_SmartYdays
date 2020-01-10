import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import MainHeader from '../../components/Header';

/**
 * Page des fonctionnalités
 * @class FeaturesScreen
 * @extends {Component}
 */
class FeaturesScreen extends Component {
    
    /**
     *Ajout de l'icone utilisé dans le navigateur
     * @static
     * @memberof FeaturesScreen
     */
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="bulb" style={{ fontSize: 24, color: tintColor }} />
        )
    }   

    /**
     * Creation de la page
     * @returns
     * @memberof FeaturesScreen
     */
    render() {
        return (
            <View style={styles.container}>
                <MainHeader headerName='Fonctionnalités' onPressEvent = {this.props.navigation.openDrawer} myNavigation = {this.props.navigation}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Features Page</Text>
                </View>
            </View>
        );
    }
}

//Utilisation de styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default FeaturesScreen;