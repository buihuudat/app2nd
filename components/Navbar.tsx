import React from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {View} from 'react-native-animatable';
import colors from '../constants/colors';
import {Header, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';

const Navbar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <View style={styles.backgroundCurvedContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Icon name="search" size={22} color={colors.DEFAULT_GREY} />
            <TextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={colors.DEFAULT_GREY}
              selectionColor={colors.DEFAULT_GREY}
              style={styles.inputText}
              onPressOut={() => navigation.navigate('Search')}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => Alert.alert('')}>
          <Icon
            name="notifications"
            size={25}
            color={colors.DEFAULT_WHITE}
            style={{marginRight: 5}}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Message')}>
          <Icon
            name="chat"
            size={25}
            color={colors.DEFAULT_WHITE}
            style={{marginRight: 5}}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundCurvedContainer: {
    flexDirection: 'row',
    backgroundColor: colors.DEFAULT_BLUE,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputContainer: {
    width: '70%',
    height: 35,
    backgroundColor: colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.DEFAULT_WHITE,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    height: '100%',
    width: 100,
    color: colors.DEFAULT_BLACK,
    flex: 1,
  },
});
