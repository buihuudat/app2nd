import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DEFAULT_WHITE,
    width: '100%',
    height: '100%',
  },
  imageLogo: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  name: {
    fontSize: 30,
  },

  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  textButton: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  box: {
    backgroundColor: '#08226c',
    height: 80,
  },
  bottomWavy: {
    position: 'absolute',
    bottom: 20,
  },
});
