import {
    createStackNavigator, createAppContainer, createBottomTabNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient, Font, AppLoading } from 'expo';
import { Root } from "native-base";
import { heightPercentageToDP } from 'react-native-responsive-screen';

const TabNavigator = createBottomTabNavigator({
    RequestScreen: {
        getScreen: () => require('./RequestScreen').default
    },
    FeedbackScreen: {
        getScreen: () => require('./FeedbackScreen').default
    },
    AddScreen: {
        getScreen: () => require('./RequestDetailScreen').default
    },
    ProfileScreen: {
        getScreen: () => require('./ProfileScreen').default
    },
    SettingsScreen: {
        getScreen: () => require('./SettingsScreen').default
    }
},
{
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'RequestScreen') {
                    return focused ?
                        <Image source={require('../../assets/img/1.png')} style={[styles.tabIcon]} /> :
                        <Image source={require('../../assets/img/1-outline.png')} style={[styles.tabIcon]} />
                } else if (routeName === 'SettingsScreen') {
                    return focused ?
                        <Image source={require('../../assets/img/4.png')} style={[styles.tabIcon]} /> :
                        <Image source={require('../../assets/img/4-outline.png')} style={[styles.tabIcon]} />
                }else if (routeName === 'FeedbackScreen') {
                    return focused ?
                        <Image source={require('../../assets/img/2.png')} style={[styles.tabIcon]} /> :
                        <Image source={require('../../assets/img/2-outline.png')} style={[styles.tabIcon]} />
                }else if (routeName === 'ProfileScreen') {
                    return focused ?
                        <Image source={require('../../assets/img/3.png')} style={[styles.tabIcon]} /> :
                        <Image source={require('../../assets/img/3-outline.png')} style={[styles.tabIcon]} />
                }else if (routeName === 'AddScreen') {
                    return focused ?
                        <Image source={require('../../assets/img/add.png')} style={[styles.addIcon]} /> :
                        <Image source={require('../../assets/img/add-outline.png')} style={[styles.addIcon]} />
                }
            },
        }),
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'blue',
            inactiveTintColor: 'red',
            headerMode: 'none',
            style: {
                height: 60
            }
        },
        initialRouteName: 'AddScreen'
    }
);

const AppNavigator = createStackNavigator(
    {
        SplashScreen: {
            getScreen: () => require('./SplashScreen').default
        },
        // Auth: AuthNavigator,
        TabNavigator: TabNavigator,
        InitialScreen: {
            getScreen: () => require('./InitialScreen').default
        },
        SignInScreen: {
            getScreen: () => require('./SignInScreen').default

        },
        MobileVerificationScreen: {
            getScreen: () => require('./MobileVerificationScreen').default

        },
        VerificationCodeScreen: {
            getScreen: () => require('./VerificationCodeScreen').default

        },
        SignUpScreen: {
            getScreen: () => require('./SignUpScreen').default

        },
        ProfileCompleteScreen: {
            getScreen: () => require('./ProfileCompleteScreen').default

        },
        CreditCardScreen: {
            getScreen: () => require('./CreditCardScreen').default

        },
        BankAccountScreen: {
            getScreen: () => require('./BankAccountScreen').default

        },
        AccoutDetailsScreen: {
            getScreen: () => require('./AccoutDetailsScreen').default
            
        },
        RequestDetailScreen: {
            getScreen: () => require('./RequestDetailScreen').default

        },
        RequestChangingScreen: {
            getScreen: () => require('./RequestChangingScreen').default
            
        },
        RequestDateScreen: {
            getScreen: () => require('./RequestDateScreen').default
        },
        RequestSendScreen: {
            getScreen: () => require('./RequestSendScreen').default

        },
        BanknCardSettingsScreen: {
            getScreen: () => require('./BanknCardSettingsScreen').default

        },
        PreferencesScreen: {
            getScreen: () => require('./PreferencesScreen').default

        },
        ChangePasswordScreen: {
            getScreen: () => require('./ChangePasswordScreen').default

        },
        ExportScreen: {
            getScreen: () => require('./ExportScreen').default
        },
        RequestDetailsScreen: {
            getScreen: () => require('./RequestDetailsScreen').default
        }
    },
    {
        initialRouteName: 'TabNavigator'
    }, {
        header: null
    }
);

AppNavigator.navigationOptions = {
    header: null
}

const AppContainer = createAppContainer(AppNavigator);

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        // await Font.loadAsync({
        //   Roboto: require("native-base/Fonts/Roboto.ttf"),
        //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        // });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            );
        }
        return (
            <Root>
                <AppContainer />
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 25,
        height: 25,
    },
    addIcon: {
        width: 50,
        height: 50,
    },

});