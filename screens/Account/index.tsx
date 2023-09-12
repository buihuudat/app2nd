import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import {Divider, Header, Icon, Rating} from 'react-native-elements';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import TitleContainer from '../../components/TitleContainer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStack';
import storageData from '../../utils/handlers/asyncStore';
import IconCustomer from './components/IconSustomer';
import {styles} from './styles';
import {Avatar} from '../../constants/images';
import {followActions} from '../../redux/actions/followActions';

const Account = () => {
  const user = useAppSelector(state => state.users.user);
  const follow = useAppSelector(state => state.follows.follow);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(followActions.getFollow(user?._id as string));
  }, [user?._id]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    navigation.navigate('Splash');
    storageData.logout;
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header
        centerComponent={{
          text: 'Tài khoản',
          style: {
            color: colors.DEFAULT_WHITE,
            fontSize: 20,
          },
        }}
        backgroundColor={colors.DEFAULT_BLUE}
      />

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.iconEditContainer}>
            <Icon
              name="add"
              size={12}
              color={colors.DEFAULT_WHITE}
              style={styles.iconEdit}
            />
          </View>

          <View style={styles.contentContainer}>
            <Image
              style={styles.avatarProfile}
              source={user?.avatar ? {uri: user.avatar} : Avatar}
            />

            <TouchableOpacity onPress={() => navigation.push('Profile')}>
              <View style={styles.infoAcountContainer}>
                <Text style={styles.name}>
                  {user?.fullname.firstname + ' ' + user?.fullname.lastname}
                </Text>

                <View style={styles.followContainer}>
                  <View style={styles.followContainerItem}>
                    <Text style={styles.numberFollow}>
                      {follow?.follower.length ?? 0}
                    </Text>
                    <Text style={styles.userFollow}>Người theo dõi</Text>
                  </View>

                  <View style={styles.followContainerItem}>
                    <Text style={styles.numberFollow}>
                      {follow?.following.length ?? 0}
                    </Text>
                    <Text style={styles.userFollow}>Người đang theo dõi</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TitleContainer content="Tiện ích" />

        <TouchableOpacity onPress={() => navigation.push('Favorite')}>
          <IconCustomer
            title="Tin đã lưu"
            icon="bookmarks"
            bgColor={colors.DEFAULT_PINK}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <IconCustomer
            title="Đánh giá"
            icon="star-half"
            bgColor={colors.DEFAULT_YELLOW}
          />
        </TouchableOpacity>

        <TitleContainer content="Khác" />
        <TouchableOpacity onPress={() => navigation.push('Profile')}>
          <IconCustomer
            title="Thông tin tài khoản"
            icon="settings"
            bgColor={colors.DEFAULT_BLUE}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <IconCustomer
            title="Đăng xuất"
            icon="logout"
            bgColor={colors.INACTIVE_GREY}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Account;
