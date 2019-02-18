import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class ChangePasswordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current_password: '',
            new_password: '',
            new_c_password: ''
        };
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.goBack();
        console.log('go');
    }

    onBank = () => {
        this.props.navigation.push('BankAccountScreen');
        console.log('Continue');
    }

    onCard = () => {
        this.props.navigation.navigate('CreditCardScreen');
        console.log('Credit card screen')
    }

    onUpdate = () => {
        this.props.navigation.navigate('SettingsScreen');
        console.log('Updated Password');
    }

    render() {
        return (
            <Container
                style={[styles.bgView]}
            >
                {/* header section */}
                <LinearGradient colors={['#3B5F7A', '#2C3251']}
                    start={[0.0, 0.5]}
                    end={[1.0, 0.5]}
                    locations={[0.0, 1.0]}
                    style={styles.container}>
                    <Header transparent
                    >
                        <StatusBar
                            backgroundColor="blue"
                            barStyle="light-content"
                        />
                        <Left>
                            <Button transparent
                                onPress={this.onBack}
                            >
                                <Icon name='ios-arrow-back' style={{ fontSize: RF(3), color: '#ffffff' }} />
                                <Text style={[styles.whiteTextOnly]}>Back</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Title
                                style={[styles.headerTitle, styles.fullWidthOnly]}
                            >
                                CHANGE PASSWORD
                        </Title>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                {/* end of header section */}

                <Content
                    style={[styles.contentStyle]}
                >

                    <View
                        style={[styles.cardView]}
                    >
                        <Card
                            style={[styles.cardStyle]}
                        >
                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <Form
                                    style={[styles.inputView]}>
                                    <Item floatingLabel>
                                        <Label>CURRENT PASSWORD</Label>
                                        <Input
                                            secureTextEntry={true}
                                            name="current_password"
                                            onChangeText={(value) => this.setState({ current_password: value })}
                                            value={this.state.current_password}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>NEW PASSWORD</Label>
                                        <Input
                                            secureTextEntry={true}
                                            name="new_password"
                                            onChangeText={(value) => this.setState({ new_password: value })}
                                            value={this.state.new_password}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>CONFIRM NEW PASSWORD</Label>
                                        <Input
                                            secureTextEntry={true}
                                            name="new_c_password"
                                            onChangeText={(value) => this.setState({ new_c_password: value })}
                                            value={this.state.new_c_password}
                                        />
                                    </Item>
                                </Form>
                            </CardItem>
                        </Card>
                        <View
                        style={[styles.bottomView, styles.centerView]}>
                        <View style={[styles.btnView]}>
                            <Button rounded block
                                style={[styles.btnStyle, styles.btnGreenView]}
                                onPress={this.onUpdate}
                            >
                                <Text style={[styles.whiteText]}>Update Password</Text>
                            </Button>
                        </View>
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
        fontWeight: '400',
        fontSize: RF(2),
        color: '#FFFFFF'
    },
    cardView: {
        position: 'relative',
        height: hp(100)
    },
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
        paddingBottom: 15
    },
    cardItem: {
        width: wp(80)
    },
    cardItemStyle: {
        backgroundColor: 'transparent'
    },
    cardIcon: {
        width: wp(5),
        height: wp(5)
    },
    listTitle: {
        fontSize: RF(2)
    },
    listButton: {
        color: '#C4C8D2',
        fontSize: RF(2)
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
        height: hp(7),
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
    btnProfileView: {
        width: wp(20),
        height: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: wp(15),
        elevation: 5,
        marginTop: hp(2),
        marginBottom: hp(5)
    },
    btnProfileStyle: {
        borderRadius: wp(15),
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
        color: '#929AAB',
        fontWeight: '300',
        fontSize: RF(1.5)
    },
    grayIcon: {
        color: '#929AAB',
        fontWeight: '300',
        fontSize: RF(3)
    },
    whiteText: {
        fontWeight: '600',
        color: '#ffffff'
    },
    whiteTextOnly: {
        color: '#ffffff'
    },
    fullWidth: {
        width: '100%',
        paddingTop: wp(5),
        paddingBottom: wp(5),
    },
    listTitilefull: {
        width: '80%',
    },
    full: {
        width: '100%',
    },
    alignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottomView: {

        marginTop: hp(40),
        marginBottom: hp(3)
    },
    textLigter: {
        fontWeight: '200'
    },
    paddingleft: {
        paddingLeft: wp(3)
    },
    listHeight: {
        height: hp(8)
    },
    listItemTextSize: {
        fontSize: RF(2)
    },
    cardNumberfull: {
        width: wp(50)
    }
});