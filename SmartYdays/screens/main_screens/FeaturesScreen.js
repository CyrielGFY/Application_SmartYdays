import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import MainHeader from '../../components/Header';

class FeaturesScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="bulb" style={{ fontSize: 24, color: tintColor }} />
        )
    }   
    render() {
        return (
            <View style={styles.container}>
                <MainHeader headerName='Fonctionnalités' onPressEvent = {this.props.navigation.openDrawer} myNavigation = {this.props.navigation}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Features Page</Text>
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
export default FeaturesScreen;