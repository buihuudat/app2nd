import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DEFAULT_WHITE,
    width: '100%',
    height: '100%',
  },
  backgroundCurvedContainer: {
    flexDirection: 'row',
    backgroundColor: colors.DEFAULT_BLUE,
    height: 70,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    zIndex: -1,
    paddingHorizontal: 10,
  },
  mainContainer: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  textButton: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'cover',
    width: 200,
    height: 200,
  },
  btnNext: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.DEFAULT_BLUE,
  },
  viewHaveAcc: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
