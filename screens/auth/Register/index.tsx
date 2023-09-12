import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RegisterType} from '../../../constants/types/authType';
import {InitialRegiter} from '../../../utils/api/authApi';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {RootState} from '../../../redux/store';
import userActions from '../../../redux/actions/userActions';
import {styles} from './styles';
import {Logo} from '../../../constants/images';
import InputForm from '../../../components/InputForm';
import ErrorTextInput from '../../../components/ErrorTextInput';
import {sexData} from '../../../constants/data';
import {sex} from '../../../constants/types/userType';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStack';
import KeyboardView from '../../../components/KeyboardView';

const RegisterScreen = () => {
  const [show, setShow] = useState<number>(0);
  const [isPasswordShow, setisPasswordShow] = useState(false);
  const [value, setValue] = useState<RegisterType>(InitialRegiter);
  const [errorText, setErrorText] = useState(InitialRegiter);

  const isLoading = useAppSelector((state: RootState) => state.users.loading);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNext = () => {
    const {msv, fullname} = value;
    let err = false;
    if (!msv) {
      setErrorText(prev => ({
        ...prev,
        msv: 'Bạn chưa nhập mã sinh viên',
      }));
      err = true;
    }
    if (msv.length !== 10) {
      setErrorText(prev => ({
        ...prev,
        msv: 'Mã sinh viên không hợp lệ',
      }));
      err = true;
    }
    if (!fullname.firstname) {
      setErrorText(prev => ({
        ...prev,
        fullname: {...prev.fullname, firstname: 'Bạn chưa nhập tên'},
      }));
      err = true;
    }

    if (!fullname.lastname) {
      setErrorText(prev => ({
        ...prev,
        fullname: {...prev.fullname, lastname: 'Bạn chưa nhập họ'},
      }));
      err = true;
    }

    if (err) return;
    setErrorText(InitialRegiter);
    setShow(1);
  };
  const handleRegister = async () => {
    await dispatch(userActions.register(value))
      .unwrap()
      .then(() => navigation.navigate('HomeTab'))
      .catch((err: any) => {
        if (err.errors) {
          err.errors.map((e: any) => {
            switch (e.path) {
              case 'msv':
                setShow(0);
                setErrorText(prev => ({
                  ...prev,
                  msv: e.msg,
                }));
                break;
              case 'email':
                setErrorText(prev => ({
                  ...prev,
                  email: e.msg,
                }));
                break;
              case 'phone':
                setErrorText(prev => ({
                  ...prev,
                  phone: e.msg,
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
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Image
            style={styles.image}
            alt="logo"
            source={Logo}
            resizeMode="center"
          />
          <Text style={styles.title}>Đăng ký tài khoản</Text>
          {show === 0 && (
            <View style={{display: 'flex', gap: 20}}>
              <View>
                <InputForm
                  label={'Mã sinh viên'}
                  placeholder="Mã sinh viên"
                  type="numeric"
                  value={value.msv}
                  setValue={msv => setValue({...value, msv})}
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="badge"
                />
                {errorText.msv !== '' && <ErrorTextInput msg={errorText.msv} />}
              </View>

              <View>
                <InputForm
                  label={'Tên'}
                  placeholder="Tên"
                  type="default"
                  value={value.fullname.lastname}
                  setValue={lastname =>
                    setValue({
                      ...value,
                      fullname: {
                        firstname: value.fullname.firstname,
                        lastname,
                      },
                    })
                  }
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="person"
                />
                {errorText.fullname.lastname !== '' && (
                  <ErrorTextInput msg={errorText.fullname.lastname} />
                )}
              </View>

              <View>
                <InputForm
                  icon="person"
                  label={'Họ'}
                  placeholder="Họ"
                  type="default"
                  value={value.fullname.firstname}
                  setValue={firstname =>
                    setValue({
                      ...value,
                      fullname: {
                        lastname: value.fullname.lastname,
                        firstname,
                      },
                    })
                  }
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                />
                {errorText.fullname.firstname !== '' && (
                  <ErrorTextInput msg={errorText.fullname.firstname} />
                )}
              </View>

              <View>
                <SelectDropdown
                  data={sexData}
                  defaultButtonText={'Nam'}
                  onSelect={(selectedItem: sex) => {
                    setValue({...value, sex: selectedItem});
                  }}
                />
              </View>
              <TouchableOpacity onPress={handleNext} style={styles.btnNext}>
                <Text style={styles.textButton}>Tiếp</Text>
              </TouchableOpacity>
            </View>
          )}
          {show === 1 && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
              <View>
                <InputForm
                  label={'Số điện thoại'}
                  placeholder="Số điện thoại"
                  type="numeric"
                  value={value.phone}
                  setValue={phone => setValue({...value, phone})}
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="phone"
                />
                {errorText.phone !== '' && (
                  <ErrorTextInput msg={errorText.phone} />
                )}
              </View>
              <View>
                <InputForm
                  type="default"
                  label={'Email'}
                  placeholder="Email"
                  value={value.email}
                  setValue={email => setValue({...value, email})}
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="email"
                />
                {errorText.email !== '' && (
                  <ErrorTextInput msg={errorText.email} />
                )}
              </View>
              <View>
                <InputForm
                  type="default"
                  label={'Mật khẩu'}
                  placeholder="Mật khẩu"
                  value={value.password}
                  setValue={password => setValue({...value, password})}
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="key"
                  secure={true}
                />
                {errorText.password !== '' && (
                  <ErrorTextInput msg={errorText.password} />
                )}
              </View>
              <View>
                <InputForm
                  type="default"
                  label={'Xác nhận mật khẩu'}
                  placeholder="Xác nhận mật khẩu"
                  value={value.confirmPassword as string}
                  setValue={confirmPassword =>
                    setValue({...value, confirmPassword})
                  }
                  isPasswordShow={isPasswordShow}
                  setIsPasswordShow={setisPasswordShow}
                  icon="key"
                  secure={true}
                />
                {errorText.confirmPassword !== '' && (
                  <ErrorTextInput msg={errorText.confirmPassword as string} />
                )}
              </View>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Button title="Hoàn tất" onPress={handleRegister} />
              )}
              <Button
                title="Quay lại"
                onPress={() => setShow(0)}
                color="#EFC868"
              />
            </View>
          )}
          <View style={styles.viewHaveAcc}>
            <Text style={{fontSize: 15}}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: colors.DEFAULT_BLUE, fontSize: 15}}>
                Đăng nhập ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardView>
  );
};

export default RegisterScreen;
