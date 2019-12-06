import React, { Component } from 'react';
import { Header, Avatar } from 'react-native-elements';
import { Icon } from 'native-base';
import RegisterOverlay from './RegisterOverlay';
import GlobalVariables from '../utils/GlobalVariables';

class ScreenHeader extends Component{
    constructor(props){
        super(props)
      }
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
                                        switch(GlobalVariables.ISCONNECTED)
                                        {
                                            case false:
                                                this.props.myNavigation.navigate("LoginScreen")};
                                        }
                                }/>}
            />
        );
    }
}

export default ScreenHeader;