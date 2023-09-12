import React from 'react';
import {PostProductType} from '../constants/types/postProductType';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {formatPrice} from '../utils/handlers/formatPrice';
import moment from 'moment';

interface Props {
  post: PostProductType;
  navigate: () => void;
}

const CategoryDetailItem = (props: Props) => {
  const {post, navigate} = props;
  const isFavorite = false;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.favoriteIcon}>
          <IonIcons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={23}
            style={{color: colors.DEFAULT_RED}}
          />
        </View>

        <View>
          <Image style={styles.image} source={{uri: post.images[0]}} />
        </View>

        <View style={styles.titlePostProduct}>
          <Text style={styles.titleContent}>{post.title}</Text>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Text style={styles.price}>{formatPrice(post.price)}</Text>
            <View style={styles.timeContainer}>
              <Feather name="map-pin" size={14} color={'black'} />
              <Text style={styles.time}>{post.createdAt}</Text>
              <Text style={styles.time}>
                {post.location.district},{post.location.city}
              </Text>
            </View>
            {/* <Text>{moment(post.updatedAt).startOf().toNow()}</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryDetailItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: colors.LIGHT_GREY,
    margin: 3,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  titlePostProduct: {
    flexDirection: 'column',

    padding: 10,
  },
  titleContent: {
    fontSize: 13,
    color: colors.DEFAULT_BLACK,
    fontWeight: '600',
  },
  price: {
    fontSize: 13,
    color: colors.DEFAULT_RED,
    paddingVertical: 5,
  },
  time: {
    fontSize: 13,
    color: colors.DEFAULT_BLACK,
    paddingHorizontal: 3,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  favoriteIcon: {
    position: 'absolute',
    top: '85%',
    left: '90%',
    zIndex: 1,
  },
});
