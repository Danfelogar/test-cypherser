import {StyleSheet} from 'react-native';

export function stylesStandardWrapper() {
  return StyleSheet.create({
    containerStandardWrapper: {
      flex: 1,
      flexDirection: 'column',
    },
    safeAreaContent: {
      flex: 1,
    },
    childContainer: {
      width: '100%',
      height: '100%',
    },
  });
}

export function styleInput() {
  return StyleSheet.create({
    WrapperStandard: {
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'orange',
    },
    contentInputGeneric: {
      display: 'flex',
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 10,
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentInput: {
      display: 'flex',
      fontSize: 16.5,
      fontWeight: '400',
      flexGrow: 1,
      height: '100%',
      padding: 10,
    },
    helperText: {
      fontSize: 15.2,
      paddingLeft: 10,
      // fontWeight: '400',
    },
  });
}