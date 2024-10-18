import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {Button} from '../../components';
import { StandardWrapper } from '../../components/StandardWrapper';
import { postDataUser } from '../../redux/slices/userData';
import {RootState} from '../../redux/store';

import { FlatListCardUsers, WeatherCard } from './components';
import { stylesDashboard } from './styles';
import { useDashboard } from './useDashboard';



export const Dashboard = () => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const { dispatch } = useDashboard()
  const {mainWrapper, btn} = stylesDashboard({
    theme,
  });

  return (
    <StandardWrapper>
      <View style={mainWrapper}>
        <WeatherCard />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginTop: 10,
            backgroundColor: theme.background,
          }}>
          <Button
            buttonStyle={btn}
            colorSpinierLoading={theme.black}
            activeOpacity={0.85}
            onPress={() => {
              // navigation.navigate('FormUser', {id: '0'});
              dispatch(postDataUser())
            }}
            textContent={
              <Text style={{color: theme.black}}>Crear usuario</Text>
            }
          />
        </View>
        <FlatListCardUsers/>
      </View>
    </StandardWrapper>
  );
};
