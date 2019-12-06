import React, { Component } from 'react';
import {
    AsyncStorage,
    Image, 
    TextInput,
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView    
} from 'react-native';

import GlobalVariables from '../../utils/GlobalVariables'

import { CheckBox } from 'react-native-elements'

var STORAGE_KEY = 'id_token';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            username: null,
            password: null,
         }
    }

    _userLogin() {
          fetch("http://10.13.7.104:80/login_check", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                this._onValueChange(STORAGE_KEY, responseData.id_token)
                this.props.navigation.navigate("Home")
                GlobalVariables.ISCONNECTED = true
            })
            .catch((error) => {
                console.error(error)})
            .done();
    }

    async _onValueChange(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo} 
                        source={require('../../assets/logo.png')}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <View>
                        <TextInput 
                            placeholder="Adresse Email" 
                            placeholderTextColor="#000" 
                            returnKeyType="next"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.passwordInput.focus()}
                            onChangeText={(text) => this.state.username}
                            style={styles.input}
                        />    
                        <TextInput 
                            placeholder="Mot de passe" 
                            placeholderTextColor="#000" 
                            secureTextEntry 
                            returnKeyType="go"
                            style={styles.input}
                            onChangeText={(text) => this.state.password}
                            ref={(input) => this.passwordInput = input}
                        />
                        <CheckBox 
                            title='Rester connecté' 
                            center 
                            checkedIcon='dot-circle-o' 
                            uncheckedIcon='circle-o'
                            containerStyle={styles.checkBoxContainer}
                        />
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={this._userLogin.bind(this)}>Connexion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate("PasswordResetScreen")}>Mot de passe oublié</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate("RegisterScreen")}>Inscription</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9b59b6",
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
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
    },
    checkBoxContainer: {
        height: 40,
        marginHorizontal: 30,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 50        
    }
});
  
export default LoginScreen;