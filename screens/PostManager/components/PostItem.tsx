import React from 'react';
import {PostProductType} from '../../../constants/types/postProductType';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import {formatPrice} from '../../../utils/handlers/formatPrice';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const PostItem = (post: PostProductType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <View>
          <Image source={{uri: post.images[0]}} style={styles.image} />

          <View style={styles.titlePostProduct}>
            <Text style={styles.titleContent}>{post.title}</Text>
            <Icon name="ellipsis-vertical-outline" size={19} />
          </View>

          <Text style={styles.price}>{formatPrice(post.price)}</Text>
          <View style={styles.timeContainer}>
            <Icon name="time" size={14} />
            <Text style={styles.time}>
              {moment(post.updatedAt).startOf('hour').toNow()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 250,
    backgroundColor: colors.LIGHT_GREY,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  titlePostProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  titleContent: {
    fontSize: 13,
    color: colors.DEFAULT_BLACK,
    fontWeight: '600',
  },
  price: {
    paddingLeft: 10,
    fontSize: 13,
    color: colors.DEFAULT_RED,
  },
  time: {
    paddingLeft: 10,
    fontSize: 13,
    color: colors.DEFAULT_BLACK,
  },
  timeContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: '85%',
    left: '80%',
    zIndex: 1,
  },
});
