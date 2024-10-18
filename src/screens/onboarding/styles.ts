import {StyleSheet} from 'react-native';

import { ThemeState } from '../../types/redux';
import {heightFullScreen, isIOS, widthFullScreen} from '../../utils';

export function stylesOnboarding({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.background,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    btnStyles: {
      marginTop: heightFullScreen * 0.35,
      width: widthFullScreen * 0.85,
      backgroundColor: theme.purple,
      borderRadius: 75,
      paddingVertical: isIOS() ? 20 : 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBtnStyles: {
      color: theme.white,
      fontSize: 18,
    },
  });
}