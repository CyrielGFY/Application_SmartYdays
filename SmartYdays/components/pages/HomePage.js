import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class HomePage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />        
        )
    }
    contentOp
    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'#6610f2'}
                    leftComponent={<Icon name={'menu'} style={{color: '#FFF'}} onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={{text: 'Accueil', style:{color: '#FFF'} }}
                    rightComponent={<Icon name={'contact'} style={{color: '#FFF'}}/>}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{fontFamily:'Roboto', alignItems: 'center', justifyContent: 'center'}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence. </Text>
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
export default HomePage;