import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';


import {Button} from '../../components';
import { StandardWrapper } from '../../components/StandardWrapper';
import {RootState} from '../../redux/store';
import { RootStackMainParams } from '../../types/RootStackMainParams';

import { stylesOnboarding } from './styles';


type NavigationProp = NativeStackScreenProps<
  RootStackMainParams,
  'PublicNavigation'
>;

export const Onboarding = () => {
  const {theme} = useSelector((state: RootState) => state.settings);

  const navigation = useNavigation<NavigationProp['navigation']>();

  const {
    mainWrapper,
    title,
    btnStyles,
    textBtnStyles,
  } = stylesOnboarding({
    theme,
  });

  return (
    <StandardWrapper>
      <View style={mainWrapper}>

        <Text style={title}>
          Hello Danfelogar 🚀
        </Text>
        <Button
          buttonStyle={btnStyles}
          activeOpacity={0.9}
          onPress={() => {
            //dddd
            // whoisHelp()
            navigation.navigate('PrivateNavigation')
          }}
          textContent={<Text style={textBtnStyles}>Next page</Text>}
        />
      </View>
    </StandardWrapper>
  );
};