import React, { Component } from 'react';
import {
    Image, 
    TextInput,
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView
    } from 'react-native';

/**
 * Ecran d'inscription
 * @class RegisterScreen
 * @extends {Component}
 */
class RegisterScreen extends Component {

    /**
     * Masquage du header
     * @static
     * @memberof RegisterScreen
     */
    static navigationOptions = {
        header: null
    }

    /**
     *Creation de la page
     * @returns
     * @memberof RegisterScreen
     */
    render() {
        return (
            <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <KeyboardAvoidingView behavior="padding">
                    <TextInput 
                        placeholder="Adresse Email" 
                        placeholderTextColor="#000" 
                        returnKeyType="next"
                        keyboardType="email-address"
                        onSubmitEditing={()=> this.passwordInput.focus()}
                        style={styles.input}
                    />    
                    <TextInput 
                        placeholder="Mot de passe" 
                        placeholderTextColor="#000" 
                        secureTextEntry 
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate("Home")}>Inscription</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

//Creation de styles utilisés dans la page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9b59b6",
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: "#9b59b6",
    },
    logo: {
        width: 80,
        height: 80
    },
    input: {
        height: 40,
        marginHorizontal: 30,
        backgroundColor: '#FFF',
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 50
    },
    buttonContainer: {
        marginHorizontal: 30,
        marginBottom: 20,
        backgroundColor: "#8e44ad",
        paddingVertical: 15,
        borderRadius: 50
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
export default RegisterScreen;