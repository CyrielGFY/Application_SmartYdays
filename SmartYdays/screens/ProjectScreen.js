import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import ScreenHeader from '../components/Header';

class ProjectScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="clipboard" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScreenHeader headerName='Proposer un projet' onPressEvent = {this.props.navigation.openDrawer} myNavigation = {this.props.navigation}/> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Project Page</Text>
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
export default ProjectScreen;