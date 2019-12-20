import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class PasswordResetScreen extends Component {
    
    static navigationOptions = {
        header: null
    }

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
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default PasswordResetScreen;