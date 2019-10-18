// Components/Search.js

import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='Test'/>
                <Button title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
}