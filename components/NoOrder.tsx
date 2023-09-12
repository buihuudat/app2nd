import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';
import {Icon} from 'react-native-elements';

const NoOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="shopping-cart" size={70} style={styles.icon} />
      </View>
      <Text style={styles.title}>Chưa có tin</Text>
    </View>
  );
};

export default NoOrder;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    backgroundColor: colors.LIGHT_GREY2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  icon: {
    marginRight: 5,
    color: colors.DEFAULT_YELLOW,
  },
});
