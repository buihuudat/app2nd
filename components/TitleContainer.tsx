import React from 'react';
import colors from '../constants/colors';
import {StyleSheet, Text, View} from 'react-native';

const TitleContainer = ({content}: {content: string}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default TitleContainer;

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_GREY,
    marginVertical: 5,
  },
  content: {
    color: colors.DEFAULT_BLACK,
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
});
