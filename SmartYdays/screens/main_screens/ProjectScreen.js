import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import MainHeader from '../../components/Header';

/**
 * Page de gestion des projets
 * @class ProjectScreen
 * @extends {Component}
 */
class ProjectScreen extends Component {

    /**
     * Ajout de l'icon visible dans le navigateur
     * @static
     * @memberof ProjectScreen
     */
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="clipboard" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    /**
     * Creation de la page
     * @returns
     * @memberof ProjectScreen
     */
    render() {
            return (
                <View style={styles.container}>
                    <MainHeader 
                        headerName='Proposer un projet' 
                        onPressEvent = {this.props.navigation.openDrawer} 
                        myNavigation = {this.props.navigation}                        
                    />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Project Page</Text>
                    </View>
                </View>
            );
    }
}

//Style utilisés
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default ProjectScreen;