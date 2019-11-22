import { Overlay } from 'react-native-elements';
import { Component } from 'react';

export default class RegisterOverlay extends Component {
    state = {modalVisible: true,
    }

    onClose = () => this.setState({modalVisible: false})

    render(){
        return(
            <Overlay visible={this.state.modalVisible} onBackdropPress={this.onClose}>
                <Text>Salut</Text>
            </Overlay>
        )
    }

}