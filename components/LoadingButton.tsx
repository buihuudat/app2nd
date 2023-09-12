import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';

interface Props {
  loading: boolean;
  title: string;
  onPress: () => void;
}

export default function LoadingButton(props: Props) {
  const {loading, onPress, title} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            ...styles.button,
            backgroundColor: loading ? colors.DEFAULT_BLUE : colors.GOOGLE_BLUE,
          }}>
          {loading && (
            <ActivityIndicator size="large" color={colors.LIGHT_GREY} />
          )}
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 240,
    height: 70,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
