import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class CreditCardScreen extends Component {

    state = {
        cardNumber: '',
        expDate: '',
        securityCode: '',
        zipCode: ''
    };

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.goBack();
        console.log('ProfileCompleteScreen')
    }

    onContinue = () => {
        // this.props.navigation.navigate('SignInScreen');
        console.log('Continue');
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
                                ADD DEBIT/CREDIT CARD
                        </Title>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                {/* end of header section */}

                <Content
                    style={[styles.contentStyle]}
                >

                    <View style={[styles.centerView, styles.full]}>

                        <ListItem
                            style={[styles.full, styles.listHeight]}
                        >
                            <Left>
                                <Text
                                    style={[styles.listItemTextSize, styles.listTitilefull]}
                                >
                                    Card Number
                                </Text>
                            </Left>
                            <Body
                                style={[styles.full]}
                            >
                                <Input
                                    placeholderTextColor="#929AAB"
                                    placeholder="0000 0000 0000 0000"
                                    value={this.state.cardNumber}
                                    name="cardNumber"
                                    onChangeText={(value) => this.setState({ cardNumber: value })}
                                    style={[styles.cardNumberfull, styles.listItemTextSize]}
                                    maxLength={16}
                                    keyboardType='numeric'
                                    />
                            </Body>
                        </ListItem>

                        <ListItem
                            style={[styles.full, styles.listHeight]}
                        >
                            <Left>
                                <Text
                                    style={[styles.listItemTextSize, styles.listTitilefull]}
                                >
                                    Expiration Date
                                </Text>
                            </Left>
                            < Right
                                style={[styles.full]}
                            >
                                <Input
                                    placeholderTextColor="#929AAB"
                                    placeholder="MM/YY"
                                    value={this.state.expDate}
                                    name="expDate"
                                    onChangeText={(value) => this.setState({ expDate: value })}
                                    style={[styles.listItemTextSize]} 
                                    />
                            </Right>
                        </ListItem>

                        <ListItem
                            style={[styles.full, styles.listHeight]}
                        >
                            <Left>
                                <Text
                                    style={[styles.listItemTextSize, styles.listTitilefull]}
                                >
                                    Security Code
                                </Text>
                            </Left>
                            <Right
                                style={[styles.full]}
                            >
                                <Input
                                    placeholderTextColor="#929AAB"
                                    placeholder="CVV"
                                    value={this.state.securityCode}
                                    name="securityCode"
                                    onChangeText={(value) => this.setState({ securityCode: value })}
                                    style={[styles.listItemTextSize]} 
                                    maxLength={3}
                                    keyboardType='numeric'
                                    />
                            </Right>
                        </ListItem>

                        <ListItem
                            style={[styles.full, styles.listHeight]}
                        >
                            <Left>
                                <Text
                                    style={[styles.listItemTextSize, styles.listTitilefull]}
                                >
                                    Zip Code
                                </Text>
                            </Left>
                            <Right
                                style={[styles.full]}
                            >
                                <Input
                                    placeholderTextColor="#929AAB"
                                    placeholder="00000"
                                    value={this.state.zipCode}
                                    name="zipCode"
                                    onChangeText={(value) => this.setState({ zipCode: value })}
                                    style={[styles.listItemTextSize]}
                                    maxLength={5}
                                    keyboardType='numeric'
                                    />
                            </Right>
                        </ListItem>

                    </View>

                    <View
                        style={[styles.bottomView, styles.centerView]}>
                        <View style={[styles.btnView]}>
                            <Button rounded block
                                style={[styles.btnStyle, styles.btnGreenView]}
                                onPress={this.onContinue}
                            >
                                <Text style={[styles.whiteText]}>Add Card</Text>
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
        fontWeight: '400',
        fontSize: RF(2),
        color: '#FFFFFF'
    },
    cardStyle: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        padding: wp(5),
    },
    profileCardStyle: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        padding: wp(8),
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