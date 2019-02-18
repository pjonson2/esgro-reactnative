import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';
import { LinearGradient, Font, AppLoading } from 'expo';
import RF from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var { height, width } = Dimensions.get('window');

export default class SplashScreen extends React.Component {

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth = () => {
        setTimeout(() => {
            this.props.navigation.navigate('InitialScreen');
        }, 3000);
    }

    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View
                style={styles.bgStyle}
            >
                <LinearGradient
                    colors={['#3B5F7A', '#2C3251']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
                    style={styles.linearGradient}>
                    <StatusBar backgroundColor='#FED053'
                        barStyle="light-content" />
                    <View style={[styles.container]}>
                        <View style={styles.logoView}>
                            <Image
                            source={require('../../assets/img/logo.png')}
                            style={styles.logoStyle}
                        />
                        </View>
                        <View style={styles.copyView}>
                            <Text style={styles.version}>v1.0</Text>
                            <Text style={styles.copyrights}>&#169; 2018 UPVENTRIX</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    br: {
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    linearGradient: {
        height: height,
    },
    bgStyle: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logoView: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    logoStyle: {
        width: wp(70),
        height: '100%',
        resizeMode: 'contain'
    },
    version: {
        position: 'relative',
        textAlign: 'center',
        marginBottom: hp(3),
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: RF(2)
    },
    copyView: {
        width: '100%',
        height: hp(10),
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    copyrights: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: RF(2)
    }
});