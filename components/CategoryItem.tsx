import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import {CategoryType} from '../constants/data';

interface Props {
  item: CategoryType;
  onViewCategory: () => void;
}

const CategoryItem = ({item, onViewCategory}: Props) => {
  return (
    <TouchableOpacity onPress={onViewCategory}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={item.source} />

          <View style={styles.titlePostProduct}>
            <Text style={styles.titleContent}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 140,
    backgroundColor: colors.LIGHT_GREY,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  titlePostProduct: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleContent: {
    fontSize: 12,
    color: colors.DEFAULT_BLACK,
    fontWeight: '600',
    textAlign: 'center',
  },
});
