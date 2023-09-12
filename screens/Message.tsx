import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';
import {MessageType} from '../constants/types/messageType';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const RenderItem = (item: MessageType) => {
  return (
    <TouchableOpacity>
      {/* <MessageItem name={''} message="" avatar={''} /> */}
    </TouchableOpacity>
  );
};

const Message = () => {
  const isLoading = false;
  const messages: Array<MessageType> = [];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={34} color={colors.DEFAULT_GREY} />
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator size={'large'} color={colors.DEFAULT_BLUE} />
      ) : messages.length ? (
        <Text>Chưa có tin nhắn</Text>
      ) : (
        <FlatList
          data={messages}
          renderItem={({item}) => <RenderItem {...item} />}
          keyExtractor={item => item._id as string}
        />
      )}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
