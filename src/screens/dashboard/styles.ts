import {StyleSheet} from 'react-native';

import { ThemeState } from '../../types/redux';
import { isIOS, widthFullScreen } from '../../utils';

export function stylesDashboard({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.background,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.orange,
      borderRadius: 12,
    },
  });
}

export function stylesCardUserData({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      width: '100%',
      height: 80,
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
      backgroundColor: theme.textSecondary,
      borderRadius: 12,
      shadowColor: theme.textPrimary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    imgUser: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    dataUserWrapper: {
      width: isIOS() ? '70%' : '65%',
      height: '100%',
      flexDirection: 'column',
    },
    textName: {
      fontSize: 19,
      color: theme.textPrimary,
      marginBottom: 3,
      overflow: 'hidden',
      maxWidth: '100%',
    },
    textId: {
      fontSize: 14,
      color: theme.textPrimary,

      overflow: 'hidden',
      maxWidth: '100%',
    },
    wrapperActions: {
      width: isIOS() ? '30%' : '35%',
      height: '100%',
      flexDirection: 'column',
    },
    wrapperButton: {
      display: 'flex',
      flexDirection: 'row',
      width: widthFullScreen * 0.07,
      height: widthFullScreen * 0.07,
      borderRadius: widthFullScreen * 0.035,
      backgroundColor: theme.orange,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}