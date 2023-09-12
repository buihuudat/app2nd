import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  containerBS: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContainer: {
    flexDirection: 'column',
  },
  headerBottomSheet: {
    width: '100%',
    height: 55,
    backgroundColor: colors.DEFAULT_BLUE,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeaderBottomSheet: {
    fontSize: 19,
    fontWeight: '500',
    color: colors.DEFAULT_WHITE,
  },
  iconClose: {
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: colors.DEFAULT_WHITE,
    borderColor: colors.DEFAULT_GREY,
  },
  descriptionContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  descriptionInput: {
    paddingLeft: 10,
    fontSize: 16,
    flex: 1,

    backgroundColor: colors.DEFAULT_WHITE,
    borderWidth: 1,
    borderColor: colors.DEFAULT_GREY,
    // borderRadius: IsIOS ? 4 : 0,
  },
  button: {
    backgroundColor: colors.DEFAULT_BLUE,
    marginHorizontal: 100,
    borderRadius: 5,
    marginTop: 20,
  },
  selectDropdownContainer: {
    width: '95%',
    height: 40,

    backgroundColor: colors.DEFAULT_WHITE,
    borderWidth: 1,
    borderColor: colors.DEFAULT_GREY,

    margin: 10,
  },
  address: {
    // flexDirection:"row",
    width: '95%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  selectDropdownCityContainer: {
    width: '47%',
    height: '100%',
    backgroundColor: colors.DEFAULT_WHITE,
    borderWidth: 1,
    borderColor: colors.DEFAULT_GREY,
  },
  selectDropdownDistrictContainer: {
    width: '47%',
    height: '100%',
    backgroundColor: colors.DEFAULT_WHITE,
    borderWidth: 1,
    borderColor: colors.DEFAULT_GREY,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dropdown3RowTxt: {
    color: colors.DEFAULT_BLACK,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  containerImage: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
