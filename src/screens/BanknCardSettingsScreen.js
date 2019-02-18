import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class BanknCardSettingsScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.goBack();
        console.log('go back')
    }

    onBank = () => {
        this.props.navigation.navigate('BankAccountScreen');
        console.log('Continue');
    }

    onCard = () => {
        this.props.navigation.navigate('CreditCardScreen');
        console.log('Credit card screen')
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
                                BANKS & CARDS
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

                        <Card
                            style={[styles.cardStyle]}
                            borderRadius={10}
                        >
                            <Body>
                                <View style={[styles.centerView, styles.removeZBottomBr]}>
                                    <ListItem icon
                                        style={[styles.removeZBottomBr, styles.fullWidthOnly]}
                                    >
                                        <Left>
                                            <Icon active name="ios-card" style={[styles.grayIcon]} />
                                        </Left>
                                        <Body
                                            style={[styles.removeZBottomBr]}
                                        >
                                            <Text

                                            >
                                                Add Debit or Credit Card
                                        </Text>
                                        </Body>
                                        <Right
                                            style={[styles.removeZBottomBr]}
                                        >
                                            <Button transparent
                                                onPress={this.onCard}
                                            >
                                                <Icon active name="ios-add" style={[styles.greenText]} />
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </View>
                            </Body>
                        </Card>
                        <View style={[{width: wp(90), marginTop: 5, marginBottom: 5}]}>
                            <Text style={[styles.graytext]}>Description about fees for using esgro service?</Text>
                        </View>
                        <Card
                            style={[styles.cardStyle]}
                            borderRadius={10}
                        >
                            <Body>
                                <View style={[styles.centerView, styles.removeZBottomBr]}>
                                    <ListItem icon
                                        style={[styles.removeZBottomBr, styles.fullWidthOnly]}
                                    >
                                        <Left>
                                            <FontAwesome name="university" style={[styles.grayIcon]} />
                                        </Left>
                                        <Body
                                            style={[styles.removeZBottomBr]}
                                        >
                                            <Text

                                            >
                                                Link Bank Account
                                        </Text>
                                        </Body>
                                        <Right
                                            style={[styles.removeZBottomBr]}
                                        >
                                            <Button transparent
                                                onPress={this.onBank}
                                            >
                                                <Icon active name="ios-add" style={[styles.greenText]} />
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </View>
                            </Body>
                        </Card>
                        <View style={[{width: wp(90), marginTop: 5, marginBottom: 5}]}>
                            <Text style={[styles.graytext]}>Description about fees for using esgro service?</Text>
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
        height: hp(8),
        width: wp(90),
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingTop: wp(3),
        paddingBottom: wp(3)
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