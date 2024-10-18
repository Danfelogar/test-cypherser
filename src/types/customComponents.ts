import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  StyleProp,
} from 'react-native';

import { TypeImage } from '../utils';

//Button
export interface CustomButton {
  buttonStyle: StyleProp<any>;
  activeOpacity?: number;
  onPress: (event: GestureResponderEvent) => void;
  firstIcon?: ReactNode;
  textContent?: ReactNode;
  lastIcon?: ReactNode;
  isLoading?: boolean;
  colorSpinierLoading?: string;
}

//Input
export interface CustomInputGeneric {
  borderColor?: string;
  inputStyle?: StyleProp<any>;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  multiline?: boolean;
  multilineStyle?: StyleProp<any>;
  heightMultiline?: number;
  //control
  name: string;
  control: any;
}

//Image
export interface CustomImage {
  imageSource: ImageSourcePropType | string;
  imgStyle: StyleProp<ImageStyle>;
  typeFile: TypeImage;
}