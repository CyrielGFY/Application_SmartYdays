import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Page de réinitialisation du mot de passe
 * @class PasswordResetScreen
 * @extends {Component}
 */
class PasswordResetScreen extends Component {
    
    /**
     * Masque le header
     * @static
     * @memberof PasswordResetScreen
     */
    static navigationOptions = {
        header: null
    }

    /**
     * Création de la page
     * @returns
     * @memberof PasswordResetScreen
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Password Reset Screen</Text>  
                </View>
            </View>
        );
    }
}

//Styles utilisés dans la page
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default PasswordResetScreen;