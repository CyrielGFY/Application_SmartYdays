import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import MainHeader from '../../components/Header';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../../components/styles'

/**
 * Page de contact
 * @class ContactScreen
 * @extends {Component}
 */
class ContactScreen extends Component {

    /**
     * Ajout de l'icone utilisé dans le navigateur
     * @static
     * @memberof ContactScreen
     */
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="chatbubbles" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    /**
     *Ceation de variables.
     * @param {*} props
     * @memberof ContactScreen
     */
    constructor(props){
        super(props);
        this.state = {
            mail: null,
            message: null,
        }
    }

    /**
     * Fonction qui permet d'envoyer un message avec le mail du contact et son contenu
     * @memberof ContactScreen
     */
    _contactPost() {
        //se connecte à l'adresse IP et fait un post    
        fetch("http://10.13.1.215:80/public/contactUs", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            //recupère les valeurs des variables et parse en JSON
            body: JSON.stringify({
            mail: this.state.mail,
            message: this.state.message,
            captcha: null,
            }),
        },
        //Log les username et les mdp
        console.log(this.state.mail, this.state.message)
        )
        //Si la reponse ne retourne pas d'erreur il recupere le token sinon il lance une erreur
        .then((response) => {    
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        //Recupere les données (token)
        .then((responseData) => {
            console.log(responseData.token);
            Toast.showSuccess('Message envoyé');
        })
        //Si erreur on la log
        .catch((error) => { 
            console.log(error)})
        .done();
    }

    /**
     * Creation de la page
     * @returns
     * @memberof ContactScreen
     */
    render() {
        return (
            <View style={styles.container}>
                <MainHeader headerName='Contact' onPressEvent = {this.props.navigation.openDrawer} myNavigation = {this.props.navigation}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput 
                            placeholder="Adresse Email" 
                            placeholderTextColor="#000" 
                            returnKeyType="next"
                            keyboardType="email-address"
                            onSubmitEditing={()=> this.messageInput.focus()}
                            onChangeText={ mail => this.setState({mail})}
                            style={globalStyles.input}
                        />    
                        <TextInput 
                            placeholder="Votre message" 
                            placeholderTextColor="#000" 
                            returnKeyType="go"
                            onChangeText={ message => this.setState({message})}
                            ref={(input) => this.messageInput = input}
                            style={globalStyles.input}
                        />
                        <TouchableOpacity style={globalStyles.buttonContainer}>
                            <Text onPress={() => this._contactPost()}>Envoyer</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//Styles utilisés dans la page
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
export default ContactScreen;