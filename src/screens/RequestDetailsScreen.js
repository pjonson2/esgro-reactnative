import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Textarea, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class RequestDetailsScreen extends Component {

    constructor() {
        super();
        this.maxLength = 150;

        this.state = {
            textLength: 0,
        };
    }

    static navigationOptions = {
        header: null
    };

    onChangeText(text) {
        this.setState({
            textLength: this.maxLength - text.length
        });
    }

    onBack = () => {
        this.props.navigation.goBack();
        console.log('go');
    }

    render() {
        const { params } = this.props.navigation.state;
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
                                <Text style={[styles.whiteText]}>Back</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Title
                                style={[styles.headerTitle, styles.fullWidth, styles.whiteText]}
                            >
                                DETAILS
                        </Title>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                {/* end of header section */}
                <LinearGradient colors={['#3B5F7A', '#2C3251']}
                    start={[0.0, 0.5]}
                    end={[1.0, 0.5]}
                    locations={[0.0, 1.0]}
                    style={styles.containerOver}></LinearGradient>
                <View
                    style={[styles.contentStyle]}
                >
                    <Content>
                        <View
                            style={[styles.cardView]}
                        >
                            <Card
                                style={[styles.cardStyle, styles.centerView]}
                            >
                                <CardItem
                                    style={[styles.cardItemUpperStyle, styles.centerView]}
                                >
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={[{ flexDirection: 'row', width: wp(80) }]}>
                                            <View style={[{ flex: 1 }, styles.centerView]}>
                                                <Image source={{ uri: params.user.picture.thumbnail }} style={[styles.profileImage]} />
                                            </View>
                                            <View style={[{ flex: 2 }, styles.centerView]}>
                                                <Text style={[styles.listTitle]}>{params.user.name.first} {params.user.name.last}</Text>
                                            </View>
                                            <View style={[{ flex: 1 }, styles.centerView]}>
                                                <Text style={[styles.greenText]}>$ {params.amount}</Text>
                                            </View>
                                        </View>
                                        <View style={[{ height: hp(5), width: wp(80), flexDirection: 'row', alignItems: 'center' }]}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={[styles.daysStyle]}>{params.days}</Text>
                                            </View>
                                            <View style={[{ flex: 2 }, styles.centerView]} />
                                            <View style={{ flex: 1 }}>
                                                <Text style={[styles.changeStyle]}>Change</Text>
                                            </View>
                                        </View>
                                    </View>
                                </CardItem>

                                <CardItem
                                    style={[styles.cardItemBottomStyle, styles.centerView]}
                                >
                                    <View style={[{ height: hp(7), width: wp(75), flexDirection: 'row' }, styles.centerView]}>
                                        <View style={[styles.centerView]}>
                                            <Button transparent
                                                style={[styles.centerView, { width: wp(25), flexDirection: 'column'}]}
                                                onPress={this.onContinue}
                                            >
                                                <Image source={require('../../assets/img/cancel.png')} style={{ width: wp(10), height: wp(10) }} />
                                                <Text style={[styles.listButtonText]}>Cancel</Text>
                                            </Button>
                                        </View>
                                        <View style={[styles.centerView]}>
                                            <Button transparent
                                                style={[styles.centerView, { width: wp(25), flexDirection: 'column' }]}
                                                onPress={this.onContinue}
                                            >
                                                <Image source={require('../../assets/img/contact.png')} style={{ width: wp(10), height: wp(10) }}  />
                                                <Text style={[styles.listButtonText]}>Contact</Text>
                                            </Button>
                                        </View>
                                        <View style={[styles.centerView]}>
                                            <Button transparent
                                                style={[styles.centerView, { width: wp(25), flexDirection: 'column' }]}
                                                onPress={this.onContinue}
                                            >
                                                <Image source={require('../../assets/img/approve-outline.png')} style={{ width: wp(10), height: wp(10) }}  />
                                                <Text style={[styles.listButtonText]}>Approve</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>

                            <View style={{marginTop: hp(5), width: wp(90), borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: hp(3)}}>
                                <Text style={[styles.noteTitle]}>DESCRIPTION</Text>
                                <Text note style={{textAlign: 'justify'}}>{params.note}</Text>
                            </View>

                            <View style={{marginTop: hp(2), width: wp(90), borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: hp(1),  flexDirection: 'row'}}>
                                <Text style={[styles.noteTitle,{width: wp(75)}]}>RESERVE</Text>
                                <Text style={[styles.greenText, {width: wp(25)}]}>$ {params.reserve}</Text>
                            </View>
                        </View>
                    </Content>
                </View>
            </Container>

        )
    };
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
        padding: wp(5),
        height: hp(100),
        top: -150
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
        fontWeight: '600',
        fontSize: RF(2.5)
    },
    daysStyle: {
        color: '#F47645',
        fontSize: RF(2)
    },
    changeStyle: {
        fontWeight: '600',
        color: '#F47645',
        fontSize: RF(2)
    },
    listTitle: {
        fontSize: RF(2)
    },
    noteTitle: {
        fontWeight: '400',
        fontSize: RF(2),
        marginBottom: 10
    },
    listButtonText: {
        marginTop: 3,
        color: '#393E46',
        fontSize: RF(1.5)
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
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItemUpperStyle: {
        width: wp(80),
        height: hp(15),
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: 'transparent'
    },
    cardItemBottomStyle: {
        width: wp(80),
        backgroundColor: 'transparent'
    },
    profileImage: {
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15) / 2,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
});