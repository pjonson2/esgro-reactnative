import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class SignInScreen extends Component {

    state = {
        username: '',
        password: ''
    };

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.navigate('InitialScreen');
        console.log('initial screen')
    }

    onContinue = () => {
        // this.props.navigation.navigate('SignInScreen');
        console.log('Username: '+ this.state.username +'\n'+'Password: '+ this.state.password);
        console.log('Continue');
        this.props.navigation.navigate('TabNavigator');
    }

    onForgot = () => {
        // this.props.navigation.navigate('SignInScreen');
        console.log('onForgot')
    }

    onStart = () => {
        this.props.navigation.navigate('SignUpScreen');
        console.log('SignUpScreen screen')
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
                        <Title
                            style={[styles.headerTitle]}
                        >
                            Sign In
                        </Title>
                    </Body>
                    <Right />
                </Header>
                {/* end of header section */}

                <Content
                    style={[styles.contentStyle]}
                >
                    <Card
                        style={[styles.cardStyle]}
                        borderRadius={10}
                    >
                        <Body>
                            <View style={[styles.centerView]}>
                                <Form
                                    style={[styles.inputView]}>
                                    <Item floatingLabel>
                                        <Label>EMAIL</Label>
                                        <Input
                                            name="username"
                                            onChangeText={(value) => this.setState({ username: value })}
                                            value={this.state.username}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>PASSWORD</Label>
                                        <Input
                                            name="password"
                                            secureTextEntry={true}
                                            onChangeText={(value) => this.setState({ password: value })}
                                            value={this.state.password}
                                        />
                                    </Item>
                                </Form>
                                <View style={[styles.fullWidth, styles.alignRight]}>
                                    <Button transparent
                                        onPress={this.onForgot}
                                    >
                                        <Text style={[styles.greenText]}>Forgot?</Text>
                                    </Button>
                                </View>
                                <View style={[styles.btnView]}>
                                    <Button rounded block
                                        style={[styles.btnStyle, styles.btnGreenView]}
                                        onPress={this.onContinue}
                                    >
                                        <Text style={[styles.whiteText]}>Continue</Text>
                                    </Button>
                                </View>
                            </View>
                        </Body>
                    </Card>
                    <View
                        style={[styles.bottomView, styles.centerView]}>
                        <Text style={[styles.textLigter]}>Don't have an account ?</Text>
                        <View style={[styles.btnView]}>
                            <Button rounded block
                                style={[styles.btnStyle]}
                                onPress={this.onStart}
                            >
                                <Text style={[styles.greenText]}>Get Started</Text>
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
    headerTitle: {
        fontWeight: '300',
        fontSize: RF(3)
    },
    cardStyle: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        padding: wp(5),
        paddingBottom: hp(10),
    },
    inputView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnView: {
        width: wp(60),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: hp(2),
        marginTop: hp(2),
    },
    btnStyle: {
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
    },
    fullWidth: {
        width: '100%',
        paddingTop: wp(5),
        paddingBottom: wp(5),
    },
    alignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottomView: {
        flex: 1,
        height: hp(25),
        padding: wp(5),
        marginTop: hp(5),
        marginBottom: hp(5)
    },
    textLigter: {
        fontWeight: '200'
    }
});