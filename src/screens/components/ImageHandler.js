import ImageCropPicker from 'react-native-image-crop-picker';
import {heightToDp, widthToDp} from '../../utils/responsive';

const ImageHandler = async () => {
  try {
    const response = await ImageCropPicker.openPicker({
      height: heightToDp(30),
      width: widthToDp(30),
      cropping: true,
    });

    console.log('pathhhhh=====', response.path);
    return response.path;
  } catch (err) {
    console.log(err.message);
  }
};

export default ImageHandler;
