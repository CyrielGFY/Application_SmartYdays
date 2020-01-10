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

import { LinearGradient } from 'expo-linear-gradient';

import globalVariables from '../../utils/GlobalVariables'
import globalStyles from '../../components/styles';

class LoginScreen extends Component {

    //Masque le header du composant de navigation
    static navigationOptions = {
        header: null
    };

    /**
     *Creation des variables du LoginScreen
     * @param {*} props
     * @memberof LoginScreen
     */
    constructor(props){
        super(props);
        this.state = {
            username: "john.doe@ynov.com",
            password: "test",
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
                this._onValueChange(globalVariables.STORAGE_KEY, responseData.token);
                console.log(responseData.token);
                Toast.showSuccess('Connecté');
                globalVariables.ISCONNECTED = true
                console.log(globalVariables.ISCONNECTED)
                //Navigue vers la page d'accueil
                this.props.navigation.navigate("Home")
            })
            //Si erreur on la log
            .catch((error) => { 
                console.log(error)
                Toast.showSuccess('Erreur de connexion, veuillez réessayer');
            })
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
            <LinearGradient start={{x: 0.25, y: 0}} end={{x: 1, y: 0}} colors={['#482288','#382387']} style={styles.container}>
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
                        <Text style={styles.text}>
                            {'Connectez vous avec les identifiants fournis par l\'administration'}
                        </Text>
                        <TextInput 
                            placeholder="Adresse Email" 
                            placeholderTextColor="#aaa" 
                            returnKeyType="next"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.passwordInput.focus()}
                            onChangeText={ username => this.setState({username})}
                            style={globalStyles.input}
                        />    
                        <TextInput 
                            placeholder="Mot de passe" 
                            placeholderTextColor="#aaa"
                            secureTextEntry 
                            returnKeyType="go"
                            onChangeText={ password => this.setState({password})}
                            ref={(input) => this.passwordInput = input}
                            style={globalStyles.input}
                        />
                        <TouchableOpacity style={globalStyles.buttonContainer}>
                            <Text style={globalStyles.buttonText} onPress={this._userLogin.bind(this)}>Connexion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <TouchableOpacity style={globalStyles.buttonPasswordForgot}>
                            <Text style={styles.buttonPasswordForgotText} onPress={()=>this.props.navigation.navigate("PasswordResetScreen")}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        );
    }
}

//Creation de styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft : 10,
        paddingRight : 10, 
        paddingHorizontal: 10,
        marginHorizontal: 30,
        color: '#FFF',
    },
    buttonPasswordForgotText: {
        textAlign: 'center',
        color: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'stretch'
    }
});
  
export default LoginScreen;