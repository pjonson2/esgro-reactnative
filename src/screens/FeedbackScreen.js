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
export default class FeedbackScreen extends Component {

    constructor() {
        super();
        this.maxLength = 150;

        this.state = {
            textLength: 0,
        };
    }

    onChangeText(text) {
        this.setState({
            textLength: this.maxLength - text.length
        });
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
                            <Text style={[styles.whiteText]}>CONTACT US</Text>
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
                                style={[styles.cardStyle, styles.centerView]}
                            >
                                <CardItem
                                    style={[styles.cardItemUpperStyle, styles.centerView]}
                                >
                                    <Text style={[styles.listTitle]}>GIVE US YOUR FEEDBACK</Text>
                                </CardItem>

                                <CardItem
                                    style={[styles.cardItemBottomStyle, styles.centerView]}
                                >
                                    <Textarea rowSpan={5}
                                        style={{
                                            borderColor: 'lightgray',
                                            borderWidth: 1,
                                            padding: 3,
                                            borderRadius: 3,
                                            fontSize: RF(2),
                                            width: wp(80),
                                            height: hp(50)
                                        }}
                                        maxLength={this.maxLength}
                                        multiline={true}
                                        onChangeText={this.onChangeText.bind(this)}
                                        placeholder="Type your message here" 
                                        />
                                </CardItem>
                                <Text style={{
                                    fontSize: 10,
                                    color: 'lightgrey',
                                    textAlign: 'right'
                                }}>
                                    {this.state.textLength}/100
                                    </Text>
                                <View
                                    style={[styles.bottomButton]}
                                >
                                    <View style={[styles.btnView]}>
                                        <Button rounded block
                                            style={[styles.btnStyle]}
                                            onPress={this.onContinue}
                                        >
                                            <Text style={[styles.whiteText]}>Submit</Text>
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
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItemUpperStyle: {
        width: wp(80),
        height: hp(5),
        borderBottomColor: '#929AAB',
        borderBottomWidth: 1,
        backgroundColor: 'transparent'
    },
    cardItemBottomStyle: {
        width: wp(80),
        backgroundColor: 'transparent'
    },
});