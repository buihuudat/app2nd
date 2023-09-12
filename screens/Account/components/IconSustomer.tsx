import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../constants/colors';
import {Icon} from 'react-native-elements';

interface Props {
  title: string;
  icon: string;
  bgColor: string;
}

const IconCustomer = (props: Props) => {
  const {title, icon, bgColor} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 15,
          backgroundColor: bgColor,
          marginRight: 5,
        }}>
        <Icon
          name={icon}
          size={15}
          style={styles.icon}
          color={colors.DEFAULT_WHITE}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default IconCustomer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    color: colors.DEFAULT_WHITE,
    padding: 8,
  },
  title: {
    fontSize: 16,
    color: colors.DEFAULT_BLACK,
    fontWeight: '400',
  },
});
