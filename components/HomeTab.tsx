import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import BottomSheet from '@gorhom/bottom-sheet';
import Home from '../screens/Home';
import Account from '../screens/Account';
import PostProduct from './PostProduct';
import {Header, Icon} from 'react-native-elements';
import PostManager from '../screens/PostManager';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      {/* <Header backgroundColor={colors.DEFAULT_BLUE} /> */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
        <View style={styles.containerCircleBig}>
          <View style={styles.containerCircleSmall}>
            <Icon name="ios-share" size={30} color={colors.DEFAULT_BLACK} />
            <Text style={styles.title}>Đăng tin</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.GOOGLE_BLUE,
          tabBarInactiveTintColor: colors.DEFAULT_WHITE,
          tabBarStyle: {
            position: 'relative',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 80,
            width: '100%',
            backgroundColor: colors.DEFAULT_BLUE,
            borderTopWidth: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={27} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="PostManagerScreen"
          component={PostManager}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="library-books" size={27} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon name="ios-share" size={30} color={colors.DEFAULT_BLACK} />
            ),
          }}
        />

        <Tab.Screen
          name="FavoriteScreen"
          component={Favorite}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="bookmarks" size={30} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="AccountScreen"
          component={Account}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account-circle" size={27} color={color} />
            ),
          }}
        />

        {/* <PostProduct {...bottomSheetRef} /> */}
      </Tab.Navigator>
    </>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 8,
    zIndex: 1,
    left: '40%',
  },
  containerCircleBig: {
    backgroundColor: colors.DEFAULT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  containerCircleSmall: {
    backgroundColor: colors.DEFAULT_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  title: {
    color: colors.DEFAULT_BLACK,
    fontWeight: '600',
    fontSize: 13,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: '#140078',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#8559da',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
