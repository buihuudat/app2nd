import axios from 'axios';
import {ImageItem} from '../../components/ImageConvert';

const path = '';
const preset = '';
const cloudName = '';

const imageUpload = async (images: Array<ImageItem>) => {
  try {
    const uploadPromises = images.map(async (image: any) => {
      const data = new FormData();
      data.append('file', image.url);
      data.append('Upload_preset', preset);
      data.append('clound_name', cloudName);
      const response = await axios.post(path, data);
      return {url: response.data.url};
    });
    const uploadImages = await Promise.all(uploadPromises);
    return uploadImages;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default imageUpload;
