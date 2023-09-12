import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import userActions from '../../../redux/actions/userActions';
import {Logo} from '../../../constants/images';
import InputForm from '../../../components/InputForm';
import ErrorTextInput from '../../../components/ErrorTextInput';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import KeyboardView from '../../../components/KeyboardView';
import {styles} from './styles';

const InitialError = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const [value, setValue] = useState<{email: string; password: string}>({
    email: '',
    password: '',
  });
  const [errorText, setErrorText] = useState<{
    email: string;
    password: string;
  }>(InitialError);

  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const isLoading = useAppSelector(state => state.users.loading);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    if (value.email === '')
      return setErrorText(prev => ({...prev, email: 'Bạn chưa nhập email'}));

    setErrorText(InitialError);
    if (value.password === '')
      return setErrorText(prev => ({
        ...prev,
        password: 'Bạn chưa nhập mật khẩu',
      }));
    setErrorText(InitialError);

    await dispatch(userActions.login(value))
      .unwrap()
      .then(() => navigation.navigate('HomeTab'))
      .catch((err: any) => {
        if (err.errors) {
          err.errors.map((e: any) => {
            switch (e.path) {
              case 'email':
                setErrorText(prev => ({
                  ...prev,
                  email: e.msg,
                }));
                break;
              case 'password':
                setErrorText(prev => ({
                  ...prev,
                  password: e.msg,
                }));
                break;
              default:
                break;
            }
          });
        }
      });
  };

  return (
    <KeyboardView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={
            styles.flexColumn && {
              padding: 10,
              marginHorizontal: 10,
            }
          }>
          <Image
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              resizeMode: 'contain',
              width: 200,
              height: 200,
            }}
            alt="logo"
            source={Logo}
            resizeMode="center"
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Đăng nhập
          </Text>

          <View style={{marginBottom: 10, paddingTop: 10}}>
            <InputForm
              label="Email"
              placeholder="Email"
              type="email-address"
              value={value.email}
              setValue={email => setValue({...value, email})}
              isPasswordShow={isPasswordShow}
              setIsPasswordShow={setIsPasswordShow}
              icon="email"
            />
            {errorText.email !== '' && <ErrorTextInput msg={errorText.email} />}
          </View>

          <View style={{marginBottom: 10}}>
            <InputForm
              icon="key"
              label="Mật khẩu"
              placeholder="Mật khẩu"
              type="visible-password"
              value={value.password}
              setValue={password => setValue({...value, password})}
              isPasswordShow={false}
              setIsPasswordShow={setIsPasswordShow}
              secure={true}
            />
            {errorText.password !== '' && (
              <ErrorTextInput msg={errorText.password} />
            )}
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                padding: 10,
                marginVertical: 20,
                borderRadius: 10,
                backgroundColor: colors.DEFAULT_BLUE,
              }}>
              <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
          )}

          {/* <Text
          style={{ textAlign: "center", fontWeight: 600 }}
          onPress={() => Alert.alert("Chức năng đang phát triển")}
        >
          Quên mật khẩu
        </Text> */}

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              justifyContent: 'center',
              marginTop: 10,
              alignItems: 'center',
            }}>
            {/* login with FB */}
            {/* <FbLogin /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'green',
                width: '100%',
              }}>
              <Text style={styles.textButton}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardView>
  );
};

export default LoginScreen;
