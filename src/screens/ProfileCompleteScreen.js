import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Left, Right, Button, Icon, Title, Content, Card, CardItem, Body, Text, Form, Item, Input, Label, ListItem, Switch, CheckBox } from 'native-base';
import RF from 'react-native-responsive-fontsize';
import { ImagePicker, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class ProfileCompleteScreen extends Component {

    state = {
        image: null,
    };

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    onCard = () => {
        this.props.navigation.navigate('CreditCardScreen');
        console.log('Credit card screen')
    }
    onBank = () => {
        this.props.navigation.navigate('BankAccountScreen');
        console.log('Bank account screen')
    }

    onBack = () => {
        this.props.navigation.navigate('InitialScreen');
        console.log('initial screen')
    }

    onContinue = () => {
        this.props.navigation.navigate('TabNavigator');
        console.log('Continue');
    }
    
    onSkip = () => {
        this.props.navigation.navigate('TabNavigator');
        console.log('Continue');
    }

    onAddImagePressed = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                // @ts-ignore
                base64: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
                // this.props.onImageSelected(result);
            } else {
                console.log(TAG, `image selection cancelled`);
            }
        } else {
            // show info to user
        }
    };

    render() {
        let { image } = this.state;
        return (
            <Container
                style={[styles.bgView]}
            >
                {/* header section */}
                <Header transparent>
                    <Left>
                        <Button transparent
                            onPress={this.onBack}
                        >
                            <Icon name='ios-arrow-back' style={{ fontSize: RF(3), color: '#000000' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title
                            style={[styles.headerTitle, styles.fullWidthOnly]}
                        >
                            Complete your profile
                        </Title>
                    </Body>
                    <Right />
                </Header>
                {/* end of header section */}

                <Content
                    style={[styles.contentStyle]}
                >
                    <Card
                        style={[styles.profileCardStyle]}
                        borderRadius={10}
                    >
                        <Body>
                            <View style={[styles.centerView]}>

                                <View style={[styles.btncenterView]}>
                                    {image &&
                                        <Image source={{ uri: image }} style={{ width: wp(30), height: wp(30), borderRadius: wp(15), marginBottom: hp(5) }} />}
                                    <Button rounded icon
                                        style={[styles.btnProfileView, styles.btnGreenView]}
                                        onPress={this.onAddImagePressed}
                                    >
                                        <Icon name='ios-camera' style={{ fontSize: RF(3), color: '#FFFFFF' }} />
                                    </Button>
                                </View>
                                <View>
                                    <Text>ADD PROFILE PICTURE</Text>
                                </View>
                            </View>
                        </Body>
                    </Card>

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
                                        <Icon active name="ios-card" style={[styles.graytext]}/>
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
                                            <Icon active name="ios-add" style={[styles.greenText]}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                            </View>
                        </Body>
                    </Card>

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
                                        <FontAwesome name="university" style={[styles.graytext]}/>
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
                                            <Icon active name="ios-add" style={[styles.greenText]}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                            </View>
                        </Body>
                    </Card>

                    <View
                        style={[styles.bottomView, styles.centerView]}>
                        <View style={[styles.btnView]}>
                            <Button rounded block
                                style={[styles.btnStyle, styles.btnGreenView]}
                                onPress={this.onContinue}
                            >
                                <Text style={[styles.whiteText]}>Continue</Text>
                            </Button>
                        </View>
                        <View style={[styles.centerView]}>
                            <Button transparent
                                onPress={this.onSkip}
                            >
                                <Text style={[styles.greenText]}>Skip for Now</Text>
                            </Button>
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
        fontWeight: '300',
        fontSize: RF(3)
    },
    cardStyle: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        padding: wp(5),
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
        height: hp(15),
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
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 50/2,
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
        fontSize: RF(3)
    },
    whiteText: {
        fontWeight: '600',
        color: '#ffffff'
    },
    fullWidth: {
        width: '100%',
        paddingTop: wp(5),
        paddingBottom: wp(5),
    },
    alignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottomView: {
        flex: 1,
        height: hp(20),
        padding: wp(3),
        marginTop: hp(17),
        marginBottom: hp(3)
    },
    textLigter: {
        fontWeight: '200'
    },
    paddingleft: {
        paddingLeft: wp(3)
    }
});