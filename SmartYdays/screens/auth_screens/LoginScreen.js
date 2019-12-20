import React, { Component } from 'react';
import Toast from 'react-native-tiny-toast';
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

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    /**
     * Fonction de connection
     * Récupération du token puis stockage de celui dans une variable globale
     * @memberof LoginScreen
     */
    _userLogin() {
            //se connecte à l'adresse IP et fait un post    
            fetch("http://10.13.1.215:80/login_check", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                //recupère les valeurs des variables et parse en JSON
                body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                }),
            },
            //Log les username et les mdp
            console.log(this.state.username, this.state.password)
            )
            //Si la reponse ne retourne pas d'erreur il recupere le token sinon il lance une erreur
            .then((response) => {    
                if(!response.ok) throw new Error(response.status);
                else return response.json();
            })
            //Recupere les données (token)
            .then((responseData) => {
                this._onValueChange(GlobalVariables.STORAGE_KEY, responseData.token);
                console.log(responseData.token);
                Toast.showSuccess('Connecté');
                GlobalVariables.ISCONNECTED = true
                console.log(GlobalVariables.ISCONNECTED)
                //Navigue vers la page d'accueil
                this.props.navigation.navigate("Home")
            })
            //Si erreur on la log
            .catch((error) => { 
                console.log(error)})

            .done();
    }

    /**
     * Stocke la valeur dans un storage
     *
     * @param {*} item Variable ou sera stocké la valeur
     * @param {*} selectedValue Valeur à stocker
     * @memberof LoginScreen
     */
    async _onValueChange(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, JSON.stringify(selectedValue));
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
    }

    /**
     * Constructeur de la view de LoginScreen
     * @returns
     * @memberof LoginScreen
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                    <Image 
                        style={styles.logo} 
                        source={require('../../assets/logo.png')}
                    />
                    <Text style={{textAlign: "center", color: '#FFF'}}>Accueil</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <View>
            <Text style={styles.text}>{'Connectez vous avec les identifiants fournis par l\'administration'}</Text>
                        <TextInput 
                            placeholder="Adresse Email" 
                            placeholderTextColor="#000" 
                            returnKeyType="next"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.passwordInput.focus()}
                            onChangeText={ username => this.setState({username})}
                            style={styles.input}
                        />    
                        <TextInput 
                            placeholder="Mot de passe" 
                            placeholderTextColor="#000" 
                            secureTextEntry 
                            returnKeyType="go"
                            style={styles.input}
                            onChangeText={ password => this.setState({password})}
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
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft : 10,
        paddingRight : 10,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'stretch'

    },
    input: {
        height: 40,
        marginHorizontal: 30,
        backgroundColor: '#FFF',
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 40
    },
    buttonContainer: {
        marginHorizontal: 30,
        marginBottom: 20,
        backgroundColor: "#8e44ad",
        paddingVertical: 15,
        borderRadius: 40
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
        borderRadius: 40
    }
});
  
export default LoginScreen;