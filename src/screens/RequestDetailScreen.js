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
export default class RequestDetailScreen extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            error: null,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    arrayholder = [];

    static navigationOptions = {
        header: null
    };

    onContinue(data){
        this.props.navigation.navigate('RequestChangingScreen', {user: data});
    }

    makeRemoteRequest = () => {
        const url = `https://randomuser.me/api/?&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res.results;
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.title.toUpperCase()}   
    ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ data: newData });
    };

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
                        <Left/>
                        <Body>
                            <Text style={[styles.whiteText]}>DETAILS</Text>
                        </Body>
                        <Right />
                    </Header>
                </LinearGradient>
                <View
                    style={[styles.contentStyle]}
                >
                    <View style={[styles.full]}>
                        <ListItem
                            style={[styles.centerView, styles.removeBottomBorder, styles.searchList]}
                        >
                            <Item style={[styles.searchbarStyle, styles.removeBottomBorder]}>
                                <Input
                                    placeholder="Username, Name, Phone, Email, or QR code"
                                    style={[styles.searchbarStyle, styles.grayText]}
                                    placeholderTextColor="#929AAB"
                                    onChangeText={text => this.searchFilterFunction(text)}
                                    autoCorrect={false}
                                />
                            </Item>
                            <Button transparent style={[styles.addButton]}>
                                <MaterialIcons name="group-add" style={{ color: '#5BDA31' }} size={24} />
                            </Button>
                        </ListItem>
                    </View>
                    <View style={[styles.resultTitle]}>
                        <Text style={[styles.resultTitleText]}>TOP PEOPLE</Text>
                    </View>
                    {this.state.loading && 
                    <View style={[styles.indicatorContainer, styles.horizontal]}>
                        <ActivityIndicator size="small" color="#5BDA31" />
                    </View>}
                    <Content>
                        <List dataArray={this.state.data}
                            renderRow={(item) =>
                                <ListItem thumbnail
                                    style={[styles.addBottomBorder]}
                                >
                                    <Left>
                                        <Thumbnail square source={{ uri: item.picture.thumbnail }} style={[styles.thumbnailStyle]} />
                                    </Left>
                                    <Body
                                        style={[styles.removeBottomBorder]}
                                    >
                                        <Text>{item.name.first} {item.name.last}</Text>
                                        <Text note>2 days ago</Text>
                                    </Body>
                                    <Right
                                        style={[styles.removeBottomBorder]}
                                    >
                                        <Button transparent
                                            onPress={() => this.onContinue(item)}
                                        >
                                            <Icon name="ios-arrow-forward" style={{ color: '#929AAB' }} />
                                        </Button>
                                    </Right>
                                </ListItem>
                            }>
                        </List>
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
});