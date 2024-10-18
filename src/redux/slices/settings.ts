import {createSlice} from '@reduxjs/toolkit';

import { SettingsState, ThemeState } from '../../types/redux';
import { TypeSlices } from '../../utils';


export const lightTheme: ThemeState = {
  background: '#121212',
  textPrimary: '#FFFF',
  textSecondary: '#A09CA7',
  divider: 'rgba(0, 0, 0, 0.12)',
  white: '#FFFFFF',
  white1: '#E4E4E400',
  purple: '#2D0046',
  grayLight: '#ECECEC',
  gray: '#8EA2AB',
  grayLight1: '#E4E4E4',
  orange: '#FBAC00',
  orangeLight: '#FBD071',
  black: '#000000',
  purpleLight: '#8100C7',
  purpleLight1: '#801BC445',
  purpleDark: '#190127',
  grayDark: '#4A4A4A',
  grayDark1: '#787878',
  grayLight2: '#F7F7F7',
  grayLight3: '#ADADAD',
  grayLight4: '#707070',
  grayLight5: '#EBEBEB',
  red: '#DC2626',
};

export const darkTheme: ThemeState = {
  background: '#FFFF',
  textPrimary: '#4A4E63',
  textSecondary: '#A09CA7',
  divider: 'rgba(255, 255, 255, 0.12)',
  white: '#FFFFFF',
  white1: '#E4E4E400',
  purple: '#2D0046',
  grayLight: '#ECECEC',
  gray: '#8EA2AB',
  grayLight1: '#E4E4E4',
  orange: '#FBAC00',
  orangeLight: '#FBD071',
  black: '#000000',
  purpleLight: '#8100C7',
  purpleLight1: '#801BC445',
  purpleDark: '#190127',
  grayDark: '#4A4A4A',
  grayDark1: '#787878',
  grayLight2: '#F7F7F7',
  grayLight3: '#ADADAD',
  grayLight4: '#707070',
  grayLight5: '#EBEBEB',
  red: '#DC2626',
};

const initialState: SettingsState = {
  theme: lightTheme
};

export const settingsSlice = createSlice({
  name: TypeSlices.Setting,
  initialState,
  reducers: {
    changeThemeDarkMode: state => {
      state.theme = darkTheme;
    },
    changeThemeLightMode: state => {
      state.theme = lightTheme;
    },
  },
});

export const {
  changeThemeDarkMode,
  changeThemeLightMode,
} = settingsSlice.actions;

export default settingsSlice.reducer;