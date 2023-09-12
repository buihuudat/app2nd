import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '../../redux/hooks';
import {Logo} from '../../constants/images';
import {darkmode} from '../../utils/handlers/getDarkmode';

export default function Splash() {
  const user = useAppSelector(state => state.users.user);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNext = () => {
    if (!user) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('HomeTab');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={darkmode} />
      <View style={styles.imageLogo}>
        <Image
          alt="logo"
          source={Logo}
          style={{resizeMode: 'cover', width: 200, height: 200}}
        />

        <Text
          style={{
            fontSize: 30,
            paddingTop: 30,
          }}>
          Chào mừng đến với
        </Text>
        <Text style={styles.name}>Thủy Lợi Market</Text>

        <TouchableOpacity onPress={handleNext}>
          <Animatable.View
            animation={'pulse'}
            easing="ease-in-out"
            iterationCount={'infinite'}
            style={{
              borderRadius: 20,
              backgroundColor: '#0047BE',
              display: 'flex',
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textButton}>Tiếp</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
