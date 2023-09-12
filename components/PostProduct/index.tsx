import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import BottomSheet from '@gorhom/bottom-sheet';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';
import provinceApi from '../../utils/api/province';
import {dataCateGories, filterCateGories} from '../../constants/data';
import {useAppSelector} from '../../redux/hooks';
import _ from 'lodash';
import ImageConvert, {ImageItem} from '../ImageConvert';
import {styles} from './styles';
import imageUpload from '../../utils/handlers/imageUpload';

const PostProduct = (ref: React.RefObject<BottomSheetMethods>) => {
  const [key, setKey] = useState(0);
  const [data, setData] = useState({filterCateGories: ''});
  const [district, setDistrict] = useState('Chọn quận/huyện');
  const [province, setProvince] = useState([]);
  const [cityCode, setCityCode] = useState<number>();
  const [cityName, setCityName] = useState<string>();
  const [districts, setDistricts] = useState([]);
  const [images, setImages] = useState<Array<ImageItem>>([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');

  const user = useAppSelector(state => state.users.user);

  const isLoading = false;

  const snapPoints = useMemo(() => ['50%'], []);

  useEffect(() => {
    const getProvice = async () => {
      try {
        const {data} = await provinceApi.get();
        setProvince(data);
      } catch (error) {}
    };
    getProvice();
  }, []);

  useEffect(() => {
    const districts = () => {
      province.forEach((data: any) => {
        if (data.code === cityCode) {
          setDistricts(data?.districts);
          setCityName(data?.name);
          setDistrict(data?.districts[0]?.name);
        }
      });
    };
    districts();
  }, [cityCode, province]);

  const handleClose = () => ref.current?.close();
  const handlePostProduct = async () => {
    const newPost = {
      user: user?._id as string,
      category: _.filter(dataCateGories, {title: data.filterCateGories})[0]
        ?.type,
      title,
      description,
      price,
      location: {
        city: cityName,
        district,
      },
      images: await imageUpload(images),
    };
  };

  return (
    <View style={styles.containerBS}>
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.headerBottomSheet}>
            <View>
              <TouchableOpacity style={styles.iconClose} onPress={handleClose}>
                <IonIcons name="close" size={30} color={colors.DEFAULT_WHITE} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.titleHeaderBottomSheet}>
                Đăng tin sản phẩm
              </Text>
            </View>
            <View style={{marginHorizontal: 20}}></View>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <ScrollView>
              <View style={styles.selectDropdownContainer}>
                <SelectDropdown
                  buttonStyle={{
                    backgroundColor: colors.DEFAULT_WHITE,
                    width: '100%',
                    height: '100%',
                  }}
                  buttonTextStyle={{
                    textAlign: 'left',
                    marginHorizontal: 0,
                    fontSize: 16,
                  }}
                  data={filterCateGories}
                  defaultButtonText={data?.filterCateGories ?? 'Chọn thể loại'}
                  onSelect={(selectedItem, index) => {
                    setData({...data, filterCateGories: selectedItem});
                    setKey(index);
                  }}
                  key={key}
                  renderDropdownIcon={isOpened => {
                    return (
                      <IonIcons
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    );
                  }}
                />
              </View>
              <ImageConvert images={images} setImages={setImages} />
              <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Tiêu đề"
                placeholderTextColor={colors.DEFAULT_BLACK}
              />
              <View style={styles.descriptionContainer}>
                <TextInput
                  editable
                  multiline
                  onChangeText={text => setDescription(text)}
                  placeholder="Mô tả"
                  numberOfLines={4}
                  placeholderTextColor={colors.DEFAULT_BLACK}
                  value={description}
                  style={styles.descriptionInput}
                />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}
                placeholder="Giá"
                keyboardType="numeric"
                placeholderTextColor={colors.DEFAULT_BLACK}
              />
              <TextInput
                style={styles.input}
                onChangeText={setPhone}
                value={user?.phone ?? ''}
                placeholder="Số điện thoại liên hệ"
                keyboardType="numeric"
                placeholderTextColor={colors.DEFAULT_BLACK}
              />
              <View style={styles.address}>
                <View style={styles.selectDropdownCityContainer}>
                  <SelectDropdown
                    buttonStyle={{
                      backgroundColor: colors.DEFAULT_WHITE,
                      width: '100%',
                      height: '100%',
                    }}
                    buttonTextStyle={{
                      textAlign: 'left',
                      marginHorizontal: 0,
                      fontSize: 16,
                    }}
                    data={province}
                    defaultButtonText={cityName ?? 'Chọn Tỉnh/TP'}
                    renderCustomizedRowChild={item => (
                      <View style={styles.dropdown3RowChildStyle}>
                        <Text style={styles.dropdown3RowTxt}>{item.name}</Text>
                      </View>
                    )}
                    buttonTextAfterSelection={selectedItem => {
                      return selectedItem.name;
                    }}
                    onSelect={selectedItem => {
                      setDistricts(selectedItem.districts);
                      setCityCode(selectedItem.code);
                    }}
                    renderDropdownIcon={isOpened => (
                      <IonIcons
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={'#444'}
                        size={18}
                      />
                    )}
                  />
                  {/* {sexErrText !== "" && TextErrorInput(sexErrText)} */}
                </View>
                <View style={styles.selectDropdownDistrictContainer}>
                  <SelectDropdown
                    buttonStyle={{
                      backgroundColor: colors.DEFAULT_WHITE,
                      width: '100%',
                      height: '100%',
                    }}
                    buttonTextStyle={{
                      textAlign: 'left',
                      marginHorizontal: 0,
                      fontSize: 16,
                    }}
                    data={districts}
                    defaultButtonText={district}
                    renderCustomizedRowChild={(item, index) => {
                      return (
                        <View style={styles.dropdown3RowChildStyle}>
                          <Text style={styles.dropdown3RowTxt}>
                            {item.name}
                          </Text>
                        </View>
                      );
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem.name;
                    }}
                    onSelect={(selectedItem, index) => {
                      setDistricts(selectedItem.name);
                      setCityCode(selectedItem.code);
                    }}
                    rowTextForSelection={(item, index) => {
                      return item.name;
                    }}
                    renderDropdownIcon={isOpened => {
                      return (
                        <IonIcons
                          name={isOpened ? 'chevron-up' : 'chevron-down'}
                          color={'#444'}
                          size={18}
                        />
                      );
                    }}
                  />
                  {/* {sexErrText !== "" && TextErrorInput(sexErrText)} */}
                </View>
              </View>

              <View style={styles.button}>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Button title="Đăng tin" onPress={handlePostProduct} />
                )}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default PostProduct;
