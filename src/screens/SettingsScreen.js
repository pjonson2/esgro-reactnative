import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class SettingsScreen extends Component {

    onSignOut = () => {
        this.props.navigation.navigate('InitialScreen');
        console.log('initial screen')
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
                        <Body
                            style={[styles.searchView]}
                        >
                            <Text style={[styles.whiteText]}>SETTINGS</Text>
                        </Body>
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
                                style={[styles.cardStyle]}
                            >
                                <CardItem
                                    style={[styles.cardItemStyle]}
                                >
                                    <ListItem icon
                                        style={[styles.cardItem]}
                                    >
                                        <Left>
                                            <Image source={require('../../assets/img/s1.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>BANKS & CARDS</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent
                                                onPress={() => { this.props.navigation.navigate('BanknCardSettingsScreen')}}
                                            >
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
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
                                            <Image source={require('../../assets/img/s2.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>DISPUTES</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent

                                            >
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
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
                                            <Image source={require('../../assets/img/s3.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>CANCELLED & COMPLETED</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
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
                                            <Image source={require('../../assets/img/s4.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>PREFERENCES</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent
                                            onPress={() => { this.props.navigation.navigate('PreferencesScreen')}}
                                            >
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
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
                                            <Image source={require('../../assets/img/s5.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>EXPORT REQUEST</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent
                                            onPress={() => { this.props.navigation.navigate('ExportScreen')}}
                                            >
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
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
                                            <Image source={require('../../assets/img/s6.png')} style={[styles.cardIcon]} />
                                        </Left>
                                        <Body>
                                            <Text style={[styles.listTitle]}>ABOUT</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Icon name="ios-arrow-forward" style={[styles.listButton]} />
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </CardItem>
                                <View
                                    style={[styles.bottomButton]}
                                >
                                    <View style={[styles.btnView]}>
                                        <Button rounded block
                                            style={[styles.btnStyle]}
                                            onPress={this.onSignOut}
                                        >
                                            <Text style={[styles.whiteText]}>Sign Out</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Card>
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
        height: hp(80),
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
});