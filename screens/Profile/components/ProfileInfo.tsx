import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {UserType, fullnameOfUser} from '../../../constants/types/userType';
import {Avatar} from '../../../constants/images';
import colors from '../../../constants/colors';
import {useAppSelector} from '../../../redux/hooks';

interface Props {
  onChangeAvatar: () => void;
  data: UserType | null;
  loading: boolean;
}

export default function ProfileInfo(props: Props) {
  const follow = useAppSelector(state => state.follows.follow);

  const {onChangeAvatar, data, loading} = props;
  return (
    <View style={styles.info}>
      <TouchableOpacity onPress={onChangeAvatar}>
        <Image
          style={styles.infoImage}
          source={data?.avatar ? {uri: data.avatar} : Avatar}
        />
      </TouchableOpacity>
      {loading && <ActivityIndicator color={colors.DEFAULT_WHITE} />}
      <Text style={styles.infoText}>{fullnameOfUser(data?.fullname)}</Text>
      <View style={styles.follow}>
        <Text style={styles.followText}>
          <Text style={{fontSize: 20}}>{follow?.follower.length ?? 0}</Text>{' '}
          Người theo dõi
        </Text>
        <Text style={{color: 'white', fontSize: 20}}>|</Text>
        <Text style={styles.followText}>
          Đang theo dõi{' '}
          <Text style={{fontSize: 20}}>{follow?.following.length ?? 0}</Text>
        </Text>
      </View>
    </View>
  );
}
