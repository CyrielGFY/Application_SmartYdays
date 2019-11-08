import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, SectionList} from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class HomePage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />        
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor={'#6f42c1'}
                    leftComponent={<Icon name={'menu'} style={{color: '#FFF'}} onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={{text: 'Accueil', style:{color: '#FFF'} }}
                    rightComponent={<Icon name={'contact'} style={{color: '#FFF'}}/>}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ScrollView style={{flex: 1, marginHorizontal: 20}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <View style={{backgroundColor:'#6f67de'}}>
                        <Text style={{fontSize: 15}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                        </View>

                        <View style={{backgroundColor:'#fff'}}>
                        <Text style={{fontSize: 15}}>YDays, c'est quoi ?
Tous les étudiants de toutes les filières (Informatique, Créa, Business) travaillent en groupes (Bachelors ou Mastères) tout au long de l'année sur des projets portés par des entreprises, des associations, les étudiants eux-mêmes ou par le campus, accompagnés par une équipe de 7 professionnels encadrants.

Les projets sont divers et variés (jeux vidéos, hologramme, roman graphique, objets connectés, applications mobiles, sites web... : cette plateforme SmartYDays est elle-même intégralement conçue et développée par des étudiants d'Ynov Aix-en-Provence) et toutes les compétences enseignées à Ynov sont mises à contribution : management, développement informatique, sécurité et réseaux, marketing, communication, graphisme, 3D...

Les YDays sont à la fois pédagogiques et professionalisants... et les enjeux sont réels !</Text>
                        </View>

                        <View style={{backgroundColor:'#6f67de'}}>
                        <Text style={{fontSize: 30}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                        </View>

                        <View style={{backgroundColor:'#fff'}}>
                        <Text style={{fontSize: 30}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                        </View>

                        <View style={{backgroundColor:'#6f67de'}}>
                        <Text style={{fontSize: 30}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                        </View>

                        <View style={{backgroundColor:'#fff'}}>
                        <Text style={{fontSize: 30}}>La plateforme professionnelle pour les journées YDays
                        Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                        </View>
                    </ScrollView>
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