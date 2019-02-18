import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class ExportScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            condition1: true,
            condition2: true,
            condition1_1: false,
            condition1_2: false,
            condition1_3: false,
            condition1_4: false,

        }
    }

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.goBack();
        console.log('go');
    }

    onSendEmail = () => {
        this.props.navigation.navigate('SettingsScreen');
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
                                EXPORT REQUESTS
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
                                <ListItem
                                    style={[styles.cardItem]}
                                >
                                    <Text style={[styles.listTitle]}>SELECT REQUESTS</Text>
                                </ListItem>
                            </CardItem>

                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <ListItem icon
                                    style={[styles.cardItem]}
                                >
                                    <Left>
                                        <CheckBox
                                            onPress={() => this.setState({ condition1: !this.state.condition1 })}
                                            checked={this.state.condition1} color="#5BDA31" />
                                    </Left>
                                    <Body>
                                        <Text style={[styles.listTitle]}>All requests</Text>
                                    </Body>
                                    <Right />
                                </ListItem>
                            </CardItem>

                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <View style={{ flexDirection: 'column' }}>
                                    <ListItem icon
                                        style={[styles.cardItem]}
                                    >
                                        <Left>
                                            <CheckBox
                                                onPress={() => this.setState({ condition1: !this.state.condition1 })}
                                                checked={!this.state.condition1} color="#5BDA31" />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>All requests with status</Text>
                                        </Body>
                                        <Right />
                                    </ListItem>
                                    <View style={[{ width: wp(80), paddingTop: 10, paddingBottom: 10, borderBottomColor: '#ddd', borderBottomWidth: 1 }, styles.centerView]}>
                                        <View style={[{ width: wp(50), flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }]}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    onPress={() => this.setState({ condition1_1: !this.state.condition1_1 })}
                                                    checked={!this.state.condition1 && this.state.condition1_1} color="#5BDA31" />
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={[styles.listTitle]}>Incoming</Text>
                                            </View>
                                        </View>

                                        <View style={[{ width: wp(50), flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }]}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    onPress={() => this.setState({ condition1_2: !this.state.condition1_2 })}
                                                    checked={!this.state.condition1 && this.state.condition1_2} color="#5BDA31" />
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={[styles.listTitle]}>Outgoing</Text>
                                            </View>
                                        </View>

                                        <View style={[{ width: wp(50), flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }]}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    onPress={() => this.setState({ condition1_3: !this.state.condition1_3 })}
                                                    checked={!this.state.condition1 && this.state.condition1_3} color="#5BDA31" />
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={[styles.listTitle]}>Completed</Text>
                                            </View>
                                        </View>

                                        <View style={[{ width: wp(50), flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }]}>
                                            <View style={{ flex: 1 }}>
                                                <CheckBox
                                                    onPress={() => this.setState({ condition1_4: !this.state.condition1_4 })}
                                                    checked={!this.state.condition1 && this.state.condition1_4} color="#5BDA31" />
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={[styles.listTitle]}>Rejected</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>

                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <ListItem
                                    style={[styles.cardItem]}
                                >
                                    <Text style={[styles.listTitle]}>SELECT TIME FRAME</Text>
                                </ListItem>
                            </CardItem>
                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <ListItem icon
                                    style={[styles.cardItem]}
                                >
                                    <Left>
                                        <CheckBox
                                            onPress={() => this.setState({ condition2: !this.state.condition2 })}
                                            checked={this.state.condition2} color="#5BDA31" />
                                    </Left>
                                    <Body>
                                        <Text style={[styles.listTitle]}>Increments up to (months)</Text>
                                    </Body>
                                    <Right>
                                        <Text style={[styles.listTitle]}>02</Text>
                                    </Right>
                                </ListItem>
                            </CardItem>
                            <CardItem
                                style={[styles.cardItemStyle]}
                            >
                                <ListItem icon
                                    style={[styles.cardItem]}
                                >
                                    <Left>
                                        <CheckBox
                                            onPress={() => this.setState({ condition2: !this.state.condition2 })}
                                            checked={!this.state.condition2} color="#5BDA31" />
                                    </Left>
                                    <Body>
                                        <Text style={[styles.listTitle]}>All</Text>
                                    </Body>
                                    <Right />
                                </ListItem>
                            </CardItem>
                        </Card>
                        <View
                            style={[styles.bottomView, styles.centerView]}>
                            <View style={[styles.btnView]}>
                                <Button rounded block
                                    style={[styles.btnStyle, styles.btnGreenView]}
                                    onPress={this.onSendEmail}
                                >
                                    <Text style={[styles.whiteText]}>Send To Email</Text>
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
        marginTop: hp(3),
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