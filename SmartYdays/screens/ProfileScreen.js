import React, {Component } from 'react';
import {View, Text} from 'react-native';

class ProfileScreen extends Component {

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