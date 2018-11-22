import React from 'react';
import { createBottomTabNavigator, createAppContainer, BottomTabBar } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ES from 'react-native-extended-stylesheet';

import Home from '../home/Main';
import Rate from '../rate/Main';

const TabNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Rate: Rate,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                  iconName = 'home';
                } else if (routeName === 'Rate') {
                  iconName = 'th-list';
                }

                return <Icon name={iconName} size={ES.value('2rem')} color={tintColor} />;
            },
            tabBarComponent: props => (
                <BottomTabBar
                    {...props}
                    style={{
                        backgroundColor: ES.value('$colorEggplant'),
                        borderTopColor: ES.value('$colorPurple')
                    }}
                />
            ),
            tabBarOptions: {
                activeTintColor: ES.value('$colorPurple'),
                inactiveTintColor: ES.value('$colorYellow'),
                showLabel: false,
            }
        }),
    }
);

export default createAppContainer(TabNavigator);