import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar,
    Dimensions
} from 'react-native';
import { LinearGradient, Font, AppLoading } from 'expo';
import RF from 'react-native-responsive-fontsize';
import { Container, Header, Content, Button } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var { height, width } = Dimensions.get('window');

export default class InitialScreen extends React.Component {

    componentDidMount() {
    }

    onSignin = () => {
        this.props.navigation.navigate('SignInScreen');
        console.log('sign in screen')
    }

    onStart = () => {
        this.props.navigation.navigate('SignUpScreen');
        console.log('SignUpScreen screen')
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
                        <Text style={styles.welcomenote}>Welcome To Esgro</Text>
                        <View style={[styles.logoView]}>
                            <Image
                                source={require('../../assets/img/logowithcity.png')}
                                style={styles.logoStyle}
                            />
                        </View>
                        <View style={[styles.copyView]}>
                            <View style={[styles.btnView]}>
                                <Button rounded block
                                    style={[styles.btnStyle, styles.btnGreenView]}
                                    onPress={this.onSignin}
                                >
                                    <Text style={[styles.whiteText]}>Sign In</Text>
                                </Button>

                                <Button rounded block
                                    style={[styles.btnStyle]}
                                    onPress={this.onStart}
                                >
                                    <Text style={[styles.greenText]}>Get Started</Text>
                                </Button>
                            </View>
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
        borderColor: '#000000'
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
        height: hp(30),
    },
    logoStyle: {
        width: wp(70),
        height: '100%',
        resizeMode: 'contain'
    },
    welcomenote: {
        textAlign: 'center',
        marginBottom: hp(3),
        color: '#ffffff',
        fontSize: RF(4),
        fontWeight: '400'
    },
    copyView: {
        width: '100%',
        height: hp(35),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    btnView: {
        width: wp(80),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        marginBottom: hp(2),
        marginTop: hp(2),
        borderRadius: wp(10),
        backgroundColor: '#FFFFFF',
    },
    full: {
        width: '100%',
        height: '100%'
    },
    btnGreenView: {
        backgroundColor: '#5BDA31',
    },
    greenText: {
        fontWeight: '600',
        color: '#5BDA31'
    },
    whiteText: {
        fontWeight: '600',
        color: '#ffffff'
    }

});