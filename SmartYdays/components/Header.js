import React, { Component } from 'react';
import { Header, Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import GlobalVariables from '../utils/GlobalVariables';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Header des pages appartenant au navigateur "Home"
 * @class MainHeader
 * @extends {Component}
 */
class MainHeader extends Component{
    
    /**
     * Creates an instance of ScreenHeader.
     * @param {*} props
     * @memberof ScreenHeader
     */
    constructor(props){
        super(props)
      }
    
    /**
     * Retourne le header selon l'état de la connexion (connecté/déconnecté)
     * @returns
     * @memberof ScreenHeader
     */
    render() {
        const { headerName, onPressEvent, myNavigation} = this.props;

        if(GlobalVariables.ISCONNECTED)
        {
            return(
                <LinearGradient start={{x: 0.25, y: 0}} end={{x: 1, y: 0}} colors={['#482288','#382387']} style={styles.container}>
                <Header
                    style={{backgroundColor: 'transparent'}}        
                    leftComponent={<Icon name={'menu'} style={{color: '#FFF'}} onPress={onPressEvent} />}
                    centerComponent={{text: headerName, style:{color: '#FFF'} }}
                    rightComponent={<Avatar 
                                        rounded icon={{name: 'user', type: 'font-awesome'}} 
                                        onPress={()=> {
                                            console.log(GlobalVariables.ISCONNECTED)
                                            switch(GlobalVariables.ISCONNECTED)
                                            {
                                                case true:
                                                    this.props.myNavigation.navigate("DisconnectScreen")
                                                    break
                                                case false:
                                                    this.props.myNavigation.navigate("LoginScreen")
                                                    break
                                            };
                                        }
                                    }/>}
                />
                </LinearGradient>
            );
        }
        else
        {
            return(
                <LinearGradient start={{x: 0.25, y: 0}} end={{x: 1, y: 0}} colors={['#482288','#382387']} style={styles.container}>
                <Header
                    backgroundColor={'transparent'}                
                    centerComponent={{text: headerName, style:{color: '#FFF'} }}
                    rightComponent={<Avatar 
                                        rounded icon={{name: 'user', type: 'font-awesome'}} 
                                        onPress={()=> {
                                            console.log(GlobalVariables.ISCONNECTED)
                                            switch(GlobalVariables.ISCONNECTED)
                                            {
                                                case true:
                                                    this.props.myNavigation.navigate("DisconnectScreen");
                                                    break;
                                                case false:
                                                    this.props.myNavigation.navigate("LoginScreen");
                                                    break;
                                            };
                                        }
                                    }/>}
                />
                </LinearGradient>
            );
        }

    }
}

export default MainHeader;