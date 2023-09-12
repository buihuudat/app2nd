import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  mainContainer: {
    marginHorizontal: 10,
  },
  avatarProfile: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
  },
  infoAcountContainer: {
    flexDirection: 'column',
  },
  name: {
    color: colors.DEFAULT_BLACK,
    fontSize: 14,
    fontWeight: '600',
  },
  followContainer: {
    flexDirection: 'row',
  },
  numberFollow: {
    marginRight: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  userFollow: {
    fontSize: 14,
    color: colors.INACTIVE_GREY,
  },
  followContainerItem: {
    flexDirection: 'row',
    marginRight: 20,
  },
  rating: {
    paddingVertical: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconEditContainer: {
    position: 'absolute',
    top: '60%',
    left: '10%',
    zIndex: 1,
    borderRadius: 15,
    backgroundColor: colors.DEFAULT_BLUE,
  },
  iconEdit: {
    color: colors.DEFAULT_WHITE,
    padding: 3,
  },
});
