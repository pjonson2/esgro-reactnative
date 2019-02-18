import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, List, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions, LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class RequestScreen extends Component {

    arrayholder = [
        {
            user: {
                name: {
                    first: 'Ben',
                    last: 'Staker'
                },
                picture: {
                    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/60.jpg'
                }
            },
            amount: "45.00",
            days: "Same day",
            reserve: "5.20",
            note: "llamco nisi sunt velit quis sint anim nisi sunt Lorem in. dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac, consequat justo. Maecenas nec est ac purus mattis tristique vitae vel leo. Duis ac eros vel nunc aliquet ultricies vel at metus."
        },
        {
            user: {
                name: {
                    first: 'Ruth',
                    last: 'Fisher'
                },
                picture: {
                    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
                }
            },
            amount: "50.00",
            days: "Same day",
            reserve: "12.70",
            note: "llamco nisi sunt velit quis sint anim nisi sunt Lorem in. dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac, consequat justo. Maecenas nec est ac purus mattis tristique vitae vel leo. Duis ac eros vel nunc aliquet ultricies vel at metus."
        }
    ];

    render() {
        const { params } = this.props.navigation.state;
        if(params !== undefined) {
            this.arrayholder.unshift(params);
            console.log(this.arrayholder)
        }
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
                            <ListItem
                                style={[styles.full, styles.centerView, styles.removeBottomBorder]}
                            >
                                <Item style={[styles.searchbarStyle]}>
                                    <Input placeholder="Username, Name or Account" style={[styles.searchbarStyle, styles.greenText]} placeholderTextColor="#5BDA31" />
                                </Item>
                                <Button transparent>
                                    <Icon name="ios-search" style={{ color: '#5BDA31' }} />
                                </Button>
                            </ListItem>
                        </Body>
                    </Header>
                </LinearGradient>
                {/* end of header section */}

                <View
                    style={[styles.contentStyle]}
                >
                    <Content
                    // style={{width: wp(100)}}
                    >
                        <Card
                            style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent' }}
                        >
                            <List dataArray={this.arrayholder.reverse()}
                                renderRow={(item) =>
                                    <TouchableOpacity
                                        onPress={() => {this.props.navigation.navigate('RequestDetailsScreen', item)}}
                                    >
                                        <CardItem
                                            style={[styles.cardStyle]}
                                        >

                                            <View
                                                style={[{ flex: 1, flexDirection: 'row', marginTop: 10 }]}
                                            >
                                                <View
                                                    style={[{ flex: 2 }]}
                                                >
                                                    {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
                                                    <Image source={{ uri: item.user.picture.thumbnail }} style={[styles.profileImage]} />
                                                    <View style={[styles.onlineView]}></View>
                                                </View>
                                                <View
                                                    style={{ flex: 4 }}
                                                >
                                                    <Text>{item.user.name.first} {item.user.name.last}</Text>
                                                    <Text note numberOfLines={2}>{item.note}</Text>
                                                </View>
                                                <View
                                                    style={{ flex: 2 }}
                                                >
                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <View>
                                                            <Text style={[styles.amount, styles.green]}>+ ${item.amount}</Text>
                                                        </View>
                                                        <View>
                                                            <Text note style={[styles.amountInfo]}>{item.days}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                        </CardItem>
                                    </TouchableOpacity>} />
                        </Card>
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
        margin: wp(2),
        marginTop: wp(5),
        height: hp(75),
        top: -150
    },
    cardView: {
        position: 'relative',
        height: hp(100),
        width: wp(100)
    },
    searchView: {
        marginTop: hp(3),
        width: wp(100),
        height: hp(6),
        borderRadius: hp(6) / 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 10,
        elevation: 5,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#DBDFE7'
    },
    cancelCard: {
        backgroundColor: '#ECECF5'
    },
    container: {
        height: hp(30),
    },
    searchbarStyle: {
        paddingLeft: 5,
        borderBottomWidth: 0,
        width: wp(80),
    },
    greenText: {
        fontWeight: '400',
        color: '#5BDA31'
    },
    full: {
        width: wp(100),
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeBottomBorder: {
        borderBottomWidth: 0
    },
    amount: {
        fontSize: RF(2),
        fontWeight: '600',
        textAlign: 'right'
    },
    amountInfo: {
        fontSize: RF(1.5),
        textAlign: 'right'
    },
    green: {
        color: '#5BDA31'
    },
    red: {
        color: '#EF5A5A'
    },
    cancelText: {
        color: '#929AAB'
    },
    profileImage: {
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15) / 2,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    onlineView: {
        width: wp(3),
        height: wp(3),
        borderRadius: wp(3) / 2,
        backgroundColor: '#5BDA31',
        position: 'relative',
        top: -48,
        left: 48
    }
});