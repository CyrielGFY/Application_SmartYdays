import React,{Component} from "react";
import {
    AsyncStorage,
    Image,
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import GlobalVariables from "../../utils/GlobalVariables";
import {CheckBox} from "react-native-elements";
import Toast from 'react-native-tiny-toast'

class DisconnectScreen extends Component {
    static navigationOptions = {
        header: null
    }
    _userLogout() {
        STORAGE_KEY = 0;
        GlobalVariables.ISCONNECTED = false
        Toast.showSuccess('Deconnecté');
        this.props.navigation.navigate("Home")
    }




    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Disconnect</Text>
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={this._userLogout.bind(this)}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default DisconnectScreen;