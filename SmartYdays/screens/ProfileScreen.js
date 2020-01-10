import React, {Component } from 'react';
import {View, Text} from 'react-native';

/**
 * Page du profil de l'utilisateur
 * @class ProfileScreen
 * @extends {Component}
 */
class ProfileScreen extends Component {

    /**
     * Masquage du header
     * @static
     * @memberof ProfileScreen
     */
    static navigationOptions = {
        header: null
    }

    /**
     * Fonction qui retourne la view de ProfileModal
     * @returns
     * @memberof ProfileModal
     */
    render(){
        return(
            <View> 
                 <Text>Salut</Text>
            </View>
        )
    }
}

export default ProfileScreen;