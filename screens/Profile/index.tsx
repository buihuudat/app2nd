import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Header, Icon} from 'react-native-elements';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import colors from '../../constants/colors';
import {UserType, fullnameOfUser} from '../../constants/types/userType';
import {address} from '../../constants/types/addressType';
import {Avatar} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStack';
import {ImageItem} from '../../components/ImageConvert';
import {styles} from './styles';
import ProfileInfo from './components/ProfileInfo';
import ProfileForm from './components/ProfileForm';
import KeyboardView from '../../components/KeyboardView';

export default function Profile() {
  const dispatch = useAppDispatch();
  const {user, loading} = useAppSelector(state => state.users);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [isDisable, setIsDisable] = useState(true);

  const [data, setData] = useState<UserType | null>(user);
  const [errorText, setErrorText] = useState<UserType | null>(null);

  const handleBack = useCallback(() => {
    navigation.navigate('HomeTab');
  }, [navigation]);

  const handleUpdate = useCallback(async () => {
    try {
      // dispatch(setUser(user));
      if (data?.fullname?.firstname === 'firstname') {
        setErrorText(prev => ({
          ...prev!,
          fullname: {...errorText?.fullname!, firstname: ''},
        }));
      }
      setIsDisable(true);
    } catch (e: any) {
      const errors = e.data.errors;
      // errors.forEach((e: any) => {
      //   if (e.param === 'msv') {
      //     setMsvErr(e.msg);
      //   }
      //   if (e.param === 'email') {
      //     setEmailErr(e.msg);
      //   }
      //   if (e.param === 'password') {
      //     setPasswordErr(e.msg);
      //   }
      //   if (e.param === 'address') {
      //     setAddressErr(e.msg);
      //   }
      // });
    }
  }, []);

  const handleChangeAvatar = async () => {
    let image: ImageItem[] = [];
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // if (result?.assets && !('cancelled' in result.assets[0])) {
    //   setIsLoading(true);
    //   const rp = await FileSystem.readAsStringAsync(result?.assets[0]?.uri, {
    //     encoding: FileSystem.EncodingType.Base64,
    //   });
    //   image = await imageUpload([{url: `data:image/jpeg;base64,${rp}`}]);
    // }
    try {
      // await userApi.updateAvatar({
      //   _id: user._id,
      //   avatar: image[0].url,
      // });
      Alert.alert('Hoàn tất', 'Cập nhật ảnh đại diện thành công');
      // const rq = await userApi.get({ _id: user._id });
      // setData({ ...data, avatar: rq.avatar });
      // dispatch(setUser(rq));
    } catch (e) {
      Alert.alert('Lỗi', 'Cập nhật ảnh thất bại, vui lòng thử lại sau');
    } finally {
    }
  };

  return (
    <KeyboardView>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <Header
          centerComponent={{
            text: 'Trang cá nhân',
            style: {fontSize: 20, color: colors.DEFAULT_WHITE},
          }}
          leftComponent={{
            icon: 'chevron-left',
            color: colors.DEFAULT_WHITE,
            onPress: handleBack,
          }}
          rightComponent={{
            icon: 'edit',
            color: colors.DEFAULT_WHITE,
            onPress: () => setIsDisable(!isDisable),
          }}
          backgroundColor={colors.DEFAULT_BLUE}
        />
        <View style={styles.profileContent}>
          <View style={styles.profileSubContent}>
            {/* info */}
            <ProfileInfo
              data={data}
              onChangeAvatar={handleChangeAvatar}
              loading={loading}
            />
          </View>
          <ProfileForm
            errorText={errorText}
            data={data}
            setData={setData}
            disable={isDisable}
            setDisable={setIsDisable}
            onUpdate={handleUpdate}
            loading={loading}
          />
        </View>
      </View>
    </KeyboardView>
  );
}
