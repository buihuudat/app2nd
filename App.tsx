import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import {RootStackParamList} from './RootStack';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import {ThemeProvider} from 'react-native-elements';
import Message from './screens/Message';
import Search from './screens/Search';
import HomeTab from './components/HomeTab';
import PostManager from './screens/PostManager';
import Profile from './screens/Profile';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Message" component={Message} />
            <RootStack.Screen name="PostManager" component={PostManager} />

            <RootStack.Screen name="HomeTab" component={HomeTab} />
            <RootStack.Screen name="Search" component={Search} />
            <RootStack.Screen name="Profile" component={Profile} />

            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
