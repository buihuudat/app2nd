import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import {PostProductType} from '../constants/types/postProductType';
import {formatPrice} from '../utils/handlers/formatPrice';
import moment from 'moment';
import {Icon} from 'react-native-elements';

interface Props {
  post: PostProductType;
  onViewProduct: () => void;
}

const PostProductItem = (props: Props) => {
  const {post, onViewProduct} = props;
  const isFavorite = false;

  const formattedPrice = useMemo(() => formatPrice(post.price), [post.price]);
  const formattedTime = moment(post?.createdAt).format('DD/MM/YYYY');

  return (
    <TouchableOpacity onPress={onViewProduct}>
      <View style={styles.container}>
        <View>
          <View style={styles.bookmarkIcon}>
            <Icon
              name={isFavorite ? 'bookmark' : 'bookmark-outline'}
              size={23}
              style={{color: colors.DEFAULT_RED}}
            />

            <Image style={styles.image} source={{uri: post.images[0]}} />

            <View style={styles.titlePostProduct}>
              <Text style={styles.titleContent}>{post.title}</Text>
              <Icon name="ellipsis-vertical-outline" size={19} />
            </View>

            <Text style={styles.price}>{formattedPrice}</Text>
            <Text style={styles.timeContainer}>
              <Icon name="time" size={14} />
              <Text style={styles.time}>{formattedTime}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostProductItem;

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
