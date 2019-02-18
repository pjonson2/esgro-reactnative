import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Feather } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class ProfileScreen extends Component {
    state = {
        firstname: 'Ben',
        lastname: 'Staker',
        email: 'ben@gmail.com',
        username: 'benStk',
        isEdit: true
    };

    onEdit = () => {
        this.setState({
            isEdit: false
        });
    }

    onSaveProfile = () => {
        this.setState({
            isEdit: true
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
                            <Text style={[styles.whiteText]}>PROFILE</Text>
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
                                <View
                                    style={[styles.centerView]}
                                >
                                    <View 
                                    style={{flexDirection:'row'}}
                                    >
                                        <Image source={require('../../assets/img/p1.png')} style={[styles.profileImage]} />
                                        <Button transparent
                                            style={[styles.editButton]}
                                            onPress={this.onEdit}
                                        >
                                            <Feather name="edit" color="#ffffff" />
                                        </Button>
                                    </View>

                                    <View style={[styles.amountView]}>
                                        <View
                                            style={[styles.centerView, styles.amountValue]}
                                        >
                                            <Text
                                                style={[styles.amountText]}
                                            >
                                                $ 100.00
                                            </Text>
                                        </View>
                                        <View
                                            style={[styles.centerView, styles.transferView]}
                                        >
                                            <Button transparent
                                            style={[styles.transferBtnView]}>
                                                <Text
                                                style={[styles.whiteText]}
                                                >
                                                    Transfer
                                            </Text>
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem
                                style={[styles.cardItemBottomStyle, styles.centerView]}
                            >
                                <Form
                                    style={[styles.inputView]}>
                                    <Item floatingLabel>
                                        <Label>FIRST NAME</Label>
                                        <Input
                                            name="firstname"
                                            disabled={this.state.isEdit}
                                            onChangeText={(value) => this.setState({ firstname: value })}
                                            value={this.state.firstname}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>LAST NAME</Label>
                                        <Input
                                            name="lastname"
                                            disabled={this.state.isEdit}
                                            onChangeText={(value) => this.setState({ lastname: value })}
                                            value={this.state.lastname}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>USERNAME</Label>
                                        <Input
                                            name="username"
                                            disabled={this.state.isEdit}
                                            onChangeText={(value) => this.setState({ username: value })}
                                            value={this.state.username}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>EMAIL</Label>
                                        <Input
                                            name="email"
                                            disabled={this.state.isEdit}
                                            onChangeText={(value) => this.setState({ email: value })}
                                            value={this.state.email}
                                        />
                                    </Item>
                                </Form>
                            </CardItem>
                            {!this.state.isEdit &&
                            <View
                                style={[styles.bottomButton]}
                            >
                                <View style={[styles.btnView]}>
                                    <Button rounded block
                                        style={[styles.btnStyle]}
                                        onPress={this.onSaveProfile}
                                    >
                                        <Text style={[styles.whiteText]}>Save Profile</Text>
                                    </Button>
                                </View>
                            </View>}
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
        paddingTop: hp(2),
        paddingBottom: hp(1),
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
    cardItemUpperStyle: {
        width: wp(80),
        height: hp(25),
        borderBottomColor: '#929AAB',
        borderBottomWidth: 1,
        backgroundColor: 'transparent'
    },
    cardItemBottomStyle: {
        width: wp(80),
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
        color: '#ffffff',
        fontSize: RF(2)
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperCard: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: wp(85)
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    inputView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#5BDA31',
        position: 'relative',
        top: 20,
        left: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountView: {
        width: wp(80),
        height: hp(8),
        flexDirection: 'row',
    },
    amountValue: {
        flex: 1
    },
    transferView: {
        flex: 1
    },
    amountText: {
        fontWeight: '400',
        fontSize: RF(3)
    },
    transferBtnView : {
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 20,
        elevation: 5,
        marginBottom: hp(2),
        marginTop: hp(2),
        backgroundColor: '#5BDA31',
    }
});