import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Image, StatusBar, Modal } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Textarea, Card, CardItem, Body, Text, Form, Item, Input, Label, List, ListItem, Thumbnail, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var requestamoutdetail = {};

export default class RequestSendScreen extends Component {

    constructor() {
        super();
        this.maxLength = 250;

        this.state = {
            isFill: false,
            textLength: 0,
            note: '',
            modalVisible: false,
            color1: '#929AAB',
            color2: '#929AAB',
            color3: '#929AAB',
        };
    }

    static navigationOptions = {
        header: null
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onSend = () => {
        requestamoutdetail.note = this.state.note;
        console.log(requestamoutdetail)
        this.setModalVisible(true);
        setTimeout(() => {
            this.setState({
                color1: '#5BDA31'
            })
        }, 2000);
        setTimeout(() => {
            this.setState({
                color1: '#929AAB',
                color2: '#5BDA31', 
            })
        }, 3000);
        // setTimeout(() => {
        //     this.setState({
        //         color1: '#929AAB',
        //         color2: '#929AAB', 
        //         color3: '#5BDA31', 
        //     })
        // }, 4000);

        setTimeout(() => {
            this.setModalVisible(false);
            this.props.navigation.navigate('RequestScreen', requestamoutdetail);
        }, 5000);

        this.setState({
            note: ''
        })
    }

    onChangeText(text) {
        this.setState({
            textLength: this.maxLength - text.length,

        });
        if (this.state.textLength !== this.maxLength) {
            this.setState({
                isFill: true
            })
        } else {
            this.setState({
                isFill: false
            })
        }
    }

    render() {

        const { params } = this.props.navigation.state
        requestamoutdetail = params;
        console.log(requestamoutdetail);

        return (
            <Container
                style={[styles.bgView]}
            >
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={[styles.modelViewback]}>
                        <Card
                            style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent'}}
                        >
                            <CardItem
                                style={[styles.cardStyle, styles.centerView]}
                            >
                                <View style={[{ flexDirection: 'column', width: '100%', marginTop: 10 }, styles.centerView]}>
                                    <View>
                                        <Text>PROCESSING REQUEST</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row', marginTop: 20, width: '100%'}]}>

                                        <View style={[{ flex: 1 }, styles.centerView]}>
                                            <Image source={require('../../assets/img/p1.png')} style={[styles.profileImage]} />
                                        </View>
                                        <View style={[{ flex: 1 }, styles.centerView]}><Text style={[{color: this.state.color1}]}>-$ {requestamoutdetail.amount}</Text></View>
                                    </View>

                                    <View style={[{ flexDirection: 'row', marginTop: 20, width: '100%' }]}>

                                        <View style={[{ flex: 1 }, styles.centerView]}>
                                            <Image source={require('../../assets/img/1.png')} style={{width: wp(10), height: wp(10)}}/>
                                        </View>
                                        <View style={[{ flex: 1 }, styles.centerView]}><Text style={[{color: this.state.color2}]}>$ {requestamoutdetail.amount}</Text></View>
                                    </View>

                                    <View style={[{ flexDirection: 'row', marginTop: 20, marginBottom: 20, width: '100%' }]}>

                                        <View style={[{ flex: 1 }, styles.centerView]}>
                                            <Image source={{ uri: requestamoutdetail.user.picture.thumbnail }} style={[styles.profileImage]} />
                                        </View>
                                        <View style={[{ flex: 1 }, styles.centerView]}><Text style={[{color: this.state.color3}]}>+$ {requestamoutdetail.amount}</Text></View>
                                    </View>
                                </View>

                            </CardItem>
                        </Card>
                    </View>
                </Modal>
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
                        <Left />
                        <Body>
                            <Text style={[styles.whiteText]}>DETAILS</Text>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                <View
                    style={[styles.contentStyle]}
                >
                    <Content>
                        <ListItem thumbnail
                            style={[styles.addBottomBorder]}
                        >
                            <Left />
                            <Body
                                style={[styles.removeBottomBorder]}
                            >
                                <Text>TO :</Text>
                            </Body>
                            <Right
                                style={[styles.removeBottomBorder]}
                            >
                                <Button transparent
                                    onPress={this.onContinue}
                                >
                                    <Text style={[styles.grayText]}>{requestamoutdetail.user.name.first}</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail
                            style={[styles.addBottomBorder]}
                        >
                            <Left />
                            <Body
                                style={[styles.removeBottomBorder]}
                            >
                                <Text>DAYS :</Text>
                            </Body>
                            <Right
                                style={[styles.removeBottomBorder]}
                            >
                                <Button transparent
                                    onPress={this.onContinue}
                                >
                                    <Text style={[styles.grayText]}>{requestamoutdetail.days}</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail
                            style={[styles.addBottomBorder]}
                        >
                            <Left />
                            <Body
                                style={[styles.removeBottomBorder]}
                            >
                                <Text>AMOUNT :</Text>
                            </Body>
                            <Right
                                style={[styles.removeBottomBorder]}
                            >
                                <Button transparent
                                    onPress={this.onContinue}
                                >
                                    <Text style={[styles.grayText]}>$ {requestamoutdetail.amount}</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <ListItem thumbnail
                            style={[styles.addBottomBorder]}
                        >
                            <Left />
                            <Body
                                style={[styles.removeBottomBorder]}
                            >
                                <Text>RESERVE :</Text>
                            </Body>
                            <Right
                                style={[styles.removeBottomBorder]}
                            >
                                <Button transparent
                                    onPress={this.onContinue}
                                >
                                    <Text style={[styles.grayText]}>$ {requestamoutdetail.reserve}</Text>
                                </Button>
                            </Right>
                        </ListItem>

                        <Textarea rowSpan={5}
                            style={{
                                borderColor: 'lightgray',
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                padding: 3,
                                borderRadius: 3,
                                fontSize: RF(2),
                                width: wp(100),
                                height: hp(30)
                            }}
                            ref={(el) => { this.note = el; }}
                            onChangeText={(note) => {
                                this.setState({ note });
                                this.onChangeText(this.state.note);
                            }}
                            value={this.state.note}
                            maxLength={this.maxLength}
                            multiline={true}
                            placeholder="Type your message here"
                        />
                        <Text style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                            fontSize: 10,
                            color: 'lightgrey',
                            textAlign: 'center'
                        }}>
                            {this.state.textLength}/{this.maxLength}
                        </Text>
                        <View style={[styles.centerView]}>
                            <View style={{ flex: 1, height: hp(10) }}>
                                <View style={[styles.btnView]}>
                                    {this.state.isFill &&
                                        <Button rounded block
                                            style={[styles.btnStyle, styles.btnGreenView]}
                                            onPress={this.onSend}
                                        >
                                            <Text style={[styles.whiteText]}>Send</Text>
                                        </Button>}

                                    {!this.state.isFill &&
                                        <Button rounded block disabled
                                            style={[styles.btnStyle]}
                                            onPress={this.onSend}
                                        >
                                            <Text style={[styles.whiteText]}>Send</Text>
                                        </Button>}

                                </View>
                            </View>
                        </View>
                    </Content>
                </View>
            </Container>

        )
    };
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    modelViewback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        // height: hp(30),
        // width: wp(70)
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
        width: wp(80)
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
    removeBottomBorder: {
        borderBottomWidth: 0
    },
    addBottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    profileImage: {
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15) / 2,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
});