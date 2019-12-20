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

class RegisterScreen extends Component {

    static navigationOptions = {
        header: null
    }

    _userLogin() {
        //se connecte à l'adresse IP et fait un post    
        fetch("http://10.13.1.215:80/public/registerCustomer", {
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
            //Charge la valeur du token dans la variable globale
            if(Platform.OS == "android")
            {
                this._onValueChange(GlobalVariables.STORAGE_KEY, responseData.id_token)
            }
            else if (Platform.OS =="ios")
            {
                this._onValueChange(GlobalVariables.STORAGE_KEY, responseData.token)
            }
            //Indique que l'utilisateur est connecté et le log
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