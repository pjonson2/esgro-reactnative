import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class SignUpScreen extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        touchID: true,
        condition: true
    };

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onTrems = () => {
        // this.props.navigation.navigate('SignInScreen');
        console.log('onTrems')
    }

    onBack = () => {
        this.props.navigation.navigate('InitialScreen');
        console.log('initial screen')
    }

    onContinue = () => {
        // this.props.navigation.navigate('SignInScreen');
        console.log(
            'Username: ' + this.state.username + '\n' + 
            'Password: ' + this.state.password + '\n' + 
            'Condition: ' + this.state.condition + '\n' +
            'touch ID: ' + this.state.touchID
            );
        console.log('Continue');
        this.props.navigation.navigate('MobileVerificationScreen');
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
                            Sign Up
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
                                        <Label>FIRST NAME</Label>
                                        <Input
                                            name="firstname"
                                            onChangeText={(value) => this.setState({ firstname: value })}
                                            value={this.state.firstname}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>LAST NAME</Label>
                                        <Input
                                            name="lastname"
                                            onChangeText={(value) => this.setState({ lastname: value })}
                                            value={this.state.lastname}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>USERNAME</Label>
                                        <Input
                                            name="username"
                                            onChangeText={(value) => this.setState({ username: value })}
                                            value={this.state.username}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>EMAIL</Label>
                                        <Input
                                            name="email"
                                            onChangeText={(value) => this.setState({ email: value })}
                                            value={this.state.email}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>PASSWORD</Label>
                                        <Input
                                            secureTextEntry={true}
                                            name="password"
                                            onChangeText={(value) => this.setState({ password: value })}
                                            value={this.state.password}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>RE-TYPE PASSWORD</Label>
                                        <Input
                                            secureTextEntry={true}
                                            name="c_password"
                                            onChangeText={(value) => this.setState({ c_password: value })}
                                            value={this.state.c_password}
                                        />
                                    </Item>
                                    <View
                                        style={[styles.fullWidthOnly]}
                                    >
                                        <ListItem style={[styles.removeZBottomBr]}>
                                            <Left>
                                                <Text style={[styles.graytext]}>Use touch ID</Text>
                                            </Left>
                                            <Body />
                                            <Right>
                                                <Switch 
                                                onValueChange={(value) => this.setState({ touchID: value })}
                                                value={this.state.touchID} 
                                                />
                                            </Right>
                                        </ListItem>
                                        <View style={[styles.fullWidthOnly, styles.btncenterView]}>
                                            <Button transparent
                                                style={[styles.centerView]}
                                                onPress={this.onTrems}
                                            >
                                                <Text style={[styles.greenText]}>Terms and Conditions</Text>
                                            </Button>
                                        </View>

                                    </View>
                                </Form>
                                <View style={[styles.fullWidthOnly, styles.centerView]}>
                                    <ListItem style={[styles.fullWidthOnly, styles.centerView, styles.removeZBottomBr]}>
                                        <CheckBox 
                                        onPress={() => this.setState({ condition: !this.state.condition })}
                                        checked={this.state.condition} color="#5BDA31" />
                                        <Body>
                                            <Text 
                                            style={[styles.graytext]}
                                            onPress={() => this.setState({ condition: !this.state.condition })}
                                            >I agree with terms & conditions</Text>
                                        </Body>
                                    </ListItem>
                                </View>

                            </View>
                        </Body>
                    </Card>
                    <View
                        style={[styles.bottomView, styles.centerView]}>
                        <View style={[styles.btnView]}>
                            <Button rounded block
                                style={[styles.btnStyle, styles.btnGreenView]}
                                onPress={this.onContinue}
                            >
                                <Text style={[styles.whiteText]}>Continue</Text>
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
    },
    removeZBottomBr: {
        borderBottomWidth: 0,
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
    btncenterView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    fullWidthOnly: {
        width: wp(80),
    },
    btnGreenView: {
        backgroundColor: '#5BDA31',
    },
    greenText: {
        fontWeight: '600',
        color: '#5BDA31'
    },
    graytext: {
        padding: wp(1),
        color: '#929AAB',
        fontWeight: '300',
        fontSize: RF(2)
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
        height: hp(10),
        padding: wp(3),
        marginTop: hp(3),
        marginBottom: hp(3)
    },
    textLigter: {
        fontWeight: '200'
    },
    paddingleft: {
        paddingLeft: wp(3)
    }
});