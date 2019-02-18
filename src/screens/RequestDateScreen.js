import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Textarea, Card, CardItem, Body, Text, Form, Item, Input, Label, List, ListItem, Thumbnail, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var number = '';
var requestamoutdetail = {};

export default class RequestDetailScreen extends Component {

    constructor() {
        super();
    }

    state = {
        days: 'same day'
    };

    static navigationOptions = {
        header: null
    };

    onBack = () => {
        this.props.navigation.navigate('TabNavigator');
        console.log('TabNavigator screen')
    }

    onContinue = () => {
        requestamoutdetail.days = this.state.days
        this.props.navigation.navigate('RequestSendScreen', requestamoutdetail);
        number = '';
    }

    onNumber(num) {
        var temp = '';
        temp = num
        number = number + temp;
        this.setState({ days: number });
    }

    onDelete() {
        var temp = this.state.days;
        if(this.state.days == 'same day') {
            this.setState({ days: '' });
        } else {
            number = temp.slice(0, -1);
            this.setState({ days: number });
            console.log(number)
        }
    }

    render() {
        const {params} = this.props.navigation.state
        requestamoutdetail = params;
        // console.log(requestamoutdetail);
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
                                <Icon name='ios-arrow-back' style={{ fontSize: RF(3), color: '#FFFFFF' }} />
                                <Text style={[styles.whiteText]}>Back</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={[styles.whiteText]}>REQUEST</Text>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                {/* <View
                    style={[styles.contentStyle]}
                > */}
                <Content>
                    <View style={[styles.cardView, styles.centerView]}>
                        <Card
                            style={[styles.cardStyle, styles.centerView]}
                        >
                            <CardItem
                                style={[styles.cardItemUpperStyle, styles.centerView]}
                            >
                                <Text>NUMBER OF DAYS</Text>
                                <Text style={[styles.listAmount]}>{this.state.days}</Text>
                            </CardItem>

                            <CardItem
                                style={[styles.cardItemBottomStyle, styles.centerView]}
                            >
                                {/* <Left><Text style={[styles.grayText]}>$ 0.00</Text></Left>
                                <Right><Text>RESERVE</Text></Right> */}
                            </CardItem>
                        </Card>
                    </View>
                    <View
                        style={[styles.centerView, { height: hp(70) }]}
                    >
                        <View style={[styles.numberView, styles.centerView]}>
                            <View style={[{ flexDirection: 'row', height: hp(10), width: wp(80) }, styles.centerView]}>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('1')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>1</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('2')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>2</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('3')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>3</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={[{ flexDirection: 'row', height: hp(10), width: wp(80) }, styles.centerView]}>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('4')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>4</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('5')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>5</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('6')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>6</Text>
                                    </Button>
                                </View>
                            </View>


                            <View style={[{ flexDirection: 'row', height: hp(10), width: wp(80) }, styles.centerView]}>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('7')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>7</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('8')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>8</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('9')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>9</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={[{ flexDirection: 'row', height: hp(10), width: wp(80) }, styles.centerView]}>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent disabled
                                        onPress={() => this.onNumber('.')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>.</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onNumber('0')}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Text style={[styles.calText]}>0</Text>
                                    </Button>
                                </View>
                                <View style={[{ flex: 1, height: hp(10) }, styles.centerView]}>
                                    <Button transparent
                                        onPress={() => this.onDelete()}
                                        style={[{ width: '100%', height: '100%' }, styles.centerView]}
                                    >
                                        <Icon name='ios-arrow-back' style={[styles.calText]} />
                                    </Button>
                                </View>
                            </View>
                            <View style={{ flex: 1, height: hp(10) }}>
                                <View style={[styles.btnView]}>
                                    <Button rounded block
                                        style={[styles.btnStyle, styles.btnGreenView]}
                                        onPress={this.onContinue}
                                    >
                                        <Text style={[styles.whiteText]}>Continue</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                {/* </View> */}
            </Container>

        )
    };
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    br: {
        borderWidth: 0.5,
        borderColor: '#000000'
    },
    bgView: {
        backgroundColor: '#F7F8FB'
    },
    contentStyle: {
        height: hp(80),
        // top: -150
    },
    full: {
        backgroundColor: '#ffffff',
        height: hp(7)
    },
    searchList: {
        height: hp(7)
    },
    searchbarStyle: {
        borderBottomWidth: 0,
        width: wp(90),
    },
    addButton: {
        height: hp(5),
    },
    resultTitle: {
        height: hp(3),
        width: wp(100),
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: hp(2),
        backgroundColor: '#DBDFE7'
    },
    resultTitleText: {
        fontSize: RF(1.5)
    },
    thumbnailStyle: {
        height: hp(6),
        width: hp(6),
        borderRadius: hp(6) / 2
    },
    whiteText: {
        fontWeight: '400',
        color: '#ffffff'
    },
    container: {
        height: hp(10),
    },
    containerOver: {
        height: hp(20),
    },
    cardView: {
        marginTop: 15,
        width: wp(100),
        height: hp(20),
    },
    cardStyle: {
        width: wp(80),
        height: hp(20),
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
        fontSize: RF(1.5)
    },
    listAmount: {
        color: '#ddd',
        fontSize: RF(3),
        marginTop: hp(2),
        fontWeight: '400'
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
    btnStyle: {
        borderRadius: wp(10),
        backgroundColor: '#C4C8D2',
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
    grayText: {
        fontSize: RF(2),
        fontWeight: '400',
        color: '#929AAB'
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItemUpperStyle: {
        width: wp(70),
        height: hp(15),
        paddingTop: hp(5),
        flexDirection: 'column',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: 'transparent'
    },
    cardItemBottomStyle: {
        width: wp(80),
        height: hp(8),
        backgroundColor: 'transparent'
    },
    removeBottomBorder: {
        borderBottomWidth: 0
    },
    addBottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    numberView: {
        width: wp(80),
        height: hp(65),
    },
    calText: {
        fontSize: RF(4),
        fontWeight: '400',
        color: '#393E46'
    }
});