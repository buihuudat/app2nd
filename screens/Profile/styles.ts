import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  profileSubContent: {
    backgroundColor: colors.DEFAULT_BLUE,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 10,
  },

  infoImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover',
  },

  infoText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
  },

  follow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 3,
  },

  followText: {fontSize: 13, color: colors.DEFAULT_WHITE},

  form: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  formItem: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  formItemInput: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.FABEBOOK_BLUE,
    paddingLeft: 10,
  },
});
