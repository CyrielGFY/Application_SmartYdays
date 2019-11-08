import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class ProjectPage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="list" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'#6610f2'}
                    leftComponent={<Icon name="menu" style={{color: '#FFF'}} onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={{text: 'Proposer un projet', style:{color: '#FFF'} }}
                    rightComponent={<Icon name={'contact'} style={{color: '#FFF'}}/>}
                />
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
export default ProjectPage;