import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {stylesCardUserData} from '..';
import {HandlerImage} from '../../../components';
import { deleteSingleDataUser } from '../../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../../redux/store';
import { UserFront } from '../../../types/userData';
import { TypeImage } from '../../../utils';


export const CardUser = ({user}: {user: UserFront}) => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();
  const {
    mainWrapper,
    imgUser,
    dataUserWrapper,
    textName,
    textId,
    wrapperActions,
    wrapperButton,
  } = stylesCardUserData({
    theme,
  });


  return (
    <View style={mainWrapper}>
      <HandlerImage
        typeFile={TypeImage.Remote}
        imgStyle={imgUser}
        imageSource={'https://c7.alamy.com/comp/2J26T31/female-user-avatar-generic-app-profile-picture-2J26T31.jpg'}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={dataUserWrapper}>
            <Text style={textName} numberOfLines={1} ellipsizeMode="tail">
              {user.name} my age is {user.age}
            </Text>
            <Text style={textId} numberOfLines={1} ellipsizeMode="tail">
              {user.id}
            </Text>
          </View>
          <View style={wrapperActions}>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  fontSize: 19,
                  color: theme.textPrimary,
                }}>
                Acciones
              </Text>
            </View>
            <TouchableOpacity onPress={()=>dispatch(deleteSingleDataUser(user.id))} style={wrapperButton}>
              <Text>📥</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};