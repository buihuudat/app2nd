import React, {useCallback, useEffect} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export type ImageItem = {url: string};

interface UploadProps {
  images: Array<ImageItem>;
  setImages: (images: Array<ImageItem>) => void;
}

const ImageConvert = (props: UploadProps) => {
  const {images, setImages} = props;

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Yêu cầu quyền truy cập máy ảnh',
          message:
            'Để có thể thêm ảnh ' +
            'hãy cấp quyền truy cập máy ảnh cho ứng dụng.',
          buttonNeutral: 'Hỏi lại tôi sau',
          buttonNegative: 'Hủy',
          buttonPositive: 'Đống ý',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Bạn đã cấp quyền truy cập máy ảnh');
      } else {
        Alert.alert('Không có quyền truy cập máy ảnh');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const pickImage = async () => {
    if (images.length >= 6) {
      return Alert.alert('Chỉ giới hạn 6 ảnh');
    }

    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;

          console.log(imageUri);
        }
      },
    );
  };
  const takeImage = async () => {
    if (images.length >= 6) {
      return Alert.alert('Chỉ giới hạn 6 ảnh');
    }

    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.log('Camera Error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;

          console.log(imageUri);

          // setImages([...images, {url: `data:image/jpeg;base64,${imageUri}`}]);
        }
      },
    );
  };

  const removeImage = useCallback((index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }, []);

  return (
    <View style={{padding: 10}}>
      <View style={styles.imageContainer}>
        {images &&
          images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => removeImage(index)}>
              <Image source={{uri: image.url}} style={styles.image} />
            </TouchableOpacity>
          ))}
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.button}>Thêm ảnh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takeImage}>
          <Text style={styles.button}>Chụp ảnh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageConvert;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
