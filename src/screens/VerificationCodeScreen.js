import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import TimerCountdown from 'react-native-timer-countdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PhoneInput from 'react-native-phone-input';
export default class VerificationCodeScreen extends Component {

    state = {
        contry: '',
        mobile: ''
    };

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.navigate('MobileVerificationScreen');
        console.log('MobileVerification screen')
    }

    onContinue = () => {
        this.props.navigation.navigate('ProfileCompleteScreen');
        console.log('Username: ' + this.state.username + '\n' + 'Password: ' + this.state.password);
        console.log('ProfileCompleteScreen')
    }

    updateInfo() {
        this.setState({
            value: this.phone.getValue()
        });
    }

    render() {
        return (
            <Container
                style={[styles.bgView]}
            >
                {/* header section */}
                <Header transparent>
                    <Left>
                        <Button transparent
                            onPress={this.onBack}
                        >
                            <Icon name='ios-arrow-back' style={{ fontSize: RF(3), color: '#000000' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title />
                    </Body>
                    <Right />
                </Header>
                {/* end of header section */}
                <Content
                    style={[styles.contentStyle]}
                >

                    <View style={[styles.verifyView, styles.centerView]}>
                        <View style={styles.logoView}>
                            <Image
                                source={require('../../assets/img/virification.png')}
                                style={styles.logoStyle}
                            />
                        </View>
                        <Text style={[styles.title]}>Enter Verification Code</Text>
                        <Text style={[styles.graytext, styles.textCenter]}>We have sent a code to your phone enter the code below</Text>
                        <View
                            style={[styles.full]}
                        >
                            <Input keyboardType='numeric' maxLength={1} style={[styles.borderBottom]} /><Input keyboardType='numeric' maxLength={1} style={[styles.borderBottom]} /><Input keyboardType='numeric' maxLength={1} style={[styles.borderBottom]} /><Input keyboardType='numeric' maxLength={1} style={[styles.borderBottom]} />
                        </View>
                        <View style={[styles.full]}>
                            <Text style={[styles.graytext]}>Send OTP</Text>
                        <TimerCountdown
                                initialSecondsRemaining={5000 * 60}
                                // onTick={secondsRemaining => console.log('tick', secondsRemaining)}
                                onTimeElapsed={() => console.log('try again')}
                                allowFontScaling={true}
                                style={[styles.graytext]}
                            />
                        </View>
                        <View>
                            <Button rounded block
                                style={[styles.btnView, styles.btnGreenView]}
                                onPress={this.onContinue}
                            >
                                <Icon name='ios-arrow-forward' style={{ fontSize: RF(3), color: '#FFFFFF' }} />
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    br: {
        borderWidth: 0.5,
        borderColor: '#000000'
    },
    bgView: {
        backgroundColor: '#F7F8FB'
    },
    contentStyle: {
        padding: wp(5)
    },
    verifyView: {
        flex: 1,
        height: hp(80)
    },
    centerView: {
        alignItems: 'center',
    },
    PhoneInputView: {
        width: wp(50),
        marginTop: hp(5),
        marginBottom: hp(5),
        borderBottomColor: '#929AAB',
        borderBottomWidth: 2,
    },
    logoView: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: hp(20),
    },
    logoStyle: {
        width: wp(30),
        height: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontSize: RF(3),
        padding: wp(1)
    },
    graytext: {
        padding: wp(1),
        color: '#929AAB',
        fontWeight: '300',
        fontSize: RF(2)
    },
    full: {
        width: wp(65),
        height: hp(15),
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnView: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 50/2,
        elevation: 5,
        marginBottom: hp(2),
        marginTop: hp(2),
    },
    btnStyle: {
        borderRadius: wp(15),
        backgroundColor: '#FFFFFF',
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
    },
    textCenter: {
        textAlign: 'center'
    },
    borderBottom: {
        width: wp(50),
        marginTop: hp(5),
        marginBottom: hp(5),
        borderBottomColor: '#929AAB',
        borderBottomWidth: 2,
        margin: wp(1),
    }
});