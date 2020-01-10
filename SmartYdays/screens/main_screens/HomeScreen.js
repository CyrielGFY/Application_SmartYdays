import React, { Component } from 'react';
import { Text ,View, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import MainHeader from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
/**
 * Page d'accueil
 * 
 * @class HomeScreen
 * @extends {Component}
 */
class HomeScreen extends Component {

    /**
     * Creation de l'icone affiché dans le navigateur
     * @static
     * @memberof HomeScreen
     */
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />        
        )
    }
    
    /**
     * Creation de la page d'accueil
     * @returns
     * @memberof HomeScreen
     */
    render() {
        return (
            <View style={styles.container}>
                <MainHeader 
                    headerName='Accueil' 
                    onPressEvent = {this.props.navigation.openDrawer} 
                    myNavigation = {this.props.navigation}                    
                />
                <ScrollView style={styles.container}>
                    <View style={styles.firstView}>
                        <Text style={{margin: 5}}>La plateforme professionnelle pour les journées YDays</Text>
                    </View>
                    <View style={styles.secondView}>
                        <Text style={{margin: 5}}>Faciliter la gestion de vos projets grâce aux étudiants d'Ynov Campus Aix-en-Provence.</Text>
                    </View>
                    <View style={styles.firstView}>
                        <Text style={{margin: 5}}>YDays, c'est quoi ?
                                Tous les étudiants de toutes les filières (Informatique, Créa, Business) travaillent en groupes (Bachelors ou Mastères) tout au long de l'année sur des projets portés par des entreprises, des associations, les étudiants eux-mêmes ou par le campus, accompagnés par une équipe de 7 professionnels encadrants.
                                Les projets sont divers et variés (jeux vidéos, hologramme, roman graphique, objets connectés, applications mobiles, sites web... : cette plateforme SmartYDays est elle-même intégralement conçue et développée par des étudiants d'Ynov Aix-en-Provence) et toutes les compétences enseignées à Ynov sont mises à contribution : management, développement informatique, sécurité et réseaux, marketing, communication, graphisme, 3D...
                                Les YDays sont à la fois pédagogiques et professionalisants... et les enjeux sont réels !
                        </Text>
                    </View>
                    <View style={styles.secondView}>
                        <Text style={{margin: 5}}>Comment devenir commanditaire ?
                                Vous avez un projet et vous voulez le proposer à nos équipes ? Déposez votre note de cadrage en indiquant vos attentes, vos objectifs etc..
                                Par la suite, vous recevrez une confirmation ou une demande d’informations complémentaires. Et c’est parti !
                        </Text>
                    </View> 
                </ScrollView>
            </View>
        );
    }
}

//Creation de styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#482288'
        },
    firstView: {
        margin: 10,
        backgroundColor: '#aaa',
        borderRadius: 10,
    },
    secondView: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    }
});

export default HomeScreen;