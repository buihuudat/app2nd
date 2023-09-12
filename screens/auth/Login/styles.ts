import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  textButton: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  backgroundCurvedContainer: {
    flexDirection: 'row',
    backgroundColor: colors.DEFAULT_BLUE,
    height: 50,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    zIndex: -1,
    paddingHorizontal: 10,
  },
});
