import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {UserType} from '../../../constants/types/userType';
import colors from '../../../constants/colors';
import {address} from '../../../constants/types/addressType';

interface Props {
  data: UserType | null;
  setData: (data: UserType | null) => void;
  errorText: UserType | null;
  disable: boolean;
  setDisable: (disable: boolean) => void;
  onUpdate: () => void;
  loading: boolean;
}

export default function ProfileForm(props: Props) {
  const {data, setData, errorText, onUpdate, disable, setDisable, loading} =
    props;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 50,
        height: '60%',
      }}>
      <View
        style={
          styles.form && {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }
        }>
        <View style={styles.formItem}>
          <Text style={{fontWeight: '500'}}>Họ:</Text>
          <TextInput
            style={styles.formItemInput}
            defaultValue={data?.fullname.firstname}
            editable={!disable}
            onChangeText={firstname =>
              setData({
                ...data!,
                fullname: {
                  ...data?.fullname!,
                  firstname,
                },
              })
            }
          />
          {errorText?.fullname.firstname && (
            <Text style={{color: 'red', fontSize: 11}}>
              {errorText.fullname.firstname}
            </Text>
          )}
        </View>
        <View style={styles.formItem}>
          <Text style={{fontWeight: '500'}}>Tên: </Text>
          <TextInput
            style={styles.formItemInput}
            defaultValue={data?.fullname.lastname}
            editable={!disable}
            onChangeText={lastname =>
              setData({
                ...data!,
                fullname: {
                  ...data?.fullname!,
                  lastname,
                },
              })
            }
          />
          {errorText?.fullname.lastname && (
            <Text style={{color: 'red', fontSize: 11}}>
              {errorText?.fullname.lastname}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          height: 0.5,
          backgroundColor: '#999',
        }}
      />
      <View style={{display: 'flex', gap: 10}}>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={{fontWeight: '500'}}>Mã sinh viên:</Text>
            <TextInput
              style={styles.formItemInput}
              defaultValue={data?.msv}
              editable={!disable}
              onChangeText={msv =>
                setData({
                  ...data!,
                  msv,
                })
              }
            />
            {errorText?.msv && (
              <Text style={{color: 'red', fontSize: 11}}>{errorText.msv}</Text>
            )}
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#999',
          }}
        />

        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={{fontWeight: '500'}}>Email:</Text>
            <TextInput
              style={styles.formItemInput}
              defaultValue={data?.email}
              editable={!disable}
              onChangeText={email =>
                setData({
                  ...data!,
                  email,
                })
              }
            />
            {errorText?.email && (
              <Text style={{color: 'red', fontSize: 11}}>
                {errorText.email}
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#999',
          }}
        />
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={{fontWeight: '500'}}>Số điện thoại:</Text>
            <TextInput
              style={styles.formItemInput}
              defaultValue={data?.phone}
              editable={!disable}
              onChangeText={phone =>
                setData({
                  ...data!,
                  phone,
                })
              }
            />
            {errorText?.phone && (
              <Text style={{color: 'red', fontSize: 11}}>
                {errorText.phone}
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#999',
          }}
        />
        {/* pass */}
        {!disable && (
          <>
            <View style={styles.form}>
              <View style={styles.formItem}>
                <Text style={{fontWeight: '200'}}>Mật khẩu: </Text>
                <TextInput
                  style={styles.formItemInput}
                  secureTextEntry={true}
                  editable={!disable}
                  onChangeText={password =>
                    setData({
                      ...data!,
                      password,
                    })
                  }
                />
                {errorText?.password && (
                  <Text style={{color: 'red', fontSize: 11}}>
                    {errorText.password}
                  </Text>
                )}
              </View>
            </View>
            <View
              style={{
                height: 0.5,
                backgroundColor: '#999',
              }}
            />
          </>
        )}

        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={{fontWeight: '500'}}>Địa chỉ:</Text>
            {!disable ? (
              <Text style={styles.formItemInput}>
                {data?.address?.city ? address(data?.address) : 'Chưa cung cấp'}
              </Text>
            ) : (
              <View>
                <TextInput
                  // editable={!disable}
                  onChangeText={street =>
                    setData({...data!, address: {...data?.address!, street}})
                  }
                />
                {data?.address?.street && (
                  <Text style={{color: 'red', fontSize: 11}}>
                    {data.address.street}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#999',
          }}
        />
      </View>
      <View>
        {!disable &&
          (loading ? (
            <ActivityIndicator size="large" color={colors.DEFAULT_BLUE} />
          ) : (
            <Button
              title="Cập nhật thông tin"
              color={colors.DEFAULT_GREEN}
              onPress={onUpdate}
            />
          ))}
      </View>
    </ScrollView>
  );
}
