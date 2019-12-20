import React, { Component } from 'react';
import { Header, Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import GlobalVariables from '../utils/GlobalVariables';

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
     * Retourne le header
     *
     * @returns
     * @memberof ScreenHeader
     */
    render() {
        const { headerName, onPressEvent, myNavigation} = this.props;
        return(
            <Header
                backgroundColor={'#6f42c1'}
                leftComponent={<Icon name={'menu'} style={{color: '#FFF'}} onPress={onPressEvent} />}
                centerComponent={{text: headerName, style:{color: '#FFF'} }}
                rightComponent={<Avatar 
                                    rounded icon={{name: 'user', type: 'font-awesome'}} 
                                    onPress={()=> {
                                        console.log(GlobalVariables.ISCONNECTED)
                                        switch(GlobalVariables.ISCONNECTED)
                                        {
                                            case true:
                                                this.props.myNavigation.navigate("ProfileScreen")
                                                break
                                            case false:
                                                this.props.myNavigation.navigate("LoginScreen")
                                                break
                                        };
                                    }
                                }/>}
            />
        );
    }
}

export default MainHeader;